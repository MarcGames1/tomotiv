import Loading from "@/components/Loading/Loading";
import { useState, useEffect } from "react";

const SingleLessonElement = ({ lesson, currentLesson, setCurrentLesson }) => {
  const [isActive, setIsActive] = useState(false);
 
  useEffect(() => {
    if (lesson && lesson._id === currentLesson._id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentLesson?._id]);

  
  return (
    <li
      key={lesson._id}
      className={`join-item text-center btn btn-secondary ${
        isActive ? 'btn-active' : null
      }`}
      onClick={() => {
        setCurrentLesson(lesson);
      }}
    >
      {lesson.title}
    </li>
  );
};

export default SingleLessonElement