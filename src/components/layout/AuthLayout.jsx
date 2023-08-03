import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import logoSvg from "../../../public/images/logo.svg"
import authUtils from "../../utils/authUtils"

const useStyles = makeStyles(theme => ({
  authHeader: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    margin: 0,
    justifyContent: "center",
    height: "68px",
    backgroundColor: "#D3DDE4",
  },
  authText: {
    margin: 0,
    fontFamily: "'Noto Serif', serif",
    textDecorationLine: "none",
    color: "white",
    fontSize: "18px",
  },
  authTextHover: {
    transition: "color 0.3s", // カラーの変化を0.3秒で行うトランジション
    "&:hover": {
      color: "rgba(255, 255, 255, 0.6)", // hover時の文字の透過具合を設定
    },
  },
}));

const AuthLayout = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    //JWTを持っているのか確認する。
    const checkAuth = async() => {
      //認証チェック
      const isAuth = await authUtils.isAuthenticated();
      if(isAuth){
        navigate("/my-home/create-card");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div>
      <Container component="main" disableGutters maxWidth={false}>
        <Link to="/" className={`${classes.authHeader} ${classes.authTextHover}`} style={{height: "68px", backgroundColor: "#D3DDE4"}}>
          <img style={{height: "3rem"}} src={logoSvg} alt="Logo" />
        </Link>
        <Box className={classes.authHeader} style={{height: "auto", backgroundColor: "#C8D0DA"}}>
          <Link to="/home/create-card" className={`${classes.authText} ${classes.authTextHover}`}>
            {"Create cards without logging in"}
            <span style={{marginLeft: "4px"}}>💌</span>
          </Link>
        </Box>
      </Container>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
