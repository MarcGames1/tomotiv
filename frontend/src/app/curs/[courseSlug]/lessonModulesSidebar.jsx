import React, { useEffect, useState } from 'react'


// currentLesson={currentLesson} 
//            modules={modules} 
//            setCurrentLesson={setCurrentLesson}
const LessonModulesSidebar = ({ currentLesson, modules, setCurrentLesson }) => {
  return (
    <div>
    {modules.map(module =>{
        return <SingleModule key={module._id} module={module} setCurrentLesson={setCurrentLesson} currentLesson={currentLesson} />
    })}
    </div>
  );
};

export default LessonModulesSidebar


const SingleModule =({module, currentLesson ,setCurrentLesson}) =>{

    

    const handleLessonClick = (lesson) =>{
        setCurrentLesson(lesson)
    }
        


    return (
      <div tabIndex={0} className="collapse ">
        <div className="collapse-title text-xl text-center font-medium">
          {module.title}
        </div>
        <div className="collapse-content">
          <ul className="menu menu-lg bg-base-100 w-full">
            {module.lessons.map((lesson) => {
                const [isActive, setIsActive] = useState(false);
                useEffect(() => {
                  if (lesson._id === currentLesson._id) {
                    setIsActive(true);
                  } else {
                    setIsActive(false);
                  }
                }, [currentLesson._id]);
              return (
                <li
                  key={lesson._id}
                  className={`text-center btn  ${
                    isActive ? 'btn-active' : null
                  }`}
                  onClick={() => {
                    handleLessonClick(lesson);
                  }}
                >
                  {lesson.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
}