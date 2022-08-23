import React from "react";
import NavImage from "../images/troll-face.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="nav-brand--image" src={NavImage} alt="TrollFace" />
      <h2 className="nav-brand--title">MemeGenerator</h2>
      <h4 className="nav--subtitle">
        by Miran Abdivasiev (tutorial: Scrimba, Bob Ziroll)
      </h4>
    </nav>
  );
}
