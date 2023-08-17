'use client'
import Loading from '@/components/Loading/Loading';
import React, {useState, useEffect} from 'react'
import VideoPlayer from '@/components/videoPlayer/VideoPlayer';


const LessonPlayer = ({ url, handleEndVideo = () => {} }) => {
  const [played, setPlayed] = useState(0);
  

  // setVideoURL(`${process.env.NEXT_PUBLIC_API}/video/?key=${video.Key}`);
  useEffect(() => {
    console.log(played);
  }, [played]);

  
  if (!typeof url === 'string') {

    return <Loading />;
  }
  return (
    <>
      <VideoPlayer
        controls
        
        source={url}
        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
        onContextMenu={(e) => e.preventDefault()}
        onEnded={handleEndVideo}
        onProgress={(progress) => {
        setPlayed(progress.playedSeconds);
        }}
      />
    </>
  );
};

export default LessonPlayer