'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import ApiClient from '@/Classes/ApiClient';
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
 const handleEditLesson = (lessonId) => {
   // Implementați funcționalitatea pentru editarea unei lecții
   console.log(`Edit lesson ${lessonId}`);
 };

 const handleDeleteLesson = async (lessonId) => {
   // Implementați funcționalitatea pentru ștergerea unei lecții
   console.log(`Delete lesson ${lessonId}`);
   const res = await api.delete(`/${slug}/${id}/lessons/${lessonId}`)
   fetchModuleData()
   console.log(res);
 };

   if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {moduleData && (
        <div>
            <pre>{JSON.stringify(moduleData, '', 3)}</pre>
          <h1>{moduleData.title}</h1>
          
          <ul>
            {moduleData.lessons.map((lesson) => (
              <li key={lesson._id}>
                {lesson.title} LESSON ID {lesson._id}
                <button
                  className="btn btn-info"
                  icon={<AiOutlineEdit />}
                  onClick={() => handleEditLesson(lesson._id)}
                >
                  Edit
                </button>
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
