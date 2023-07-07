import React, { useEffect, useState, useContext } from 'react';
import { Context } from '@/context';
import Accordion from '@/components/Accordion';
import SingleLessonElement from './singleLessonElement';
import ApiClient from '@/Classes/ApiClient';
const SingleModule = ({ module, course, currentLesson, setCurrentLesson }) => {
  const {
    state: { user, progress }, dispatch
  } = useContext(Context);



  const api = new ApiClient([process.env.NEXT_PUBLIC_API])
  const handleCheckboxChange = async (e, lessonId) => {

  
    try {
      const lessonProgress = progress.progress.find(
        (item) => item.lesson === lessonId
      );
      const isLessonFinished = lessonProgress?.finished || false;

      if (isLessonFinished) {
        // Apel către ruta toggleLessonUnfinished pentru a marca lecția ca nefinalizată
        const response = await api.put(
          `/${course._id}/${user._id}/toggleLessonUnfinished`, {lessonId: lessonId}
        )
            localStorage.setItem('status', JSON.stringify(response));
            dispatch({
              type: 'GET_PROGRESS',
              payload: JSON.parse(window.localStorage.getItem('status')),
            });
            
        // Verificați răspunsul și efectuați acțiunile necesare în funcție de datele de ieșire
     
      } else {
        // Apel către ruta toggleLessonFinished pentru a marca lecția ca finalizată
        const response = await api
          .put(`/${course._id}/${user._id}/toggleLessonFinished`, {
            lessonId: lessonId,
          })
          localStorage.setItem('status', JSON.stringify(response))
         dispatch({
           type: 'GET_PROGRESS',
           payload: JSON.parse(window.localStorage.getItem('status')),
         });
        
     
      }
    } catch (error) {
      console.error('A apărut o eroare la efectuarea solicitării:', error);
      // Tratați eroarea sau afișați un mesaj corespunzător
    }
  };


  return (
    <Accordion title={<>{module.title}</>}>
      <ul className="menu join menu-lg bg-secondary text-secondary-content  w-full">
        {module.lessons.map((lesson, idx) => (
            
        <div key={lesson._id}>
            <SingleLessonElement
              currentLesson={currentLesson}
              lesson={lesson}
              setCurrentLesson={setCurrentLesson}
            />
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-primary">{`${idx + 1}/${
                  module.lessons.length
                }`}</span>
                <input
                  aria-label="Checkbox"
                  type="checkbox"
                  onChange= {e =>{ 
                    handleCheckboxChange(e, lesson._id);
                  }}
                  checked={
                    progress.progress.find((item) => item.lesson === lesson._id)
                      ?.finished
                      ? 'checked'
                      : ''
                  }
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          </div>
        ))}
      </ul>
    </Accordion>
  );
};


export default SingleModule