import { getCourseData } from "../cursuri/helpersAdministrareCurs";
import { useState, useEffect } from "react";
const useCourseData = (slug) => {
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourseData(slug);
        setCourseData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { courseData, setCourseData, isLoading, error };
};

export default useCourseData