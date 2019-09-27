import React from "react";
import ThemeProvider, { createGlobalStyle } from "@carvana/theme";
import Layout from "./components/Layout";
import Pokemon from "./components/Pokemon";

const GlobalStyle = createGlobalStyle(process.env.NODE_ENV);

const App = (
  <ThemeProvider>
    <>
      <GlobalStyle />
      <Layout>
        <Pokemon />
      </Layout>
    </>
  </ThemeProvider>
);

export default App;
