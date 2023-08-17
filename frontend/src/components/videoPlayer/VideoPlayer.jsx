'use client'
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';


import 'video.js/dist/video-js.css';

const VideoPlayer = ({ source }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

 

  return (
    <div>
      <ReactPlayer
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
