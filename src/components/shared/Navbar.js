import React from "react";
import { Navbar as Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";

function Navbar({ isPageNotFound }) {
  // let isLoggedIn = false;

  return (
    <>
      {isPageNotFound ? (
        <Nav sticky="top" className="navContainer">
          <div className="imageContainer">
            <img
              className="imgLogo"
              alt="logo"
              // Change the source later on
              src={logo}
              // "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/p960x960/65372488_427600628082040_8065135175211679744_o.png?_nc_cat=105&ccb=3&_nc_sid=85a577&_nc_ohc=1so30gFRVaEAX_nCOUc&_nc_ht=scontent-lax3-1.xx&_nc_tp=30&oh=92119c8e675faab38d254b989d6801bf&oe=604BB494"
            />
          </div>
          <div className="dividerContainer">
            <hr className="divider" />
          </div>
          <Nav.Brand className="brandName" href="/">
            Astroh
          </Nav.Brand>

          <Nav.Toggle />
          <Nav.Collapse className="justify-content-end">
            <Link to="/accounts/login">
              <div className="SignInText">Log In</div>
            </Link>
          </Nav.Collapse>
        </Nav>
      ) : (
        <Nav sticky="top" className="navContainer">
          <div className="imageContainer">
            <img
              className="imgLogo"
              alt="logo"
              // Change the source later on
              src={logo}
              // "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/p960x960/65372488_427600628082040_8065135175211679744_o.png?_nc_cat=105&ccb=3&_nc_sid=85a577&_nc_ohc=1so30gFRVaEAX_nCOUc&_nc_ht=scontent-lax3-1.xx&_nc_tp=30&oh=92119c8e675faab38d254b989d6801bf&oe=604BB494"
            />
          </div>
          <div className="dividerContainer">
            <hr className="divider" />
          </div>
          <Nav.Brand>
            <Link className="brandName" to="/">Astroh</Link>
          </Nav.Brand>
          <ul className="productLinks">
            <Link to="/shop-tops" className="listLink">
              <li>Tops</li>
            </Link>
            <Link to="/shop-hats" className="listLink">
              <li>Hats</li>
            </Link>
            <Link to="/shop-accessories" className="listLink">
              <li>Accessories</li>
            </Link>
          </ul>
          <Nav.Toggle />
          <Nav.Collapse className="justify-content-end">
            <Link to="/accounts/login">
              <div className="SignInText">Sign In</div>
            </Link>
          </Nav.Collapse>
        </Nav>
      )}
    </>
  );
}

export default Navbar;
