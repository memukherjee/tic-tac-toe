import { createTheme } from "@mui/material";

const colorPalette = {
  primary: {
    main: "#222",
  },
  secondary: {
    main: "#999",
  },
};

const theme = createTheme({
  palette: colorPalette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100vh",
          backgroundColor: colorPalette.primary.main,
          color: colorPalette.secondary.main,
          display: "grid",
          placeItems: "center",
        },
      },
    },
  },
});

export default theme;
