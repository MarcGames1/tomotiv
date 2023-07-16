'use client'
import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ source }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

 

  return (
    <div>
      <video
        ref={videoRef}
        className="w-full"
        controls
        playsInline
        controlsList="nodownload"
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
