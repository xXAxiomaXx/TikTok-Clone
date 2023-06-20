import React, { useRef, useState } from "react";
import Videofooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./videos.css";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPLay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPLay(false);
    } else {
      videoRef.current.play();
      setPLay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <Videofooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
