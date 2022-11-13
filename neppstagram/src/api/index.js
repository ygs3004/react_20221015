import axios from "axios";

axios.defaults.headers = {
  "Access-Control-Allow-Origin": "*", // Required for CORS support to work
  "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
};

export const postSignUp = async (name, email, password) => {
  try {
    const result = await axios.post(
      "http://101.101.218.43/users",
      {
        name,
        email,
        password,
      },
      { withCredentials: true }
    );

    return result;
  } catch (e) {
    throw new Error(e);
  }
};

export const postSigIn = async (email, password) => {
  try {
    const result = await axios.post(
      "http://101.101.218.43/users/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return result;
  } catch (e) {
    // throw new Error(e.response.status);
  }
};

export const getPost = async (page) => {
  try {
    let result = await axios.get("http://101.101.218.43/posts/all/" + page, {
      withCredentials: true,
    });
    return result;
  } catch (e) {}
};

export const postEdit = async (form) => {
  try {
    let result = await axios.post("http://101.101.218.43/posts", form, {
      headers: {
        "Content-Type": "mulipart/form-data",
      },
    });

    console.log(result);
  } catch (e) {}
};
