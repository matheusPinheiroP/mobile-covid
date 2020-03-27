import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pure-island-10102.herokuapp.com/'
})

export default api;