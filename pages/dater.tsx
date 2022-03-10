import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import Message from "@components/Chat/Message";
/* temp data until we have db */
import { msgData, UserData } from "lib/temp/messageData";
import ChatPartnerInfo from "@components/Chat/ChatPartnerInfo";

const Login: NextPage = () => {
  const { push } = useRouter();
  return (
    <div>
      <header>
        <button title="Back" className="header-btn" onClick={() => push("/")}>
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/back.png"
          />
        </button>
        Dater
        <button title="Back" className="header-btn">
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/more.png"
          />
        </button>
      </header>
      <main>
        <section className="candidate">
          <ChatPartnerInfo {...UserData} />
          <div className="chat">
            <div className="chat-area">
              {msgData.map((x) => (
                <Message {...x} key={x.id} />
              ))}
            </div>
            <div className="message-input">
              <div className="input-elements">
                <input placeholder="Say something nice!" type="text" />
                <a className="send-btn">
                  <img
                    alt=""
                    src="https://img.icons8.com/material-rounded/96/000000/send-letter.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="reaction">
            <button id="dislike">Not my type</button>
            <button id="save">Save chat</button>
            <button id="like">Interesting</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
