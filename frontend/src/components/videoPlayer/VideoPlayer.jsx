'use client'
import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

import videojs from 'video.js';
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
