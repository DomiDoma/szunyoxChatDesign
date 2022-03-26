import { useRouter } from "next/router";

interface Props {
  name?: string;
}

const Header = ({ name }: Props) => {
  const { push } = useRouter();
  return (
    <header>
      <button title="Back" className="header-btn" onClick={() => push("/")}>
        <img
          alt=""
          src="https://img.icons8.com/ios-filled/90/000000/back.png"
        />
      </button>
      {name}
      <button title="Back" className="header-btn">
        <img
          alt=""
          src="https://img.icons8.com/ios-filled/90/000000/more.png"
        />
      </button>
    </header>
  );
};

export default Header;
