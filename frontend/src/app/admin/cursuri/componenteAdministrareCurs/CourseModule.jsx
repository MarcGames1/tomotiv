'use client'
import React, {useState, useEffect} from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import ApiClient from '@/Classes/ApiClient';

const api = new ApiClient(process.env.NEXT_PUBLIC_API);

const postModule = async (slug, module) =>{
   const res = await api.post(`/courses/${slug}/modules`, module)
   return res
}

const removeModule = async () =>{
  
}
const CourseModule = ({ courseData }) => {

  const [loading, setLoading] = useState(true)
  const [newModuleName, setNewModuleName] = useState(' ')
  const {slug} = courseData

  useEffect(() =>{
    if(typeof(courseData.modules) === 'undefined') return
    setLoading(false)
  },
    [courseData])

  const handleAddModule = async (e) => {
    e.preventDefault();
    const newModule = {
      title: newModuleName, // denumirea modulului
      lessons: [], // array-ul de lecții
    };

    postModule(slug, newModule)
  };

  const handleRemoveModule = (e, index) => {
    e.preventDefault();
    const updatedModules = [...courseData.modules];
    updatedModules.splice(index, 1);
    setCourseData({ ...courseData, modules: updatedModules });
  };
if(loading){
  return <div>loading</div>
}
  return (
    <div className="form-control flex flex-row">
      <div className="container">
        {loading &&
          courseData.modules.map((module, index) => (
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
              {/* aici as mai vrea sa fac un buton care sa ma duca pe o pagina separata  unde:
             daca nu am module inca sa am un buton de adauga modul
             in cursul curent.
             
             Daca extista module sa se afiseze titlul modulului si ( 
               a) daca in modulele respective se regaseste un lesson_id, sa se listeze titlul lectiei impreuna cu un buton de stergere sau alt buton de editare lectie, 
               b) daca nu exista o lectie in acel modul, sa se afiseze un buton de adaugare lectie )
              */}
            </div>
          ))}
      </div>
      <div className="form-control flex flex-row gap-5">
        <input
          type="text"
          placeholder="Denumire Modul"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={e =>{setNewModuleName(e.target.value)}}
        />
        <button className="btn btn-secondary" onClick={handleAddModule}>
          Adaugă modul
        </button>
      </div>
    </div>
  );
};

export default CourseModule;
