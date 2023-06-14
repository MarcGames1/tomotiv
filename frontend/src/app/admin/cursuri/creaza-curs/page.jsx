
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import  SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

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
  ['preview']
];

const CreazaCurs =  () =>  {

const initialState = {
  name: '', // titlu curs
  description: '', // descriere cu suneditor
  price: '3000', // numar
  uploading: false,
  paid: true,
  category: '', // sa ma gandesc daca fac crud pt categorii
  loading: false,
  modules: [], // modulele contin lectiile de curs + status finished sau in progress
};

  const [values, setValues] = useState({ ...initialState });
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState('');
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');

  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
     console.log(values);
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });
    // Restul codului pentru încărcarea și redimensionarea imaginii
  };

  const handleImageRemove = async () => {
    try {
      setValues({ ...values, loading: true });
      const res = await axios.post('/api/course/remove-image', { image });
      setImage({});
      setPreview('');
      setUploadButtonText('Upload Image');
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      setValues({ ...values, loading: false });
      toast('Image upload failed. Try later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/course', {
        ...values,
        image,
      });
      setValues({ ...initialState });
      toast('Great! Now you can start adding lessons');
      router.push('/instructor');
    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <>
      <div>
        <h1>Crează un curs nou</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control	">
            <label className="label" htmlFor="name">
              Nume curs:
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control	">
            <label className="label" htmlFor="description">
              Descriere curs:
            </label>

            <SunEditor
              setOptions={{
                height: 200,
                buttonList, // Or Array of button list, eg. [['font', 'align'], ['image']]
                // plugins: [font] set plugins, all plugins are set by default
                // Other option
              }}
              height="50%"
              lang={'ro'}
              setContents={values.description}
              onChange={(content) =>
                setValues({ ...values, description: content })
               
              }
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Platit</span>
              <input
                type="checkbox"
                checked="checked"
                onChange={handleChange}
                className="checkbox"
              />
            </label>
          </div>
          <div className="form-control	">
            <label htmlFor="price">Preț:</label>
            <input
              className="input"
              type="number"
              id="price"
              name="price"
              value={values.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="category">
              Categorie:
            </label>
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={values.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="image">
              Imagine:
            </label>
            <input
              className="input"
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImage}
              required
            />
            {preview && (
              <img  src={preview} alt="Preview" style={{ width: '200px' }} />
            )}
            {uploadButtonText === 'Upload Image' ? null : (
              <button onClick={handleImageRemove}>Remove Image</button>
            )}
          </div>
          <button className="btn btn-primary" type="submit">
            Crează cursul
          </button>
        </form>
      </div>
    </>
  );
};


export default CreazaCurs