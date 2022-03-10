import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import ActiveChatCard from "@components/Cards/ActiveChatCard";
import SavedChatCard from "@components/Cards/SavedChatCard";

/* @TODO: temp array to simulate .map data rendering from db on custom components */
const Login: NextPage = () => {
  const { push } = useRouter();
  return (
    <Layout>
      <header>
      <span className="header-btn"></span>
        {/* <button title="Back" className="header-btn" onClick={() => push("/")}>
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/back.png"
          />
        </button> */}
        Chats
        <button title="More" className="header-btn">
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/more.png"
          />
        </button>
      </header>
      <main className="bmargin">
        <h3>Saved-only chats</h3>
        <section className="saved-only">
          <div className="row chat-heads">
            <SavedChatCard name={"Big Floppa"} />
            <SavedChatCard name={"Big Floppa"} />
            <SavedChatCard name={"Big Floppa"} />
            <SavedChatCard name={"Big Floppa"} />
            <SavedChatCard name={"Big Floppa"} />
          </div>
        </section>
        <h3>Active chats</h3>
        <section className="active-chats">
          <ActiveChatCard
            name={"Icus"}
            lastMessage={"Szunyox nyitva?"}
            newChatMessage
          />
          <ActiveChatCard name={"Icus"} lastMessage={"Szunyox nyitva?"} />
          <ActiveChatCard name={"Icus"} lastMessage={"Szunyox nyitva?"} />
        </section>
      </main>
    </Layout>
  );
};

export default Login;
