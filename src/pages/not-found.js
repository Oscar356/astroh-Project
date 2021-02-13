import React from "react";
import Navbar from "../components/shared/Navbar";
import { Link } from "react-router-dom";
import "./css/not-found.css";

function NotFoundPage() {
  return (
    <>
      <Navbar isPageNotFound={true} />
      <div className="notFoundContainer">
        <h3>Sorry, this page isn't available.</h3>
        <div className="textDivs">
          The link you followed may be broken, or the page may have been
          removed.
        </div>
        <Link to="/">
          {" "}
          <div className="textDivs">Go back to Astroh.</div>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
