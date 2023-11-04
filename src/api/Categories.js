import httpRequest from "../utils/HttpRequest";

export const getCategoriesByEducation = async (id) => {
  try {
    const res = await httpRequest.get(`/educations/${id}/categories`);
    return res.data;
  } catch (error) {
    console.log(first);
  }
};
