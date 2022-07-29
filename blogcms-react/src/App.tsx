import { useContext, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Shell from "./components/Shell";
import { Button, Header, MantineProvider, Paper } from "@mantine/core";
import { theme } from "./styles/theme";
import Home from "./pages/Home";
import Compose from "./pages/Compose";
import Dashboard from "./pages/Dashboard";
import View from "./pages/View";
import { QueryClientProvider } from "@tanstack/react-query";
import { prefetch, queryClient } from "./services/queryClient";
import { AuthPage } from "./components/AuthPage";
import AuthRequired, { AuthContext } from "./services/AuthRequired";

function App() {
  const authUser = useContext(AuthContext)
  const prefetchedPosts = prefetch.prefetchPosts()
  console.log(prefetchedPosts)

  return (
    <QueryClientProvider client={queryClient}>

    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <BrowserRouter>
          {authUser.session?
        <Shell>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/compose" element={<Compose />}/>
            <Route path="/dash" element={<Dashboard />}/>
            <Route path="/view" element={<View />}/>
          </Routes>
        </Shell>
        : <AuthPage /> }
      </BrowserRouter>
    </MantineProvider>

    </QueryClientProvider>
  );
}

export default App;
