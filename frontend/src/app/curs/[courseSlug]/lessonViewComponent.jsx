import React, {useState, useEffect} from 'react'
import LessonModulesSidebar from './lessonModulesSidebar';
import LessonVideoAndDescription from './lessonVideoAndDescription';
import Placeholder from './Placeholder';

const LessonViewComponent = ({course}) => {


    const [currentLesson, setCurrentLesson] =useState({}) // aici o sa vreau sa fac userSttus si sa revina la lectia la care a ramas utilizatorul
    const [modules, setModules] = useState([...course.modules])

    useEffect(() => {
      if (modules.length > 0) {
        const firstLesson = modules[0].lessons[0];
        setCurrentLesson(firstLesson);
      }
    }, []);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className=" p-2 flex justify-around w-full"
    >
      <main className="  w-3/4">
        {currentLesson ? (
          <LessonVideoAndDescription
            modules={modules}
            setCurrentModules={setModules}
            setCurrentLesson={setCurrentLesson}
            currentLesson={currentLesson}
          />
        ) : (
          <Placeholder />
        )}
      </main>
      <aside className="sticky top-10 overflow-y-auto h-[95vh] w-1/4 bg-base-200">
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