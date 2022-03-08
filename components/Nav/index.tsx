import Link from "next/link";

const Nav = () => {
  return (
    <menu>
      <Link href="/">
        <a id="active">
          <img
            alt=""
            src="https://img.icons8.com/material-rounded/90/000000/home.png"
          />
          Home
        </a>
      </Link>
      <Link href="/chats">
        <a>
          <img
            alt=""
            src="https://img.icons8.com/material/90/000000/chat--v1.png"
          />
          Chats
        </a>
      </Link>
      <Link href="/tops">
        <a>
          <img
            alt=""
            src="https://img.icons8.com/material-rounded/90/000000/star--v1.png"
          />
          Top picks
        </a>
      </Link>
      <Link href="/account">
        <a>
          <img
            alt=""
            src="https://img.icons8.com/material-rounded/90/000000/guest-male.png"
          />
          Account
        </a>
      </Link>
    </menu>
  );
};

export default Nav;
