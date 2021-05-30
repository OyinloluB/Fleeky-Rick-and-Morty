import React from "react";
import styles from "./sidenavbar.module.scss";

const SideNavbar = () => {
  return (
    <div className={styles.sidenavbar}>
      <div className={styles.sidenavbar_content}>
        <input type="text" placeholder="Search" />
        <select>
          <option value="">Filter by Status</option>
          <option value="Unknown">Unknown</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
        </select>
        <select>
          <option value="">Filter by Gender</option>
          <option value="Unknown">Unknown</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </div>
  );
};

export default SideNavbar;
