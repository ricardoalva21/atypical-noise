import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#ff4d00",
    },

    background: {
      default: "#050505",
      paper: "rgba(255,255,255,0.06)",
    },
  },

  typography: {
    fontFamily: "'Sora', sans-serif",
  },
});

export default theme;