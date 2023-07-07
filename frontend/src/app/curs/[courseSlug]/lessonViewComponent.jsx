import React, {useState, useEffect, useContext} from 'react'
import LessonModulesSidebar from './lessonModulesSidebar/lessonModulesSidebar';
import LessonVideoAndDescription from './lessonVideoAndDescription';
import Placeholder from './Placeholder';
import { Context } from '@/context';
const LessonViewComponent = ({course}) => {

    
  
    const [currentLesson, setCurrentLesson] =useState({}) // aici o sa vreau sa fac userSttus si sa revina la lectia la care a ramas utilizatorul
    const [modules, setModules] = useState([...course.modules])
    const { state } =useContext(Context)
    const {progress} = state
    
    useEffect(() => {
      if (modules.length > 0) {
        const lessonId = progress.progress.find(
          (item) => item.finished === false
        )?.lesson;
        const foundLesson = modules.reduce((found, module) => {
          if (!found) {
            const lesson = module.lessons.find(
              (lesson) => lesson._id === lessonId
            );
            return lesson ? lesson : null;
          }
          return found;
        }, null);
        const firstLesson = modules[0].lessons[0];
        setCurrentLesson(foundLesson);
        console.log('Course _ >>> ', course);
        console.log('FOUND LESSON _ >>> ', foundLesson);
        console.log('FOUND LESSON ID _ >>> ', lessonId);
      }
    }, [modules, progress]);

  return (
    <div
      // onContextMenu={(e) => e.preventDefault()}
      className=" p-2 flex justify-around w-full"
    >
      <main className="  w-3/4">
        {currentLesson ? (
          <LessonVideoAndDescription
            course={course}
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
          course={course}
          currentLesson={currentLesson}
          modules={modules}
          setCurrentLesson={setCurrentLesson}
        />
      </aside>
    </div>
  );
}

export default LessonViewComponent