import React, {useState} from 'react'
import LessonModulesSidebar from './lessonModulesSidebar';
import LessonVideoAndDescription from './lessonVideoAndDescription';
const LessonViewComponent = ({course}) => {

    const [currentLesson, setCurrentLesson] =useState({}) // aici o sa vreau sa fac userSttus si sa revina la lectia la care a ramas utilizatorul
    const [modules, setModules] = useState([...course.modules])
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className=" p-2 flex justify-around w-full"
    >
      <main className="  w-3/4">
        <LessonVideoAndDescription currentLesson={currentLesson} />
      </main>
      <aside className="sticky top-10 h-full w-1/4 bg-base-200">
        <LessonModulesSidebar
          currentLesson={currentLesson}
          modules={modules}
          setCurrentLesson={setCurrentLesson}
        />
      </aside>
    </div>
  );
}

export default LessonViewComponent