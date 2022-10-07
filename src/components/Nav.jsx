import React from "react";
import { Link } from "react-router-dom";
import './Styles/navigation.styles.scss'

function Nav() {
  return (
    <nav className="navigation">
      <Link className="logo-container" to="/">
        <img src="/crwn.svg" alt="" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/sign-in">
          Sign in
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
