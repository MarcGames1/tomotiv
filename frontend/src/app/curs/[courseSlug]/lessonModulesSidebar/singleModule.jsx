import React, { useEffect, useState, useContext } from 'react';
import { Context } from '@/context';
import Accordion from '@/components/Accordion';
import SingleLessonElement from './singleLessonElement';
const SingleModule = ({ module, course, currentLesson, setCurrentLesson }) => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <Accordion title={<>{module.title}</>}>
      <ul className="menu join menu-lg bg-secondary text-secondary-content  w-full">
        {module.lessons.map((lesson, idx) => (
          <>
            <SingleLessonElement
              key={lesson._id}
              currentLesson={currentLesson}
              lesson={lesson}
              setCurrentLesson={setCurrentLesson}
            />
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-primary">{`${idx + 1}/${
                  module.lessons.length
                }`}</span>
                <input
                  aria-label="Checkbox"
                  type="checkbox"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          </>
        ))}
      </ul>
    </Accordion>
  );
};


export default SingleModule