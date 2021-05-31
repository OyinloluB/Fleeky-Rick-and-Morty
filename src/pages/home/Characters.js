import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Pagination from "@material-ui/lab/Pagination";
import { fetchCharacters } from "../../redux/characters/characters.actions";

import styles from "./characters.module.scss";
import { CircularProgress } from "@material-ui/core";

const Characters = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { characters, loading } = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  // const handleChange = (e, value) => {
  //   value++;
  //   dispatch(fetchCharacters({ page: value }));
  // };

  return (
    <div className={styles.characters}>
      {loading ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.characters_wrapper}>
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
                <button
                  onClick={() => history.push(`/character/${character.id}`)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* {characters?.length && (
        <div className={styles.pagination}>
          <Pagination
            count={pagination?.count || 0}
            page={pagination?.pages || 0}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      )} */}
    </div>
  );
};

export default Characters;
