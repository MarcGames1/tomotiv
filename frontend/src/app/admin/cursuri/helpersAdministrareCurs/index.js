export const saveCourseHandler = async (e, slug, courseData) => {
  e.preventDefault();
  await api.put(`/course/${slug}`, courseData);
};
