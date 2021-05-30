import React from "react";
import { Route, useLocation } from "react-router-dom";

import styles from "./main.module.scss";
import backtotop from "../assets/images/backtotop.png";

import SideNavbar from "../components/layout/sidenavbar/SideNavbar";
import TopNavbar from "../components/layout/topnavbar/TopNavbar";
import Characters from "../pages/home/Characters";
import CharacterDetails from "../pages/details/CharacterDetails";

const Main = () => {
  const location = useLocation();

  return (
    <div className={styles.main}>
      <TopNavbar />
      {location.pathname === "/" && <SideNavbar />}
      <Route exact path="/" component={Characters} />
      <Route exact path="/character" component={CharacterDetails} />

      <div className={styles.backtotop}>
        <img src={backtotop} alt="Back to top" />
      </div>
    </div>
  );
};

export default Main;
