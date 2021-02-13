import React from "react";
import { Navbar as Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ isPageNotFound }) {
  let isLoggedIn = false;
  console.log(isPageNotFound);
  return (
    <>
      {isPageNotFound ? (
        <Nav className="navContainer">
          <div className="imageContainer">
            <img
              className="imgLogo"
              alt="logo"
              // Change the source later on
              src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/p960x960/65372488_427600628082040_8065135175211679744_o.png?_nc_cat=105&ccb=3&_nc_sid=85a577&_nc_ohc=1so30gFRVaEAX_nCOUc&_nc_ht=scontent-lax3-1.xx&_nc_tp=30&oh=92119c8e675faab38d254b989d6801bf&oe=604BB494"
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
            <Nav.Text className="SignInText">Sign In</Nav.Text>
          </Nav.Collapse>
        </Nav>
      ) : (
        <div>
          <div>Astroh</div>
          <div>Tops</div>
          <div>Bottoms</div>
          <div>Outerwear</div>
          <div>Accessories</div>
          {isLoggedIn ? <div>Log Out</div> : <div>Log In</div>}
        </div>
      )}
    </>
  );
}

export default Navbar;
