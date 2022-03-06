import "../styles/main.scss";
import "../styles/chat.scss";
import "../styles/chatsPage.scss";
import "../styles/dater.scss";
import "../styles/home.scss";
import "../styles/login.scss";
import "../styles/menu.scss";
import "../styles/reactions.scss";
import "../styles/setup.scss";
import "../styles/elements/bubble.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
