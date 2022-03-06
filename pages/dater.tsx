import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

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
          <div className="user-info card">
            <div className="user-header">
              <h2 id="name">Big Floppa</h2>
              <h2 id="age">23</h2>
            </div>
            <div className="bio">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              cupiditate maiores at. Voluptatibus cum numquam consequuntur
              necessitatibus blanditiis! Fugiat, neque!
            </div>
            <div className="tags">
              <a href="" className="tag">
                Cement
              </a>
              <a href="" className="tag">
                Friday
              </a>
              <a href="" className="tag">
                Funny Ears
              </a>
            </div>
          </div>
          <div className="chat">
            <div className="chat-area">
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message user">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Laborum, quaerat.
              </div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message user">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message user">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
              <div className="message user">Lorem ipsum dolor sit amet.</div>
              <div className="message user">Lorem ipsum dolor sit amet.</div>
              <div className="message">Lorem ipsum dolor sit amet.</div>
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
