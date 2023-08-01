import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
// require("dotenv").config();
// ⬆︎【?】uncaught referenceerror: require is not defined

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#C8D0DA"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [backgroundImage, setBackgroundImage] = useState("");
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");

  //Get envelope images from Unsplash
  useEffect(() => {
    const fetchEnvelopeImage = async () => {
      const apiKey = "CXXeRygCk_yfEdiFBTp3LiuEnuDaYxKCMv3_VLACync";
      const query = "envelope";

      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`
        );
        const data = await response.json();
        setBackgroundImage(data.urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    //【?】Rendered twice!!!!! why???
    fetchEnvelopeImage(); // 関数を実行して"envelope"に関連する画像を取得
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setUsernameErrText("");
    setPasswordErrText("");

    //入力欄の文字列を取得
    const data = new FormData(e.target);
    const username = data.get("username").trim();
    const password = data.get("password").trim();
    console.log(username);
    console.log(password);

    let error = false;

    if(username === ""){
      setUsernameErrText("Please enter your Username");
      error = true;
    }
    if(password === ""){
      setPasswordErrText("Please enter your password");
      error = true;
    }

    if(error) return;

    // 新規登録APIを叩く
    try {
      const res = await authApi.login({
        username,
        password,
      });
      localStorage.setItem("token", res.token);
      console.log("Signing in succeeded!");
      navigate("/my-home/new-card");
    } catch (err) {
      const errors = err.data.errors;
      console.log(errors);
      errors.forEach((err) => {
        if (err.param === "username") {
          setUsernameErrText(err.msg);
        }
        if (err.param === "password") {
          setPasswordErrText(err.msg);
        }
      });
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={classes.image}
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                helperText={usernameErrText}
                error={usernameErrText !== ""}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              margin="normal"
              helperText={passwordErrText}
              error={passwordErrText !== ""}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: '#C8D0DA', color: "white" }}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2" style={{ color: "#C8D0DA" }}>
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/register" variant="body2" style={{ color: "#C8D0DA" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
