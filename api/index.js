import axios from "axios";

const baseUrl = "http://localhost:3000/api";

const getStudents = async () => {
  try {
    const res = await axios.get(`${baseUrl}/students`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getCourse = async (course) => {
  try {
    const res = await axios.get(`${baseUrl}/courses/${course}`);
    return res.data;
  } catch (error) {
    return [];
  }
};

export { getStudents, getCourse };
