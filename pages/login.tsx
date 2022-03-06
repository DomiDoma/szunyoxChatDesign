import type { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <div className="fixed">
      <form id="login" action="/setup">
        <h3>Log in to your SzunyoX account!</h3>
        <input id="username" type="email" placeholder="Email address" />
        <input id="password" type="password" placeholder="Password" />
        <p>or</p>
        <button className="appleBtn">
          <img src="../logo/apple.png" alt="" />
          <span>Sign in with Apple</span>
        </button>
        <button>
          <img src="../logo/google.png" alt="" />
          <span>Sign in with Google</span>
        </button>
        <button className="mainBtn">Start Chatting</button>
        <a className="margin" href="#">Forgot password</a>
        <a className="margin" href="#">Learn more about us</a>
      </form>
      <div className="bubble"></div>
    <div className="bubble mid"></div>
    <div className="bubble big"></div>
    </div>
  );
};

export default Login;
