import httpRequest from "../utils/HttpRequest";

export const getTeachers = async () => {
  try {
    const res = await httpRequest.get("/teachers");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTeacher = async (id) => {
  try {
    const res = await httpRequest.get("/users/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
