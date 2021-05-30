import React from "react";
import styles from "./main.module.scss";
import SideNavbar from "../components/layout/sidenavbar/SideNavbar";
import TopNavbar from "../components/layout/topnavbar/TopNavbar";
import Characters from "../pages/home/Characters";

const Main = () => {
  return (
    <div className={styles.main}>
      <TopNavbar />
      <SideNavbar />
      <Characters />
    </div>
  );
};

export default Main;
