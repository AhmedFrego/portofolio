import Footer from "./Footer";
import Header from "./Header";
import SmartBackground from "../UI/SmartBackground";

import StaticBackground from "../UI/StaticBackground";
import Overlay from "../UI/Overlay";
const Layout = (props: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      {/* <StaticBackground /> */}

      <Overlay/>
      <SmartBackground />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
