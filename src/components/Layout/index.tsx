import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./index.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
