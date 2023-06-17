'use client'
import React, {useState} from 'react'
import { AiOutlineDelete, AiOutlineBook } from 'react-icons/ai';
import CourseModule from '../../../componenteAdministrareCurs/CourseModule';
import { saveCourseHandler } from '../../../helpersAdministrareCurs';
import Link from 'next/link';


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
      {courseData.modules.map((module, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="mr-2">
            <AiOutlineBook size={20} />
          </div>
          <div className="flex-grow">{module.title}</div>
          <div className="ml-2">
            <button
              className="btn btn-accent"
              onClick={(e) => handleRemoveModule(e, index)}
            >
              <AiOutlineDelete size={20} /> Sterge Modulul
            </button>
          </div>
          <div className="ml-2">
            <Link
              className="btn btn-info"
            href={`/admin/cursuri/editeaza-curs/${props.slug}/editeaza-module-lectii/${module._id}`}
            >
              Editeaza Modulul
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default EditCourseModulesAndLessons