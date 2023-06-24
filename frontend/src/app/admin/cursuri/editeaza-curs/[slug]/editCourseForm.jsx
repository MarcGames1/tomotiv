'use client'
import React, { useState, useRef } from 'react';
import 'suneditor/dist/css/suneditor.min.css';
import ApiClient from '@/Classes/ApiClient';
import Resizer from 'react-image-file-resizer';
import {toast} from 'react-hot-toast'
import useCourseData from '@/app/admin/adminHooks/useCourseData';
import CourseDescriptionEditor from '../../componenteAdministrareCurs/CourseDescriptionEditor';
import { config } from '@/dateStatice';
const api = new ApiClient(process.env.NEXT_PUBLIC_API )
const imageDeleteRequest = new ApiClient(config.imageApi);


const EditCourseForm = ({slug}) => {
 const { courseData, saveCourseState, getCourseData, isLoading, error } =
   useCourseData(slug);
  const [isCourseUpdated, setisCourseUpdated] = useState(true);
   const [image, setImage] = useState(
     {...courseData?.image} || {}
     
   );


   const [preview, setPreview] = useState('');
   const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
   const [loading, setLoading] = useState(false)

   const updateImageToServer = async () =>{
   return await api.put(`/course/${slug}`, courseData);
   
   }

  

   const imageUploadInputRef = useRef()
  const handleChange = (e) => {
    const { name, value } = e.target; 
    saveCourseState({ ...courseData, [name]: value });
  };

  const handleTogglePaid = (e) => {
    saveCourseState({ ...courseData, paid: e.target.checked });
  };

  
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
         await updateImageToServer()
         await saveCourseState({
            ...courseData,
            image: { Bucket, Key }, // Actualizează cheia image cu obiectul format din Bucket și Key
          });
          setImage({ Bucket, Key });
          getCourseData(slug)
               
          console.log(courseData)
         setLoading(false);
     
       } catch (err) {
         console.log(err);
          setLoading(false);
         toast(err.message);
       }
     });
  }
  const handleRemoveImage = async (e) => {
    e.preventDefault()
 try {
   setImage({});
   saveCourseState({
     ...courseData,
     image: {},
   });
    await imageDeleteRequest.delete(`/${image.Key}`);
    await updateImageToServer()
     imageUploadInputRef.current.file = ''
 } catch (error) {
  console.error(error) 
 }
  }
 
 if(isLoading || error) {return <>...</>}

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
          {courseData?.image?.Key == undefined && (
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
            {courseData?.image?.Key ? (
              <>
                <img
                  className="m-5"
                  width={300}
                  height={300}
                  src={`${config.imageApi}/${courseData?.image?.Key}`}
                  alt={courseData?.image?.Key}
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
            saveCourseState({ ...courseData, description: content })
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
        
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            saveCourseState(courseData);
          }}
        >
          Salveaza Cursul
        </button>
      </form>
    </>
  );
};

export default EditCourseForm;