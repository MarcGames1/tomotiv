'use client'
import React, { createContext, useState } from 'react';
import useCourseData from '../adminHooks/useCourseData';
import {
  saveCourseHandler,
  getCourseData,
} from '../cursuri/helpersAdministrareCurs';

const CourseDataContext = createContext();

const CourseDataProvider = ({ children, slug }) => {
  const { courseData, setCourseData, isLoading, error } = useCourseData(slug);
  const [currentSlug, setSlug] = useState(slug);

  const updateCourseData = async () => {
    const data = await getCourseData(slug);
    setCourseData(data);
    setSlug(slug);
  };

  

  const handleSaveCourse = async (e) => {
    await saveCourseHandler(e, slug, courseData);
  };

  return (
    <CourseDataContext.Provider
      value={{
        courseData,
        setCourseData,
        isLoading,
        error,
        setSlug,
        slug,
        handleSaveCourse,
        updateCourseData,
      }}
    >
      {children}
    </CourseDataContext.Provider>
  );
};

export { CourseDataProvider, CourseDataContext };
