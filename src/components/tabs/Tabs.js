import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchEpisode } from "../../redux/characters/characters.actions";

import "./tabs.scss";

const Tabs = ({ episodes }) => {
  const dispatch = useDispatch();
  const { episode, loading } = useSelector((state) => state.character);

  const [episodeUrl, setEpisodeUrl] = useState(episodes[0]);

  useEffect(() => {
    dispatch(fetchEpisode(episodeUrl));
  }, [dispatch, episodeUrl]);

  return (
    <div>
      <div className="tabsWrapper">
        {episodes.slice(0, 5).map((episodeLink) => {
          return (
            <div
              className="tabs"
              onClick={() => {
                setEpisodeUrl(() => episodeLink);
                fetchEpisode(episodeUrl);
              }}
            >
              Episode{" "}
              {episodeLink.split("/")[episodeLink.split("/").length - 1]}
            </div>
          );
        })}
      </div>

      <div className="content-tabs">
        {loading ? (
          <div className="loader">
            <CircularProgress />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Tabs;
