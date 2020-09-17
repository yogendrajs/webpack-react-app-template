import React from "react";
import Player from "react-player";
import video from "../../screen-capture.mp4";

const Test = () => (
  <Player
    style={{ marginLeft: "auto", marginRight: "auto" }}
    width="85%"
    height="90%"
    url={video}
    controls
  />
);

export default Test;
