import type { NextPage } from "next";
import Head from "next/head";

import { useRef } from "react";

import { API_URL } from "@lib/constants";
import { isPasswordEqual, isValidEmail } from "@lib/utils";

const Login: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const password2 = passwordCheckRef.current?.value;
    const name = email;

    /* return error @TODO: design for Error, separate error to make it obvious why register failed */
    if (!isPasswordEqual(password!, password2!) || !isValidEmail(email!))
      return;

    /* register fetch */
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    };
    //const resp = await (await fetch(`${API_URL}/register`, options)).json();
    const resp = await fetch(`${API_URL}/register`, options);

    /* handle unsuccessful login */
    if (!resp.ok) {
      return;
    }

    /* redirect on successful login */
    const { push } = (await import("next/router")).default;
    push("/chats");
  };

  return (
    <div className="fixed">
      <form id="login">
        <h3>Create your SzunyoX account!</h3>
        <input id="username" type="email" placeholder="Email" ref={emailRef} />
        <input
          id="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <input
          id="passwordRepeat"
          type="password"
          placeholder="Repeat Password"
          ref={passwordCheckRef}
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
        <button
          className="mainBtn bMargin"
          type="button"
          onClick={handleSubmit}
        >
          Start Chatting
        </button>
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
