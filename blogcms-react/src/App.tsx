import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Shell from "./components/Shell";
import { Button, Header, MantineProvider, Paper } from "@mantine/core";
import { theme } from "./styles/theme";
import Home from "./pages/Home";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <BrowserRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Outlet />
        </Shell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
