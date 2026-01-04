import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1B5E20", // Dark Agro Green
      light: "#4CAF50", // Fresh Green
      dark: "#0D3B14",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#D84315", // Saffron / Earth Orange
      light: "#FF8A65",
      dark: "#BF360C",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#FAFAFA", // Milk white background
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1F2933", // Dark readable text
      secondary: "#4B5563",
      disabled: "#9CA3AF",
    },

    success: {
      main: "#2E7D32",
    },

    warning: {
      main: "#ED6C02",
    },

    error: {
      main: "#D32F2F",
    },

    info: {
      main: "#0288D1",
    },
  },

  typography: {
    fontFamily: ["Poppins", "Hind", "Roboto", "Arial", "sans-serif"].join(","),

    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#1B5E20",
    },

    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#1B5E20",
    },

    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },

    h4: {
      fontSize: "1.6rem",
      fontWeight: 500,
    },

    h5: {
      fontSize: "1.3rem",
      fontWeight: 500,
    },

    h6: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },

    body1: {
      fontSize: "1rem",
      color: "#1F2933",
    },

    body2: {
      fontSize: "0.9rem",
      color: "#4B5563",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          fontWeight:400,
          letterSpacing:1
        },
        containedPrimary: {
          backgroundColor: "#1B5E20",
          "&:hover": {
            backgroundColor: "#0D3B14",
          },
        },
        containedSecondary: {
          backgroundColor: "#D84315",
          "&:hover": {
            backgroundColor: "#BF360C",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#1B5E20",
          "&:hover": {
            color: "#FFC107",
          },
        },
      },
    },
  },
});
