import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <menu>
      <Link href="/">
        <a id={pathname === "/" ? "active" : ""}>
          <Image
            alt=""
            width={90}
            height={90}
            src="https://img.icons8.com/material-rounded/90/000000/home.png"
          />
          Home
        </a>
      </Link>
      <Link href="/chats">
        <a id={pathname === "/chats" ? "active" : ""}>
          <Image
            alt=""
            width={90}
            height={90}
            src="https://img.icons8.com/material/90/000000/chat--v1.png"
          />
          Chats
        </a>
      </Link>
      <Link href="/tops">
        <a id={pathname === "/tops" ? "active" : ""}>
          <Image
            alt=""
            width={90}
            height={90}
            src="https://img.icons8.com/material-rounded/90/000000/star--v1.png"
          />
          Top picks
        </a>
      </Link>
      <Link href="/account">
        <a id={pathname === "/account" ? "active" : ""}>
          <Image
            alt=""
            width={90}
            height={90}
            src="https://img.icons8.com/material-rounded/90/000000/guest-male.png"
          />
          Account
        </a>
      </Link>

      
      {/* dev: */}
      <Link href="/profileViewer">
        <a id={pathname === "/profileViewer" ? "active" : ""}>
          <Image
            alt=""
            width={90}
            height={90}
            src="https://img.icons8.com/material-rounded/90/000000/help.png"
          />
          dev
        </a>
      </Link>
    </menu>
  );
};

export default Nav;
