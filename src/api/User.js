import httpRequest from "../utils/HttpRequest";

export const googleLogin = async (code) => {
  try {
    const res = await httpRequest.post("/auth/google", { code });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async (data) => {
  try {
    const res = await httpRequest.post("/users/login", data);
    return { data: res.data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const Logout = async () => {
  try {
    await httpRequest.post("/users/logout");
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const SendEmail = async (data) => {
  try {
    await httpRequest.post("/student-schedules/contact/email", data);
  } catch (error) {
    console.log(error);
  }
};
