import type { NextPage } from "next";
import Head from "next/head";

import { useRef } from "react";

const Login: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    /* login fetch */

    /* handle unsuccessful login */

    /* redirect on successful login */
    const { push } = (await import("next/router")).default;
    push("/setup");
  };

  return (
    <div className="fixed">
      <form id="login" action="/setup">
        <h3>Log in to your SzunyoX account!</h3>
        <input
          id="username"
          type="email"
          placeholder="Email address"
          ref={emailRef}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <p>or</p>
        <button className="appleBtn">
          <img src="../logo/apple.png" alt="" />
          <span>Sign in with Apple</span>
        </button>
        <button>
          <img src="../logo/google.png" alt="" />
          <span>Sign in with Google</span>
        </button>
        <button className="mainBtn" type="button" onClick={handleSubmit}>
          Start Chatting
        </button>
        <a className="margin" href="#">
          Forgot password
        </a>
        <a className="margin" href="#">
          Learn more about us
        </a>
      </form>
      <div className="bubble"></div>
      <div className="bubble mid"></div>
      <div className="bubble big"></div>
    </div>
  );
};

export default Login;
