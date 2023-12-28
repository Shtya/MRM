import axios from 'axios';
const Api = 'https://mrm-0-server.vercel.app/'

export const baseWEB = "https://mrmadvertisingdubai.com/"
const baseURL = axios.create({baseURL : `${Api}api/posts/`})


export default baseURL

// http://127.0.0.1:5000/api/posts/
// https://mrm-server.onrender.com/
// https://mrm-server-vjru.onrender.com/


//https://mrmadvertisingdubai.com/
