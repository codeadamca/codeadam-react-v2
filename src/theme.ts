import {createTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "100vw",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },
      },
    },
  },
});

export default theme;
