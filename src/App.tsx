import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0077ff",
        light: "#ff0000",
      },

      text: {
        primary: "#0077ff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
