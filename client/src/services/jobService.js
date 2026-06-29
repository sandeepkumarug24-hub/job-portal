import axios from "axios";

const API = "http://localhost:3001/api/v1/job";

export const getAllJobs = async (keyword = "") => {
  try {
    const response = await axios.get(`${API}/get?keyword=${keyword}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
