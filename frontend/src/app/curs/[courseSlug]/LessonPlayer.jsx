'use client'
import Loading from '@/components/Loading/Loading';
import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player';
import ApiClient from '@/Classes/ApiClient';


const LessonPlayer = ({url}) => {
  const [played, setPlayed] = useState(0);

  useEffect(() =>{
console.log(played)
  },[played])
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
        onProgress={(progress) => {
          setPlayed(progress.playedSeconds);
        }}
      />
    </>
  );
}

export default LessonPlayer