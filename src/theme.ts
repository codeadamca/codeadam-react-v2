import {createTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#00ff00",
    },
    secondary: {
      main: "#ff0000",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "100vw",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          border: "1px solid red",
        },
      },
    },
  },
});

export default theme;
