import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layout/AuthLayout';
import Register from './pages/Register';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { blue } from "@mui/material/colors"
import Pastcards from './pages/PastCards.jsx';
import Newcard from './pages/NewCard';
import HomeLayout from './components/layout/HomeLayout';
import PastCards_loggedIn from './pages/PastCards_loggedIn';
import HomeLayout_loggedIn from './components/layout/HomeLayout_loggedIn';
import FinalCardDesign from './pages/FinalCardDesign';

function App() {

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
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path='/' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route path='/home' element={<HomeLayout />}>
            <Route path='new-card' element={<Newcard />}/>
            <Route path='final-card-design' element={<FinalCardDesign />}/>
            <Route path='past-cards' element={<Pastcards />}/>
          </Route>
          <Route path='/my-home' element={<HomeLayout_loggedIn />}>
            <Route path='new-card' element={<Newcard />}/>
            <Route path='my-past-cards' element={<PastCards_loggedIn />}/>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
