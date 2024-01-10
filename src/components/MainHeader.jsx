import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { GiHamburgerMenu } from "react-icons/gi"

export default function MainHeader() {
  return (
    <nav className={classes.navbar}>
    <button className={classes.sidebarBtn}><GiHamburgerMenu /></button>
      <div>
        <Link>Tasks</Link>
        <Link>Pricing</Link>
        <Link>Terms and Conditions</Link>
      </div>
    </nav>
  );
}
