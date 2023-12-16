import axios from 'axios';

const baseURL = axios.create({baseURL : "https://mrm-server.onrender.com/api/posts/"})
export const baseImg = "https://mrm-server.onrender.com/"

export default baseURL

// http://127.0.0.1:5000/api/posts/