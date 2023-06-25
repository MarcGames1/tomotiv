'use client'

import React, {useState} from 'react'
import UploadVideoForm from './uploadVideoForm'
import EditCourseForm from '../../../editCourseForm'
import AddLessonTitleAndContent from '../AddLessonTitleAndContent'
import ApiClient from '@/Classes/ApiClient'

const api = new ApiClient(process.env.NEXT_PUBLIC_API)

const AdaugaLectieContent = ({slug, moduleId}) => {
const [lessonData, setLessonData] = useState(undefined)
     

const handleLessonSave = async (e) =>{
e.preventDefault()
try {
   const response = await api.post(`/${slug}/modules/${moduleId}/lessons`, lessonData)
} catch (error) {
    console.error(error)
}
}
  return (
    <main className='m-10'>
      <pre>{JSON.stringify(lessonData, '', 3)}</pre>

      <AddLessonTitleAndContent
        lessonData={lessonData}
        setLessonData={setLessonData}
      >
        <UploadVideoForm
          lessonData={lessonData}
          setLessonData={setLessonData}
        />
      </AddLessonTitleAndContent>
      <button onClick={handleLessonSave} className='btn btn-primary'>Salveaza Lectia</button>
    </main>
  );
}

export default AdaugaLectieContent