import Nav from "@components/Nav";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Nav />
    </>
  );
};

export default Layout;
