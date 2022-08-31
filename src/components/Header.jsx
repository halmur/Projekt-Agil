import React from "react";
import logo2 from "../media/logo_w_space.svg";
import Navbar from "./Navbar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navarea}>
          <img src={logo2} className={styles.logo} alt="logo" />
          <Navbar />
          <Link to="/signup">
            <button className={styles.signButton}>Sign up</button>
          </Link>
          <Search />
          <HeaderIcons />
        </div>
      </header>
    </>
  );
};

export default Header;
