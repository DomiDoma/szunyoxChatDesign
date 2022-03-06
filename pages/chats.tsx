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
        Chats
        <button title="Back" className="header-btn">
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/more.png"
          />
        </button>
      </header>
      <main className="inflow">
        <h3>Saved-only chats</h3>
        <section className="saved-only">
          <div className="row chat-heads">
            <div className="profile card">
              <img
                src="https://media.karousell.com/media/photos/products/2022/2/8/big_floppa_1644303126_391dfcc8_progressive.jpg"
                alt=""
              />
              <p>Big Floppa</p>
            </div>
            <div className="profile card">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fzn39ffDhfKI%2Fmaxresdefault.jpg&f=1&nofb=1"
                alt=""
              />
              <p>Big Floppa</p>
            </div>
            <div className="profile card">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fh9bt1f33lme71.jpg&f=1&nofb=1"
                alt=""
              />
              <p>Big Floppa</p>
            </div>
            <div className="profile card">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.curiosidades.com.br%2Fwp-content%2Fuploads%2F2021%2F06%2Fmemes-de-gatos-768x512.jpg&f=1&nofb=1"
                alt=""
              />
              <p>Big Floppa</p>
            </div>
            <div className="profile card">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPE8Wf5GkzEE%2Fhqdefault.jpg&f=1&nofb=1"
                alt=""
              />
              <p>Big Floppa</p>
            </div>
          </div>
        </section>
        <h3>Active chats</h3>
        <section className="active-chats">
          <div className="new chat card">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPE8Wf5GkzEE%2Fhqdefault.jpg&f=1&nofb=1"
              alt=""
            />
            <div className="column">
              <h4 id="name">Icus</h4>
              <p id="last-sent">szunyox nyitva?</p>
            </div>
          </div>
          <div className="chat card">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPE8Wf5GkzEE%2Fhqdefault.jpg&f=1&nofb=1"
              alt=""
            />
            <div className="column">
              <h4 id="name">Icus</h4>
              <p id="last-sent">szunyox nyitva?</p>
            </div>
          </div>
          <div className="chat card">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPE8Wf5GkzEE%2Fhqdefault.jpg&f=1&nofb=1"
              alt=""
            />
            <div className="column">
              <h4 id="name">Icus</h4>
              <p id="last-sent">szunyox nyitva?</p>
            </div>
          </div>
        </section>
      </main>

      <menu>
        <a href="home.html">
          <img
            alt=""
            src="https://img.icons8.com/material-rounded/90/000000/home.png"
          />
          Home
        </a>
        <a href="chats.html" id="active">
          <img
            alt=""
            src="https://img.icons8.com/material/90/000000/chat--v1.png"
          />
          Chats
        </a>
        <a href="tops.html">
          <img
            alt=""
            src="https://img.icons8.com/material-rounded/90/000000/star--v1.png"
          />
          Top picks
        </a>
        <a href="account.html">
          <img
            alt=""
            src="https://img.icons8.com/material-rounded/90/000000/guest-male.png"
          />
          Account
        </a>
      </menu>
    </div>
  );
};

export default Login;
