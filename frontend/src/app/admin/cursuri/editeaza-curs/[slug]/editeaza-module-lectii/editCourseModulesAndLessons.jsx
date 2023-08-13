'use client'
import React, {useEffect, useState} from 'react'
import { AiOutlineDelete, AiOutlineBook } from 'react-icons/ai';
import { saveCourseHandler } from '../../../helpersAdministrareCurs';
import Link from 'next/link';
import useCourseData from '@/app/admin/adminHooks/useCourseData';
import ApiClient from '@/Classes/ApiClient';
import ModuleInput from '../../../componenteAdministrareCurs/ModuleInput';

const api = new ApiClient(process.env.NEXT_PUBLIC_API)
const EditCourseModulesAndLessons = ({slug}) => {

     const { courseData, saveCourseState, getCourseData, isLoading, error } =
       useCourseData(slug);

       const [currentModules, setCurrentModules] = useState([])

       useEffect(()=>{
        if( isLoading || error) return
        setCurrentModules(courseData.modules)
       }, courseData?.modules)
  // Handlers
  const handleAddModule = async (moduleTitle ="") => {
    const moduleData = {
      title: moduleTitle, // denumirea modulului
      lessons: [], // array-ul de lecții
    };
   const newModule = await api.post(`/courses/${slug}/modules`, moduleData)
    const updatedModules = [...currentModules, moduleData]; // Actualizează lista de module cu noul modul adăugat
    const updatedCourseData = await getCourseData(slug)
    setCurrentModules(updatedCourseData.modules)
    
    console.log(courseData);
  };

  const handleRemoveModule = async (e, module) => {
    e.preventDefault();
  await api.delete(`/courses/${slug}/modules/${module._id}`)
 const updatedCourseData = await getCourseData(slug)
  setCurrentModules(updatedCourseData.modules);
  };


  const handleDrag =(e, index) =>{
    // console.log('ONDRAG ', index)
    e.dataTransfer.setData('itemIndex', index)
  }

  const handleDrop = (e, index) => {
// console.log('onDrop ', index);
  const movingItemIndex = e.dataTransfer.getData('itemIndex')
  const targetItemIndex = index

  let allModules = currentModules

  let movingItem = allModules[movingItemIndex]; // dragged item to be rearanged

  allModules.splice(movingItemIndex, 1)  // remove 1 item from the index
  allModules.splice(targetItemIndex,0, movingItem) //pushItem after target Item index
    saveCourseState({...courseData, modules: [...allModules]})

  };

if (isLoading || error) {
  return <>...</>;
}
  return (
    <div onDragOver={(e) => e.preventDefault()}>
      <pre>{JSON.stringify(courseData, '', 3)}</pre>
      <ModuleInput handleAddModule={handleAddModule} />
      {currentModules.map((module, index) => (
        <div
          draggable
          onDragStart={(e) => {handleDrag(e, index)}}
          onDrop={(e) => {handleDrop(e, index)}}
          key={index}
          className="flex items-center mb-4"
        >
          <div className="mr-2">
            <AiOutlineBook size={20} />
          </div>
          <div className="flex-grow">{module.title}</div>
          <div className="ml-2">
            <button
              className="btn btn-accent"
              onClick={(e) => handleRemoveModule(e, module)}
            >
              <AiOutlineDelete size={20} /> Sterge Modulul
            </button>
          </div>
          <div className="ml-2">
            <Link
              className="btn btn-info"
              href={`/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii/${module._id}`}
            >
              Editeaza Modulul
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditCourseModulesAndLessons