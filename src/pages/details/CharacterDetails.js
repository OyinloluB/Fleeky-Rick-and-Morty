import React from "react";
import styles from "./characterdetails.module.scss";
import placeholder from "../../assets/images/travel.jpg";
import Tabs from "../../components/tabs/Tabs";

const CharacterDetails = () => {
  return (
    <div className={styles.characterdetails}>
      <div className={styles.characterdetails_details}>
        <div className={styles.characterdetails_details_image}>
          <img src={placeholder} alt="placeholder" />
        </div>
        <div>
          <p>
            <b>Id:</b>
          </p>
          <p>
            <b>Name:</b>
          </p>
          <p>
            <b>Status:</b>
          </p>
          <p>
            <b>Specie:</b>
          </p>
          <p>
            <b>Type:</b>
          </p>
          <p>
            <b>Gender:</b>
          </p>
          <p>
            <b>Origin:</b>
          </p>
          <p>
            <b>Created:</b>
          </p>
        </div>
      </div>
      <div className={styles.characterdetails_episodes}>
        <h3>Episodes Info</h3>
        <div className={styles.characterdetails_episodes_tabs}>
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
