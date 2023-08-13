
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
  paid: true,
 

};

  const [values, setValues] = useState({ ...initialState });
  const [content, setContent] =useState('')
  



  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
     console.log(values);
  };

  const handle ={
    name:(e) =>{ setValues({ ...values, name: e.target.value})},
    price:(e) =>{setValues({ ...values, price: e.target.value });},
    paid:(e) =>{setValues({ ...values, paid: e.target.checked });},
  }
   


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/course', {
        ...values,
        description: content,
      });
      setValues({ ...initialState });
      toast('Cursul A Fost Creat!');
      router.push('/admin/cursuri');
    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <>
      <div className="p-10">
        <h1>Crează un curs nou</h1>
        <pre> {JSON.stringify({ ...values, content }, '', 3)}</pre>
        <div>
          <div className="form-control	">
            <label className="label" htmlFor="name">
              Nume curs:
            </label>
            <input
              className="input"
              type="text"
              id="name"
              onInput={handle.name}
              value={values.name}
              name="name"
              required
            />
          </div>
          <div className="form-control	">
            <label className="label" htmlFor="description">
              Descriere curs:
            </label>

            <SunEditor
              setOptions={{
                height: '50vh',
                buttonList, // Or Array of button list, eg. [['font', 'align'], ['image']]
                // plugins: [font] set plugins, all plugins are set by default
                // Other option
              }}
              height="50vh"
              lang={'ro'}
              setContents={values.description}
              onChange={(content) => {
                setContent(content);
                
              }}
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Platit</span>
              <input
                type="checkbox"
                checked={values.paid}
                onChange={handle.paid}
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
              onInput={handle.price}
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-primary mt-5"
            
          >
            Crează cursul
          </button>
        </div>
      </div>
    </>
  );
};


export default CreazaCurs