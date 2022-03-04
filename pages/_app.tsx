import "../styles/login.scss";
import "../styles/main.scss";
import "../styles/elements/bubble.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
