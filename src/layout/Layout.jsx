import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
        <Menu />
        <div className="menu_spacer"></div>
        <main>{children}</main>
        <Footer />
    </>
  );
};

export default Layout;
