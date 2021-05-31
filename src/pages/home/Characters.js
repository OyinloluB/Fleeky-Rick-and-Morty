import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/characters/characters.actions";

import styles from "./characters.module.scss";

const Characters = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className={styles.characters}>
      {characters.map((character) => (
        <div className={styles.character}>
          <div className={styles.character_image}>
            <img src={character.image} alt="placeholder" />
          </div>
          <div className={styles.character_info}>
            <p>
              <b>Character Name:</b> {character.name}
            </p>
            <p>
              <b>Species:</b> {character.species}
            </p>
            <p>
              <b>Status:</b> {character.status}
            </p>
          </div>
          <div className={styles.character_cta}>
            <button onClick={() => history.push(`/character/${character.id}`)}>
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
