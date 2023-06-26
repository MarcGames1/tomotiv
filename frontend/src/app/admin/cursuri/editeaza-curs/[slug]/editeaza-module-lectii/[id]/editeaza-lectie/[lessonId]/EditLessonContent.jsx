'use client'
import CourseDescriptionEditor from '@/app/admin/cursuri/componenteAdministrareCurs/CourseDescriptionEditor';
import { getLessonData } from '@/app/admin/cursuri/helpersAdministrareCurs';
import React, { useState, useEffect } from 'react';
import UploadVideoForm from '../../adauga-lectie/uploadVideoForm';
import ApiClient from '@/Classes/ApiClient';
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation';


const api = new ApiClient(process.env.NEXT_PUBLIC_API)

const EditLessonContent = ({ slug, id, lessonId }) => {
    const [lesson, setLesson] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [isTitleEnabled, setIsTitleEnabled] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(undefined);
    const [currentContent, setCurrentContent] = useState(undefined);
    const [isEditingContent, setIsEditingContent] = useState(false);
    
    const router = useRouter();

    
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { lesson } = await getLessonData(id, lessonId);
      
      setLesson(lesson);
      setCurrentTitle(lesson.title);
      setCurrentContent(lesson.content);
      setIsLoading(false);
    };

    fetchData();
  }, []);


  const saveLessonHandler = async () => {
    try {
      await api.put(`${slug}/modules/lessons/${lessonId}`);
      toast.success('Lecția a fost salvată cu succes!');
      router.push(
        `http://localhost:3000/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii/${id}`
      );
    } catch (error) {
      toast.error('Eroare la salvarea lecției!');
    }
  };
  if (isLoading) return <>Loading . . .</>;
  return (
    <div className="m-10 prose">
      <pre>{JSON.stringify({ slug, id, lessonId }, '', 3)}</pre>
      <pre>{JSON.stringify({ lesson }, '', 3)}</pre>

      <h1 className="">{lesson.title}</h1>
      <UploadVideoForm lessonData={lesson} setLessonData={setLesson} />
      {isEditingContent ? (
        <CourseDescriptionEditor
          onChange={(content) => {
            setCurrentContent(content);
          }}
          content={lesson.content}
        />
      ) : (
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />
      )}
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => setIsEditingContent(!isEditingContent)}
        >
          {isEditingContent
            ? 'Salvează Descrierea Lectiei'
            : 'Editează Descrierea Lectiei'}
        </button>
        { !isEditingContent &&
          <button
            className="btn btn-success"
            onClick={saveLessonHandler}
          >
            Salveaza Lectia!
          </button>
        }
      </div>
    </div>
  );
};

export default EditLessonContent;
