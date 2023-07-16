'use client'
import React, { useState, useEffect, useContext } from 'react';
import LessonPlayer from './LessonPlayer';
import { Context } from '@/context';
import ApiClient from '@/Classes/ApiClient';

const api = new ApiClient(process.env.NEXT_PUBLIC_API)

const LessonVideoAndDescription = ({ currentLesson }) => {
  const [lessonData, setLessonData] = useState(null);
  const [videoURL, setVideoURL] = useState(
    ''
  );

  const {state, dispatch} = useContext(Context)
  const {user, status} = state


  const handleEndVideo = async () =>{
    console.log('status ===> ', status)
    const progress = JSON.parse(localStorage.getItem('status'));
 const response = await api.put(
   `/${progress.course}/${user._id}/toggleLessonFinished`,
   { lessonId: lessonData._id }
 );
     localStorage.setItem('status', JSON.stringify(response));
     dispatch({
       type: 'GET_PROGRESS',
       payload: response,
     });

    
  }
  useEffect(() => {
    if (
      currentLesson &&
      currentLesson.video &&
      currentLesson.video.Key &&
      currentLesson.content
    ) {
      setLessonData(currentLesson);
      setVideoURL(
        `${process.env.NEXT_PUBLIC_API}/video/?key=${currentLesson.video.Key}`
      );
    }
  }, [currentLesson]);

  if (!lessonData) {
    return null; // Sau un mesaj de încărcare sau eroare adecvat
  }

  return (
    <div className="m-auto">
      <h1 className="md:text-5xl lg:text-7xl font-bold text-center">
        {lessonData.title}
      </h1>
      <div className="min-h-[75vh] max-h-3/4">
        {videoURL ? (
          <LessonPlayer handleEndVideo={handleEndVideo} url={videoURL} />
        ) : (
          <></>
        )}
      </div>
      <div
        className="prose m-auto"
        dangerouslySetInnerHTML={{ __html: lessonData.content }}
      ></div>
    </div>
  );
};

export default LessonVideoAndDescription;
