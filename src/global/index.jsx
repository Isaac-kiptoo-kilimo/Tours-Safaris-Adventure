import React, { useEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

const Layout = ({ children, title, maxScreen = false }) => {
  useEffect(() => {
    document.title = title
      ? `${title} | African Grand Expeditions`
      : "African Grand Expeditions";
  }, [title]);

  return (
    <div
      className={`flex flex-col ${
        maxScreen ? "max-h-screen" : "min-h-screen"
      }`}
    >
      <Header />
      <main className="md:pt-14 mb-16 mx-5 md:mx-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
