import React from "react";
import Navbar from "../components/shared/Navbar";
import "./css/home.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <img
          alt="brand"
          src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/65417464_427607134748056_3642446315016683520_n.jpg?_nc_cat=100&ccb=3&_nc_sid=dd9801&_nc_ohc=txWNsXtwre0AX8XK4Qo&_nc_ht=scontent-lax3-1.xx&oh=b57ac86dc66543dd9bdc2d187c2a3bcf&oe=604D098B"
        />
        <div className="giveAwayContainer">
          <h5>
            Thank you to everyone who entered our giveaway! 🙏🏼 Using a random
            name generator for everyone who met the requirements to enter our
            contest, we finally have a winner! 🥇🥇 Congratulations
            @proudmom19!! 🎉🎊 we have your prize ready for you!! Please DM us
            what choices you’d like! Thank you to everyone else who
            participated!
          </h5>
          <img
            className="giveawayImage"
            alt="giveaway winner"
            src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/p960x960/69174172_463734027802033_6995991680637730816_o.jpg?_nc_cat=104&ccb=3&_nc_sid=2d5d41&_nc_ohc=qhXjM0E0cFwAX9fpCID&_nc_ht=scontent-lax3-1.xx&tp=6&oh=c9296ae72e1dc30213bf727578f969ef&oe=604CB471"
          />
        </div>
        
      </div>
    </>
  );
}

export default HomePage;
