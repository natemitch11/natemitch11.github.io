import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#58a4b0",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(165deg, #a8a8a8 0%, #252525 50%, #474747 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
        a: {
          textDecoration: "none",
          color: "#ffffff",
          ":hover": {
            transition: "0.2s",
            color: "#58a4b0",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "20px",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
