import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCharacters } from "../../../redux/characters/characters.actions";
import { searchCharacters } from "../../../redux/characters/characters.actions";
import styles from "./sidenavbar.module.scss";
import searchIcon from "../../../assets/images/searchIcon.png";

const SideNavbar = ({ mobileNavOpen, setMobileNavOpen }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    dispatch(searchCharacters(searchValue));
  };

  const handleFilter = (filterValue, type) => {
    dispatch(filterCharacters(filterValue, type));
  };

  return (
    <div
      className={styles.sidenavbar}
      style={{ left: mobileNavOpen && "0" }}
    >
      <div className={styles.sidenavbar_content}>
        <div className={styles.sidenavbar_inputWrapper}>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div onClick={handleSearch}>
            <img src={searchIcon} alt="search" />
          </div>
        </div>
        <div>
          <select onChange={(e) => handleFilter(e.target.value, "status")}>
            <option value="">Filter by Status</option>
            <option value="Unknown">Unknown</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
          </select>
        </div>
        <div>
          <select onChange={(e) => handleFilter(e.target.value, "gender")}>
            <option value="">Filter by Gender</option>
            <option value="Unknown">Unknown</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
