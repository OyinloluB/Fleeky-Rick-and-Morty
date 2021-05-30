import React from "react";
import styles from "./topnavbar.module.scss";

import logo from "../../../assets/images/logo.png";

const TopNavbar = () => {
  return (
    <div className={styles.topnavbar}>
      <img src={logo} alt="rick-and-morty-logo" />
    </div>
  );
};

export default TopNavbar;
