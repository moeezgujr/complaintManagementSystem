import React from "react";

import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Routing from "./router";
function App() {
  const mode = useSelector((state) => state.movies.selectedMovieShow);
  const theme = createTheme({
    palette: {
      color: {
        main: mode ? "#000000" : "#FFFFFF",
        primary: mode ? "#4C4C4C" : "#FFFFFF",
        secondary: mode ? "#9FA2B4" : "#FFFFFF",
        alpha: mode ? "#FFFFFF" : "#000000",
        wolf: mode ? "#FFFFFF" : "#FFFFFF",
      },
      backgroundColor: {
        main: mode ? "#FFFFFF" : "#222338",
        primary: mode ? "#319CFF" : "#222338",
        iconbg1: mode ? "#21A365" : "#21A365",
        iconbg2: mode ? "#F12B2C" : "#F12B2C",
        bgColor: mode ? "#FFFFF" : "#1B1C31",
        bgtab: mode ? "#DFE0EB" : "#222338",
        alpha: mode ? "#F6F6F6" : "#1B1C31",
        btnbg: mode ? "#0660FE" : "#0660FE",
      },
      icon: {
        main: mode ? "#FFE9D" : "#FFFFFF",
        primary: mode ? "#D3EDE0" : "#FFFFFF",
        secondary: mode ? "#CFEEFF" : "#FFFFFF",
        alpha: mode ? "#F3E5F5" : "#FFFFFF",
        beta: mode ? "#FFFFC7" : "#FFFFFF",
        gamma: mode ? "#F7D8DE" : "#FFFFFF",
        hexa: mode ? "#FFE2E4" : "#FFFFFF",
      },
    },

    typography: {
      fontFamily: "Inter",
      h1: {
        fontSize: "30px",
        fontWeight: 600,
      },
      h2: {
        fontSize: "15px",
        fontWeight: 600,
      },
      h3: {
        fontSize: "14px",
        fontWeight: 700,
      },
      h4: {
        fontSize: "15px",
        fontWeight: 500,
      },
    },
    border: {
      main: mode ? "#DFE0EB" : "#FFFFFF",
      default: mode ? "#F1F1F1" : "#FFFFFF",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
