import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacterId } from "../../redux/characters/characters.actions";

import styles from "./characterdetails.module.scss";
import backarrow from "../../assets/images/backarrow.png";
import Tabs from "../../components/tabs/Tabs";

const CharacterDetails = (props) => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.character);
  const characterId = props.match.params.id;

  useEffect(() => {
    dispatch(fetchCharacterId(characterId));
  }, [dispatch, characterId]);

  return (
    <div className={styles.characterdetails}>
      <div className={styles.characterdetails_back}>
        <img src={backarrow} alt="back" />
        <Link to="/">Back</Link>
      </div>
      {characters.map((character) => (
        <>
          <div className={styles.characterdetails_details}>
            <div className={styles.characterdetails_details_image}>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <p>
                <b>Id:</b> {character.id}
              </p>
              <p>
                <b>Name:</b> {character.name}
              </p>
              <p>
                <b>Status:</b> {character.status}
              </p>
              <p>
                <b>Species:</b> {character.species}
              </p>
              <p>
                <b>Type:</b> {!character.type === "" ? character.type : "-"}
              </p>
              <p>
                <b>Gender:</b> {character.gender}
              </p>
              <p>
                <b>Origin:</b> {character.origin.name}
              </p>
              <p>
                <b>Created:</b> {new Date(character.created).toDateString()}
              </p>
            </div>
          </div>
          <div className={styles.characterdetails_episodes}>
            <h3>Episodes Info</h3>
            <div className={styles.characterdetails_episodes_tabs}>
              <Tabs episodes={character.episode} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CharacterDetails;
