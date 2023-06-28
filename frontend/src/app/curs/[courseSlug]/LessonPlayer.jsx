'use client'
import Loading from '@/components/Loading/Loading';
import React from 'react'
import ReactPlayer from 'react-player';

const LessonPlayer = ({url}) => {


    if (!typeof url === 'string') {
        return <Loading />
    }
  return (
    <>
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        url={url}
        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
        onContextMenu={(e) => e.preventDefault()}
       
      />
 
    </>
  );
}

export default LessonPlayer