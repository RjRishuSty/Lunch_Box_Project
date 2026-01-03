import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { theme } from "./theme.js";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
  <CssBaseline/>
    <App />
  </ThemeProvider>
);
