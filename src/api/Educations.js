import httpRequest from "../utils/HttpRequest";

export const getEducations = async () => {
  try {
    const res = await httpRequest.get("/educations");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
