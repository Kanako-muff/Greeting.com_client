import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#333",
      white: "#fff",
    },
    primary: {
      main: "#D3DDE4",
    },
    secondary: {
      main: "#C8D0DA",
      dark: "#B9C3D0",
    },
    tertiary: {
      main: "#4F5358",
    },
  },
  // 他のテーマ設定も追加
});

export default theme;
