import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@components/Layout";

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <Layout>
      <header>
        <span className="header-btn"></span>
        Home
        <button title="Back" className="header-btn">
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/more.png"
          />
        </button>
      </header>
      <main className="bmargin">
        <section className="greeting">
          <h1>Good afternoon, Icus!</h1>
        </section>
        <section
          tabIndex={1}
          onClick={() => push("/dater")}
          className="dater-info card"
        >
          <div className="card-header">
            <h3>New picks for you!</h3>
          </div>
          <img
            className="stars"
            alt=""
            src="https://img.icons8.com/ios-filled/150/000000/sparkling--v2.png"
          />
          <p>We found 12 people near you.</p>
          <p>5 of them shares same interests.</p>
          <div className="card-footer">
            <text>tap here to open Dater</text>
          </div>
        </section>
        <section tabIndex={2} className="tip card">
          <div className="card-header">Finish up your account!</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            cupiditate iusto veniam, est obcaecati aliquam provident a eaque
            assumenda mollitia.
          </p>
          <div className="card-footer">
            <text>tip</text>
          </div>
        </section>
        <section tabIndex={3} className="stat card">
          <div className="card-header">Statistics</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            qui dolorum repellendus, deleniti alias harum atque, hic mollitia
            cupiditate eius, nesciunt sed.
          </p>
          <div className="card-footer">
            <text>tap for more info</text>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
