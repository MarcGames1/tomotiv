import ApiClient from '@/Classes/ApiClient';
import React, {  } from 'react';
import SingleModule from './singleModule';
const api = new ApiClient(process.env.NEXT_PUBLIC_API);

const LessonModulesSidebar = ({
  course,
  currentLesson,
  modules,
  setCurrentLesson,
}) => {
  return (
    <div>
      {(typeof(modules)==='object') && modules.map((module) => {
        return (
          <SingleModule
            course={course}
            key={module._id}
            module={module}
            setCurrentLesson={setCurrentLesson}
            currentLesson={currentLesson}
          />
        );
      })}
    </div>
  );
};

export default LessonModulesSidebar;



