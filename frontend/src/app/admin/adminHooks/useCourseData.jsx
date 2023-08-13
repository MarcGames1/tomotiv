import { getCourseData, saveCourseHandler } from "../cursuri/helpersAdministrareCurs";
import { useState, useEffect } from "react";
const useCourseData = (slug) => {
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const saveCourseState = async (data) =>{
    setCourseData(data);
    await saveCourseHandler(slug, data)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCourseData(slug);
        saveCourseState(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { courseData, saveCourseState, getCourseData, isLoading, error };
};

export default useCourseData