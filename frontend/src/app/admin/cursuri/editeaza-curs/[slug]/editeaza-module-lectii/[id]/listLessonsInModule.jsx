'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import ApiClient from '@/Classes/ApiClient';
import Link from 'next/link';
const api = new ApiClient(process.env.NEXT_PUBLIC_API);

const ListLessonsInModule = ({ slug, id }) => {
const [moduleData, setModuleData] = useState(null);
const [isLoading, setIsLoading] = useState(true)

const fetchModuleData = async () => {
    setIsLoading(true);
    try {
        const response = await api.get(`/courses/${slug}/modules/${id}`);
        setModuleData(response);
        setIsLoading(false)
        console.log(response)
    } catch (error) {
        console.error(error);
    }
};
useEffect(() => {

      if (slug && id) {
        fetchModuleData();

      }
    }, []);

  const updateModule = async (data) => {
   const res = await api.put(`/courses/${slug}/modules/${id}`, data);
  //  fetchModuleData()
  //  return res
  }

 const handleDeleteLesson = async (lessonId) => {
   // Implementați funcționalitatea pentru ștergerea unei lecții
   console.log(`Delete lesson ${lessonId}`);
   const res = await api.delete(`/${slug}/${id}/lessons/${lessonId}`)
   fetchModuleData()
   console.log(res);
 };

 const handleDrag = (e, index) => {
   // console.log('ONDRAG ', index)
   e.dataTransfer.setData('itemIndex', index);
 };

 const handleDrop = (e, index) => {
   // console.log('onDrop ', index);
   const movingItemIndex = e.dataTransfer.getData('itemIndex');
   const targetItemIndex = index;

   let allLessons = moduleData.lessons;

   let movingItem = allLessons[movingItemIndex]; // dragged item to be rearanged

   allLessons.splice(movingItemIndex, 1); // remove 1 item from the index
   allLessons.splice(targetItemIndex, 0, movingItem); //pushItem after target Item index
   setModuleData({...moduleData, lessons: [...allLessons]});
   updateModule({ ...moduleData, lessons: [...allLessons] });
  //  saveCourseState({ ...courseData, modules: [...allModules] });
 };

   if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {moduleData && (
        <div>
          <pre>{JSON.stringify(moduleData, '', 3)}</pre>
          <h1>{moduleData.title}</h1>

          <ul onDragOver={(e) => e.preventDefault()}>
            {moduleData.lessons.map((lesson, index) => (
              <li
                draggable
                onDragStart={(e) => {
                  handleDrag(e, index);
                }}
                onDrop={(e) => {
                  handleDrop(e, index);
                }}
                key={lesson._id}
                className='alert px-5 my-5'
              >
                {lesson.title} 
                <Link
                  href={`/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii/${id}/editeaza-lectie/${lesson._id}`}
                  className="btn btn-info"
                  icon={<AiOutlineEdit />}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-error"
                  icon={<AiOutlineDelete />}
                  onClick={() => handleDeleteLesson(lesson._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListLessonsInModule;
