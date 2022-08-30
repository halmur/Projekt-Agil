import React from "react";
import logo from "../media/logo.svg";
import logo2 from "../media/logo_w_space.svg";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navarea}>
          <img src={logo2} className={styles.logo} alt="logo" />
          <Navbar />
        <Link to="/signup">
          <button className={styles.signButton}>
          Sign up
          </button>
        </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
