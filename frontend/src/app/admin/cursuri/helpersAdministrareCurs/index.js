import ApiClient from "@/Classes/ApiClient";

const apiPath = process.env.NEXT_PUBLIC_API;
const api = new ApiClient(apiPath);

export const saveCourseHandler = async (e, slug, courseData) => {
  e.preventDefault();
  await api.put(`/course/${slug}`, courseData);
};
