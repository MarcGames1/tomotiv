'use client'
import React, { useEffect, useState } from 'react';
import CourseDescriptionEditor from '@/app/admin/cursuri/componenteAdministrareCurs/CourseDescriptionEditor';

const AddLessonTitleAndContent = ({ lessonData, setLessonData, children }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (title !== '' && content !== '') {
      setLessonData({ ...lessonData, title, content });
    }
  }, [title, content]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  return (
    <>
      <input
        onInput={handleTitleChange}
        type="text"
        placeholder="Titlu Lectie"
        className="input w-full max-w-xs"
        value={title}
      />
      {children}
      <CourseDescriptionEditor
        onChange={handleContentChange}
        content={content}
      />
    </>
  );
};

export default AddLessonTitleAndContent;
