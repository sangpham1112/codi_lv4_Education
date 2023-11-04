import httpRequest from "../utils/HttpRequest";

export const getScheduleByCourse = async (id) => {
  try {
    const res = await httpRequest.get(`/schedules/${id}/course`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
