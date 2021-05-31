import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisode } from "../../redux/characters/characters.actions";

import "./tabs.scss";

const Tabs = ({ episodes }) => {
  const dispatch = useDispatch();
  const { episode } = useSelector((state) => state.character);

  const [toggleState, setToggleState] = useState(episode.name);
  const [episodeUrl, setEpisodeUrl] = useState(episodes[0]);

  useEffect(() => {
    dispatch(fetchEpisode(episodeUrl));
  }, [dispatch, episodeUrl]);

  const toggleId = (name) => {
    setToggleState(name);
  };

  return (
    <div>
      <div className="tabsWrapper">
        {episodes.slice(0, 5).map((episodeLink) => {
          return (
            <button
              className={
                episode.name === toggleState ? "tabs active-tabs" : "tabs"
              }
              onClick={() => {
                setEpisodeUrl(() => episodeLink);
                fetchEpisode(episodeUrl);
              }}
            >
              Episode{" "}
              {episodeLink.split("/")[episodeLink.split("/").length - 1]}
            </button>
          );
        })}
      </div>

      <div className="content-tabs">
        <div>
          <p>
            <b>Episode Name:</b> {episode.name}
          </p>
          <p>
            <b>Episode ID:</b> {episode.id}
          </p>
          <p>
            <b>Episode Air Date:</b> {episode.air_date}
          </p>
          <p>
            <b>Episode:</b> {episode.episode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
