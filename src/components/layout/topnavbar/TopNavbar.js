import React from "react";
import styles from "./topnavbar.module.scss";

import logo from "../../../assets/images/logo.png";
import close from "../../../assets/images/close.png";
import { useLocation } from "react-router";

const TopNavbar = ({ setMobileNavOpen, mobileNavOpen }) => {
  const location = useLocation();

  return (
    <div className={styles.topnavbar}>
      {location.pathname === "/" && (
        <>
          <div
            className={styles.hamburger}
            onClick={() => setMobileNavOpen(true)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      )}
      <div className={styles.topnavbar_wrapper}>
        <img src={logo} alt="rick-and-morty-logo" />
      </div>
      {location.pathname === "/" && (
        <>
          {mobileNavOpen && (
            <div
              className={styles.close}
              onClick={() => setMobileNavOpen(false)}
            >
              <img src={close} alt="close icon" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TopNavbar;
