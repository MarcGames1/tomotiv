'use client'
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';



const VideoPlayer = ({ source }) => {

 

  return (
    <div className='w-full'>
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
