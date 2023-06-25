'use client'
import React, { useState, useContext, useRef } from 'react';
import { Context } from '@/context';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import ApiClient from '@/Classes/ApiClient';
import { config } from '@/dateStatice';

const api = new ApiClient(process.env.NEXT_PUBLIC_API)
// src={`${config.imageApi}/${courseData?.image?.Key}`}
const UploadVideoForm = ({lessonData, setLessonData}) => {
  const {
    state: { user },
  } = useContext(Context);

  const userId = user._id;
  const videoInputRef = useRef();
  const [progress, setProgress] = useState(0);

  const [video, setVideo] = useState(undefined);
  const handleUpload = async (e) => {
   try {
     const file = e.target.files[0];
     const videoData = new FormData();
     videoData.append('video', file);
     let video = await api.post(`/course/video-upload/${userId}`, videoData, {
       onUploadProgress: (e) => {
         setProgress(Math.round((100 * e.loaded) / e.total));
       },
     });

     // once response is received

     setLessonData({...lessonData, video: video})
     setVideo({...video});
     console.log(video);

   } catch (error) {
    console.error(error)
   }

  };

  return (
    <>
      <div className="artboard artboard-horizontal phone-3">
        {!video ? (
          <div
            onClick={() => videoInputRef.current.click()}
            className="w-full h-full border-primary cursor-pointer flex items-center justify-center bg-primary"
          >
            {progress === 0 ? (
              <FaPlay className="play-icon" />
            ) : (
              <progress
                className="progress w-56"
                value={progress}
                max="10"
              ></progress>
            )}
          </div>
        ) : (<>
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={`${config.videoApi}/${video.Key}`}
            />

            </>
        )}
      </div>
      <input
        type="file"
        ref={videoInputRef}
        className="file-input w-full max-w-xs"
        onChange={handleUpload}
      />
    </>
  );
};

export default UploadVideoForm;
