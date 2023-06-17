'use client'
import React, {useState} from 'react'
import { AiOutlineDelete, AiOutlineBook } from 'react-icons/ai';
import CourseModule from '../../../componenteAdministrareCurs/CourseModule';
import { saveCourseHandler } from '../../../helpersAdministrareCurs';


const EditCourseModulesAndLessons = (props) => {

     const [courseData, setCourseData] = useState(props);
  // Handlers
  const handleAddModule = (e) => {
    e.preventDefault();
    const newModule = {
      title: '', // denumirea modulului
      lessons: [], // array-ul de lecții
    };

    setCourseData({
      ...courseData,
      modules: [...courseData.modules, newModule],
    });
    console.log(courseData);
  };

  const handleRemoveModule = (e, index) => {
    e.preventDefault();
    const updatedModules = [...courseData.modules];
    updatedModules.splice(index, 1);
    setCourseData({ ...courseData, modules: updatedModules });
  };



  return (
    <>
      <CourseModule courseData={courseData} setCourseData={setCourseData} />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          saveCourseHandler(e, props.slug, courseData);
        }}
      >
        Salveaza Cursul
      </button>
    </>
  );
}

export default EditCourseModulesAndLessons