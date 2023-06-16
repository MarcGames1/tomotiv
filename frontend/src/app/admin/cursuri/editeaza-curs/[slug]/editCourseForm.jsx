'use client'
import React, { useState, useRef } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { AiOutlineDelete } from 'react-icons/ai';
import ApiClient from '@/Classes/ApiClient';
import Resizer from 'react-image-file-resizer';
import {toast} from 'react-hot-toast'
import Image from 'next/image';
const api = new ApiClient(process.env.NEXT_PUBLIC_API )
const buttonList = [
  ['undo', 'redo'],
  ['fontSize', 'formatBlock'],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['removeFormat'],
  ['fontColor', 'hiliteColor'],
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list', 'table'],
  ['link'],
  ['fullScreen', 'showBlocks', 'codeView'],
  ['preview'],
];

const EditCourseForm = (props) => {
  const [courseData, setCourseData] = useState(props);
   const [image, setImage] = useState(
     { Location: props?.image?.Location } || {
       Location: '/svg/placeholder 300x300.svg',
     }
   );
   const [preview, setPreview] = useState('');
   const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
   const [loading, setLoading] = useState(false)

   const imageUploadInputRef = useRef()
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setCourseData({ ...courseData, [name]: value });
  };

  const handleTogglePaid = (e) => {
    setCourseData({ ...courseData, paid: e.target.checked });
  };

  const handleAddModule = (e) => {
    e.preventDefault()
    const newModule = {
      title: '', // denumirea modulului
      lessons: [], // array-ul de lecții
    };

    setCourseData({
      ...courseData,
      modules: [...courseData.modules, newModule],
    });
    console.log(courseData)
  };

  const saveCourseHandler = (e) => {
    api.put(`/course/${props.slug}`, {...courseData})
  }
  const handleAddImage = (e) => {
    if(!e.target.files[0]) return;
     let file = e.target.files[0];
     console.log(e.target.files[0]);
     
    
     
     // resize
     Resizer.imageFileResizer(file, 720, 500, 'JPEG', 100, 0, async (uri) => {
       try {
         let  data  = await api.post('/course/upload-image', {
           image: uri,
         } );
         console.log('IMAGE UPLOADED', data);
         // set image in the state
         setImage({...data});
         setCourseData({...courseData, image: {...data}})
         console.log('IMAGE UPLOADED Course Data----> courseData,', courseData,  )       
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
     const res = await api.post('/course/remove-image', { image });
     setImage({ Location: '/svg/placeholder 300x300.svg' });
     setCourseData({ ...courseData, image: undefined });
     imageUploadInputRef.current.file = ''
 } catch (error) {
  console.error(error) 
 }
  }
 
 
  const handleRemoveModule = (e, index) => {
    e.preventDefault()
    const updatedModules = [...courseData.modules];
    updatedModules.splice(index, 1);
    setCourseData({ ...courseData, modules: updatedModules });
  };

  return (
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
      <div className="container flex items-center">
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

        <div className="m-10 form-control">
          <Image
            className="m-5"
            width={300}
            height={300}
            src={image.Location}
          />
          {image.Location !== '/svg/placeholder 300x300.svg' && (
            <button onClick={handleRemoveImage} className="btn btn-accent">
              Sterge Imaginea
            </button>
          )}
        </div>
      </div>
      <div className="form-control">
        <SunEditor
          setOptions={{
            height: 200,
            buttonList,
          }}
          height="50%"
          lang={'ro'}
          setContents={courseData.description}
          onChange={(content) =>
            setCourseData({ ...courseData, description: content })
          }
        />
      </div>
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
      <div className="form-control flex flex-row">
        <div className="container">
          {courseData.modules.map((module, index) => (
            <div key={index}>
              <input
                type="text"
                value={module.title}
                onChange={(e) => {
                  const updatedModules = [...courseData.modules];
                  updatedModules[index].title = e.target.value;
                  setCourseData({ ...courseData, modules: updatedModules });
                }}
                className="input input-bordered"
              />
              <button onClick={(e) => handleRemoveModule(e, index)}>
                <AiOutlineDelete />
              </button>
            </div>
          ))}
        </div>
        <button className="btn btn-secondary" onClick={handleAddModule}>
          Adaugă modul
        </button>
      </div>
      <button className="btn btn-primary" onClick={saveCourseHandler}>
        Salveaza Cursul
      </button>
    </form>
  );
};

export default EditCourseForm;
