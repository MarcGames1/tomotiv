'use client'
import React,  {useState} from 'react'
import CourseDescriptionEditor from '@/app/admin/cursuri/componenteAdministrareCurs/CourseDescriptionEditor'
const AddLessonTitleAndContent = ({lessonData, setLessonData, children}) => {
const [lessonTitle, setLessonTitle] =useState(lessonData?.title)
const [lessonContent, setLesonContent] =useState(lessonData?.content)

const handleTitleChange = e =>{
  setLessonTitle(e.target.value)
  setLessonData({...lessonData, title: e.target.value})
}

const handleContentChange = content =>{
setLesonContent(content)
setLessonData({...lessonData, content: content})
}
  return (
    <>
      <input
        onInput={handleTitleChange}
        type="text"
        placeholder="Titlu Lectie"
        className="input w-full max-w-xs"
      />
      {children}
      <CourseDescriptionEditor
        onChange={(content) =>{
          setLesonContent(content);
          setLessonData({ ...lessonData, content: content })
        }        }
        content={lessonContent}
      />
    </>
  );
}

export default AddLessonTitleAndContent