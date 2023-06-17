import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const CourseModule = ({ courseData, setCourseData }) => {
  const handleAddModule = (e) => {
    e.preventDefault();
    const newModule = {
      title: '', // denumirea modulului
      lessons: [], // array-ul de lecții
    };

    setCourseData({
      ...courseData,
      modules: [...courseData.modules, newModule],
    });
    console.log(courseData);
  };

  const handleRemoveModule = (e, index) => {
    e.preventDefault();
    const updatedModules = [...courseData.modules];
    updatedModules.splice(index, 1);
    setCourseData({ ...courseData, modules: updatedModules });
  };

  return (
    <div className="form-control flex flex-row">
      <div className="container">
        {courseData.modules.map((module, index) => (
          <div key={index}>
            <input
              type="text"
              value={module.title}
              onChange={(e) => {
                const updatedModules = [...courseData.modules];
                updatedModules[index].title = e.target.value;
                setCourseData({ ...courseData, modules: updatedModules });
              }}
              className="input input-bordered"
            />
            <button onClick={(e) => handleRemoveModule(e, index)}>
              <AiOutlineDelete />
            </button>
            {/* aici as mai vrea sa fac un buton care sa ma duca pe o pagina separata  unde:
             daca nu am module inca sa am un buton de adauga modul
             in cursul curent.
             
             Daca extista module sa se afiseze titlul modulului si ( 
               a) daca in modulele respective se regaseste un lesson_id, sa se listeze titlul lectiei impreuna cu un buton de stergere sau alt buton de editare lectie, 
               b) daca nu exista o lectie in acel modul, sa se afiseze un buton de adaugare lectie )
              */}
          </div>
        ))}
      </div>
      <button className="btn btn-secondary" onClick={handleAddModule}>
        Adaugă modul
      </button>
    </div>
  );
};

export default CourseModule;
