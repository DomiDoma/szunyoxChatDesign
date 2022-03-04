import type { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <div>
      <form id="login" action="setup.html">
        <h3>Log in to your SzunyoX account!</h3>
        <input id="username" type="email" placeholder="Email address" />
        <input id="password" type="password" placeholder="Password" />
        <p>or</p>
        <button className="apple-btn">
          <img src="../logo/apple.png" alt="" />
          <span>Sign in with Apple</span>
        </button>
        <button>
          <img src="../logo/google.png" alt="" />
          <span>Sign in with Google</span>
        </button>
        <button className="main-btn">Start Chatting</button>
        <a href="#">Forgot password</a>
        <a href="#">Learn more about us</a>
      </form>
    </div>
  );
};

export default Login;
