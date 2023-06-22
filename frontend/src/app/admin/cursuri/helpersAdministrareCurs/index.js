import ApiClient from "@/Classes/ApiClient";

const apiPath = process.env.NEXT_PUBLIC_API;
const api = new ApiClient(apiPath);

export const saveCourseHandler = async (e, slug, courseData) => {
 
  await api.put(`/course/${slug}`, courseData);
};


export const getCourseData = async (slug) => {
  try {
    const data = await api.get(`/course/${slug}`);
    if (!data) {
      return;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};