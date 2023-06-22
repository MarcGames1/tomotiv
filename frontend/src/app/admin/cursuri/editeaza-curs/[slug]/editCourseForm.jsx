'use client'
import React, { useState, useRef, useEffect, useContext } from 'react';
import 'suneditor/dist/css/suneditor.min.css';
import ApiClient from '@/Classes/ApiClient';
import Resizer from 'react-image-file-resizer';
import {toast} from 'react-hot-toast'
import Image from 'next/image';
import CourseModule from '../../componenteAdministrareCurs/CourseModule';
import CourseDescriptionEditor from '../../componenteAdministrareCurs/CourseDescriptionEditor';
import { saveCourseHandler } from '../../helpersAdministrareCurs';
import { config } from '@/dateStatice';
const api = new ApiClient(process.env.NEXT_PUBLIC_API )
const imageDeleteRequest = new ApiClient(config.imageApi);

import { CourseDataContext } from '@/app/admin/context/CourseDataContext';

const EditCourseData = (props) => {
   const {
     courseData,
     setCourseData,
     slug,
     setSlug,
     isLoading,
     error,
     handleSaveCourse,
     updateCourseData,
   } = useContext(CourseDataContext);
   const [image, setImage] = useState(
     {  ...courseData?.image} || {}
     
   );


   const [preview, setPreview] = useState('');
   const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
   const [loading, setLoading] = useState(false)

   

  useEffect(() => {
    setSlug(props.slug);
    updateCourseData(slug)
  }, [props.slug]);

    

   const imageUploadInputRef = useRef()
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setCourseData({ ...courseData, [name]: value });
  };

  const handleTogglePaid = (e) => {
    setCourseData({ ...courseData, paid: e.target.checked });
  };


  // const saveCourseHandler = async (e) => {
  //   e.preventDefault()
  //   await api.put(`/course/${props.slug}`, courseData)
  // }

  
  const handleAddImage = async (e) => {
    e.preventDefault()
    if(!e.target.files[0]) return;
     let file = e.target.files[0];
     console.log(e.target.files[0]);
     // resize
     Resizer.imageFileResizer(file, 720, 500, 'JPEG', 100, 0, async (uri) => {
       try {
         let data = await api.post('/course/upload-image', {
           image: uri,
         });

        
         const { Bucket, Key } = data;
          setImage({ Bucket, Key });
          
          setCourseData({
            ...courseData,
            image: { Bucket, Key }, // Actualizează cheia image cu obiectul format din Bucket și Key
          });
               
          console.log(courseData)
          await handleSaveCourse()
         setLoading(false);
     
       } catch (err) {
         console.log(err);
          setLoading(false);
         toast('Image upload failed. Try later.');
       }
     });
  }
  const handleRemoveImage = async (e) => {
    e.preventDefault()
 try {
   setImage({});
   setCourseData({
     ...courseData, image: {},
    });
    await imageDeleteRequest.delete(`/${image.Key}`);
    await updateImageToServer()
     imageUploadInputRef.current.file = ''
 } catch (error) {
  console.error(error) 
 }
  }
 
 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
    
      <pre>{JSON.stringify(courseData, '', 3)} </pre>
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Titlu Curs</span>
          </label>
          <label className="input-group">
            <span>Titlu Curs</span>
            <input
              type="text"
              name="name"
              value={courseData.name}
              onChange={handleChange}
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="container flex items-center min-h-[300px]">
          {image?.Key == undefined && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Adauga Imagine reprezentativa pentru curs
                </span>
              </label>
              <label className="input-group">
                <span>Imagine</span>
                <input
                  type="file"
                  name="file"
                  ref={imageUploadInputRef}
                  onChange={handleAddImage}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          )}

          <div className="m-10 form-control">
            {image?.Key ? (
              <>
                <img
                  className="m-5"
                  width={300}
                  height={300}
                  src={`${config.imageApi}/${image.Key}`}
                  alt={image.Key}
                />
                <button onClick={handleRemoveImage} className="btn btn-accent">
                  Sterge Imaginea
                </button>
              </>
            ) : (
              <div
                onClick={() => imageUploadInputRef.current.click()}
                className="m-5"
                style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: '#DEDEDE',
                  border: '2px solid #555555',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  fontSize: '18px',
                  fontFamily: 'monospace, sans-serif',
                  color: '#555555',
                  cursor: 'pointer',
                }}
              >
                Adaugă o imagine
              </div>
            )}
          </div>
        </div>
        <CourseDescriptionEditor
          onChange={(content) =>
            setCourseData({ ...courseData, description: content })
          }
          content={courseData.description}
        />

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Curs Platit? </span>
            <input
              type="checkbox"
              name="paid"
              checked={courseData.paid}
              onChange={handleTogglePaid}
              className="checkbox"
            />
          </label>
        </div>
        {courseData.paid && (
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pretul Cursului</span>
            </label>
            <label className="input-group">
              <span>Pretul Cursului</span>
              <input
                type="number"
                name="price"
                value={courseData.price}
                onChange={handleChange}
                className="input input-bordered"
              />
            </label>
          </div>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Categorie</span>
          </label>
          <label className="input-group">
            <span>Categorie</span>
            <input
              type="text"
              name="category"
              value={courseData.category}
              onChange={handleChange}
              className="input input-bordered"
            />
          </label>
        </div>
        <CourseModule courseData={courseData} setCourseData={setCourseData} />
        <button
          className="btn btn-primary"
          onClick={(e) => {
            saveCourseHandler(e, slug, courseData);
          }}
        >
          Salveaza Cursul
        </button>
      </form>
    </>
  );
};

export default EditCourseData