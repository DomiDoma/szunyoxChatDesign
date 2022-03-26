import Nav from "@components/Nav";
import Header from "@components/Header";
interface Props {
  children: React.ReactNode;
  header?: boolean;
  name?: string;
}

const Layout = ({ children, header, name }: Props) => {
  return (
    <>
      {header && <Header name={name} />}
      {children}
      <Nav />
    </>
  );
};

export default Layout;
