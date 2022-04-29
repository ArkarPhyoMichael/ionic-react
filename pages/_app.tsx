import "../styles/globals.scss";
import type { AppProps } from "next/app";

// ionic
import "@ionic/react/css/core.css";
import "../styles/variables.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
