import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/globals.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AuthContextProvider } from "@/src/context/AuthContext";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5e18',
    },
  },
});

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <AuthContextProvider>
      {getLayout(<Component {...pageProps} />)}
      </AuthContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
