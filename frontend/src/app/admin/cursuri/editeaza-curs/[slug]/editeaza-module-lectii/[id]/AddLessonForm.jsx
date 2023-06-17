'use client'
import React, { useState, useContext } from 'react';

import ReactPlayer from 'react-player';





import ApiClient from '@/Classes/ApiClient';

import CourseDescriptionEditor from '@/app/admin/cursuri/componenteAdministrareCurs/CourseDescriptionEditor';

const api = new ApiClient(process.env.NEXT_PUBLIC_API);



const AddLessonForm = ({course,  module, slug }) => {



  const [lessonTitle, setLessonTitle] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [content, setContent] = useState('');
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
  const [isAddingLesson, setIsAddingLesson] = useState(false)

  const [visible, setVisible] = useState(false);

  
 

 const instructorId = course.instructor._id

      const handleVideo = async (e) => {
        // upload
        const file = e.target.files[0];
        
        setUploading(true);
        // send video as form data
        const videoData = new FormData();
        videoData.append('video', file);
        videoData.append('courseId', course._id);
        // save progress bar and send video as form data to backend
        const data = await api.post(
          `/course/video-upload/${course.instructor._id}`,
          videoData,
          {
            onUploadProgress: (e) =>
              setProgress(Math.round((100 * e.loaded) / e.total)),
          }
        );
        console.log("DATA UPLOADED ", data);
        // todo update courseData
        setVideoFile(file)
        setUploading(false);
      };


  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };


   const handleAddLesson = async (e) => {
     e.preventDefault();
     try {
       const formData = new FormData();
       formData.append('title', lessonTitle);
       formData.append('video', videoFile);

       const response = await api.post(
         `/course/${slug}/${module._id}/${instructorId}`,
         formData,
         {
           headers: {
             'Content-Type': 'multipart/form-data',
           },
         }
       );
       // Handle the response as needed
       console.log('Lesson added:', response);
       setLessonTitle('');
       setVideoFile(null);
       setContent('')
     } catch (error) {
       console.log(error);
     }
   };

  return (
    <>
      <button
        onClick={(e) => {
          setIsAddingLesson(true);
        }}
        className="btn my-5 btn-primary"
      >
        Add Lesson
      </button>
      {isAddingLesson && (
        <form onSubmit={handleAddLesson} className="m-10 ">
          <div className="form-control py-5">
            <input
              type="text"
              placeholder="Enter lesson title"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
              className="mr-2 p-2 border border-gray-400 rounded"
            />
          </div>
          <div className="form-control py-5 ">
            <input
              className="file-input w-full max-w-xs "
              type="file"
              accept="video/*"
              onChange={handleVideo}
            />
          </div>
          <CourseDescriptionEditor
            content={content}
            onChange={(content) => {
              setContent(content);
            }}
          />
          <button type="submit" className="btn my-5 btn-primary">
            Add Lesson
          </button>
        </form>
      )}
    </>
  );
};

export default AddLessonForm;
