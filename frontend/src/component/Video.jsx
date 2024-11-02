import React, { useState } from "react";

const Video = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  // const host = "http://localhost:9000";
  const host = "https://task29-topaz.vercel.app";


  const handleVideo1 = () => {
    setShow1(!show1);
    setShow2(false);
  };

  const handleVideo2 = () => {
    setShow2(!show2);
    setShow1(false);
  };

  return (
    <div className="main">
      <h1>Watch Video</h1>

      <div className="btns">
        <button onClick={handleVideo1}>Watch Video1</button>
        <button onClick={handleVideo2}>Watch Video2</button>
      </div>

      <div className>
        {show1 && (
          <video width="500" controls autoPlay>
            <source src={`${host}/video1`} type="video/mp4" />
          </video>
        )}
      </div>

      <div>
        {show2 && (
          <video width="500" controls autoPlay>
            <source src={`${host}/video2`} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

export default Video;
