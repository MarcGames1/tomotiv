'use client'
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { config } from '@/dateStatice';
import LessonPlayer from './LessonPlayer';

const LessonVideoAndDescription = ({ currentLesson }) => {
  const [lessonData, setLessonData] = useState(null);
  const [videoURL, setVideoURL] = useState(
    'https://www.youtube.com/watch?v=3Qyr_0z4Ug4&list=RDAiUVYlhFlW8&index=1'
  );

  useEffect(() => {
    if (
      currentLesson &&
      currentLesson.video &&
      currentLesson.video.Key &&
      currentLesson.content
    ) {
      setLessonData(currentLesson);
      setVideoURL(`${config.videoApi}/${currentLesson.video.Key}`);
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
      <div className="h-[75vh] max-h-3/4">
        {videoURL ? <LessonPlayer url={videoURL} /> : <></>}
      </div>
      <div
        className="prose m-auto"
        dangerouslySetInnerHTML={{ __html: lessonData.content }}
      ></div>
    </div>
  );
};

export default LessonVideoAndDescription;
