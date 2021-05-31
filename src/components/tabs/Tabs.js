import React, { useState } from "react";
import "./tabs.scss";

const Tabs = ({ episodes }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="tabsWrapper">
        {episodes.splice(0, 5).map((episode) => {
          const value = episode.split("/");
          console.log(value[value.length - 1]);

          return (
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              {episode}
            </button>
          );
        })}
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>Text</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h3>Categories</h3>
          <h3>Business Models</h3>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
