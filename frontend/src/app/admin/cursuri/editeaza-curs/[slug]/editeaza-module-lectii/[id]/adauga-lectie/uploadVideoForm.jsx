'use client'
import React, { useState, useContext, useEffect, useRef } from 'react';
import { Context } from '@/context';
import { FaPlay } from 'react-icons/fa';
import ApiClient from '@/Classes/ApiClient';
import { config } from '@/dateStatice';
import { Logout } from '@/helpers/actions';
import VideoPlayer from '@/components/videoPlayer/VideoPlayer';


const api = new ApiClient(process.env.NEXT_PUBLIC_API)





// src={`${config.imageApi}/${courseData?.image?.Key}`}
const UploadVideoForm = ({lessonData, setLessonData, slug, moduleId}) => {



  const {
    state: { user },
  } = useContext(Context);



  const userId = user._id;
  const videoInputRef = useRef();
  const [progress, setProgress] = useState(0);

  const [video, setVideo] = useState(lessonData?.video || undefined);
  const [videoURL , setVideoURL] = useState('')

  useEffect( () =>{
    
    
    if(video?.Key){
      
      setVideoURL(`${process.env.NEXT_PUBLIC_API}/video/?key=${video.Key}`);
    }
    return
  },[video, video?.Key])


  const handleUpload = async (e) => {
   try {
     const file = e.target.files[0];
     const videoData = new FormData();
     videoData.append('video', file);
     videoData.append('moduleId',moduleId);
     videoData.append('slug', slug);
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

  const handleDeleteVideo = async () => {
    if(!video && !video.Key){ return}
     try {
      console.log('DELETE VIDEO KEY? ', video.Key)
       api.delete(`/video-delete/?key=${video.Key}`);
       setLessonData({ ...lessonData, video: undefined });
       setVideo(undefined);
       setVideoURL('')
     } catch (error) {
       console.error(error);
     }

  }
if (!user) {
  Logout();
  return <>Logged Out</>;
}

console.log('videoStream Data =?>',videoURL);
  return (
    <>
      <div className="h-[50vh]">
        {!videoURL ? (
          <>
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
            <input
              type="file"
              accept="video/*"
              ref={videoInputRef}
              className="file-input w-full max-w-xs"
              onChange={handleUpload}
            />
          </>
        ) : (
          <>
            <VideoPlayer source={videoURL} />
            <button onClick={handleDeleteVideo} className="btn btn-error">
              Sterge Video
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default UploadVideoForm;
