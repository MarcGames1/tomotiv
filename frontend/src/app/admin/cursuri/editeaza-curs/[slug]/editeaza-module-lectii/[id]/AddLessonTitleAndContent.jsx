'use client'
import React,  {useState} from 'react'
import CourseDescriptionEditor from '@/app/admin/cursuri/componenteAdministrareCurs/CourseDescriptionEditor'
const AddLessonTitleAndContent = ({lessonData, setLessonData, children}) => {
const [currentLessonData, setCurrentLessonData] = useState(lessonData)

const handleTitleChange = e =>{
 
  setCurrentLessonData({ ...currentLessonData, title: e.target.value });
  setLessonData(currentLessonData)
}


  return (
    <>
      <input
        onChange={handleTitleChange}
        type="text"
        placeholder="Titlu Lectie"
        className="input w-full max-w-xs"
      />
      {children}
      <CourseDescriptionEditor
        onChange={(content) => {
          setCurrentLessonData({ ...currentLessonData, content: content });
          setCurrentLessonData({ ...currentLessonData, content: content });
        }}
        content={currentLessonData?.content}
      />
    </>
  );
}

export default AddLessonTitleAndContent