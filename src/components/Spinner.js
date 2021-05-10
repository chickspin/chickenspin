import React from "react";
import ReactFreezeframe from "react-freezeframe";
import ReactFreezeFrame from "react-freezeframe";

const Spinner = ({ currentSong, audioRef }) => {
  const chickenSpin = "https://i.ibb.co/XZpT9Qh/ezgif-com-gif-maker.gif";
  const audioHandler = () => {
    audioRef.current.play();
  };
  const leaveHandler = () => {
    audioRef.current.pause();
  };
  return (
    <div className="spinner">
      <div onMouseOver={audioHandler} onMouseLeave={leaveHandler}>
        <ReactFreezeFrame src={chickenSpin} />
      </div>
      <h2>Currently Playing "{currentSong.name}"</h2>
    </div>
  );
};

export default Spinner;
//<button>placeholder</button>;
