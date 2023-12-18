import axios from 'axios';
const Api = 'http://127.0.0.1:5000/'

const baseURL = axios.create({baseURL : `${Api}api/posts/`})
export const baseImg = `${Api}`

export default baseURL

// http://127.0.0.1:5000/api/posts/
// https://mrm-server.onrender.com/