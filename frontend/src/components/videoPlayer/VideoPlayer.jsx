'use client'
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';



const VideoPlayer = ({ source }) => {

 

  return (
    <div className="m-10 p-5">
      <ReactPlayer
        width={1280}
        height={720}
        controls
        playsInline
        controlsList="nodownload"
        pip
        url={source}
      />
    </div>
  );
};

export default VideoPlayer;
