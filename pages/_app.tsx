import "../styles/main.scss";
import "../styles/chat.scss";
import "../styles/chatsPage.scss";
import "../styles/dater.scss";
import "../styles/home.scss";
import "../styles/login.scss";
import "../styles/menu.scss";
import "../styles/reactions.scss";
import "../styles/setup.scss";
import "../styles/profileViewer.scss";
import "../styles/elements/bubble.scss";
import type { AppProps } from "next/app";
import { socket, SocketContext } from "@lib/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SocketContext.Provider value={socket}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}

export default MyApp;
