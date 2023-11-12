import httpRequest from "../utils/HttpRequest";

export const getCourses = async () => {
  try {
    const res = await httpRequest.get("/courses/all");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCourse = async (id) => {
  try {
    const res = await httpRequest.get("/courses/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoursesByCategory = async (id, grade = "") => {
  try {
    const res = await httpRequest.get(`/categories/${id}/courses${grade}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const buyCourse = async (data) => {
  try {
    await httpRequest.post(`/student-schedules`, data);
  } catch (error) {
    console.log(error);
  }
};

export const postComment = async (data) => {
  try {
    await httpRequest.post("/courses/comment", data);
  } catch (error) {
    console.log(error);
  }
};
