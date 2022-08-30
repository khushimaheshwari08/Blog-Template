import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:5000/api/v1";

let token = Cookies.get("token");
console.log(token);

export const getAllBlogPost = async (data = "") => {
  let search = data || "";
  try {
    return await axios.get(`${API_URL}/blog-post?search=${search}`);
  } catch (error) {
    console.log("Error while calling getAllPost api ", error);
  }
};

export const getAllCategory = async () => {
  try {
    return await axios.get(`${API_URL}/category`);
  } catch (error) {
    console.log("Error while calling getAllCategory api ", error);
  }
};

export const getBlog = async (id) => {
  try {
    return await axios.get(`${API_URL}/blog-post/${id}`);
  } catch (error) {
    console.log("Error while calling getBlog api ", error);
  }
};

export const logIn = async (data) => {
  try {
    return await axios.post(`${API_URL}/users/login`, data);
  } catch (error) {
    console.log("Error while calling logIn api", error.message);
  }
};

export const signUp = async (data) => {
  try {
    return await axios.post(`${API_URL}/users/signup`, data);
  } catch (error) {
    console.log("Error while calling signUp api", error.message);
  }
};

export const createBlogPost = async (data) => {
  try {
    return await axios.post(`${API_URL}/blog-post`, data, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDU5ZmVjMGJlNzViNGYwOTgyMGEzOCIsImlhdCI6MTY1ODE2NzMwMSwiZXhwIjoxNjY1OTQzMzAxfQ.RN1uqI3uLIrG8SHn4qIQvsUdKFx56x5DlwX-9KAp9Pc`,
      },
    });
  } catch (error) {
    console.log("Error while calling createBlogPost  api ", error);
  }
};
