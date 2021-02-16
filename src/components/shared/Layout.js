import React from "react";
import SEO from "../shared/Seo";
import Navbar from "../shared/Navbar";

function Layout({ children, title, isPageNotFound = false }) {
  return (
    <>
      <div>
        <SEO title={title} />
        <Navbar isPageNotFound={isPageNotFound} />
      </div>
      <div>{children}</div>
    </>
  );
}

export default Layout;
