import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MantineProvider, AppShell, Navbar, Header } from "@mantine/core";
import Layout from "./components/layout/layout";
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <></>
      </Layout>
    </MantineProvider>
  );
}

export default App;
