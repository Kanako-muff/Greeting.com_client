import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import logoSvg from "../../../public/images/logo.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import authUtils from "../../utils/authUtils";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';
import { useSelector } from 'react-redux';


const useStyles = makeStyles(theme => ({
  authHeader: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    margin: 0,
    justifyContent: "space-around",
    height: "68px",
    backgroundColor: "#D3DDE4",
  },
  authText: {
    margin: 0,
    fontFamily: "'Noto Serif', serif",
    textDecorationLine: "none",
    fontSize: "18px",
  },
  authTextHover: {
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: "0.6",
    },
  },
  authButton: {
    marginLeft: "15px",
    color: "white",
    backgroundColor: "#4F5358",
    borderRadius: "50px",
    padding: "8px 20px",
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: "0.6",
    },
  },
  menuButton: {
    color: "white",
    backgroundColor: "#C8D0DA",
    width: "20rem",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#B9C3D0",
    },
  },
  authFooter: {
    backgroundColor: "#4F5358",
    height: "40px",
    display: "flex",
    alignItems: "center",
    margin: 0,
    justifyContent: "center",
  }
}));

const HomeLayoutLoggedIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    //JWTを持っているのか確認する。
    const checkAuth = async() => {
      //認証チェック
      const user = await authUtils.isAuthenticated();
      if(!user){
        navigate("/my-home/create-card");
      }else{
        //ユーザーを保存する
        dispatch(setUser(user));
      }
    };
    checkAuth();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Container component="main" disableGutters maxWidth={false}>
        <Box className={classes.authHeader} style={{height: "68px", backgroundColor: "#D3DDE4"}}>
          <Link to="/" className={classes.authTextHover} style={{display: "flex", alignItems: "center"}}>
            <img style={{height: "3rem"}} src={logoSvg} alt="Logo" />
          </Link>
          <Box>
            <Box onClick={logout} className={`${classes.authText} ${classes.authButton}`} style={{display: "flex", alignItems: "center", marginLeft: "0px"}}>
              {user.username}&nbsp;&nbsp;
              <LogoutIcon />
            </Box>
          </Box>
        </Box>

        <Box className={classes.authHeader} style={{justifyContent: "center", height: "auto", backgroundColor: "#C8D0DA"}}>
          <Link to="/my-home/create-card" className={`${classes.authText} ${classes.menuButton}`}>
            {"New Card"}
          </Link>
          <Link to="/my-home/my-past-cards" className={`${classes.authText} ${classes.menuButton}`}>
            {"Past Card"}
          </Link>
        </Box>
      </Container>
      <Outlet />
      <Container component="footer" disableGutters maxWidth={false}>
        <p className={`${classes.authFooter} ${classes.authText}`} style={{color: "white"}}>
          © Easy+Hearty Greeting.com
        </p>
      </Container>
    </div>
  );
};

export default HomeLayoutLoggedIn;
