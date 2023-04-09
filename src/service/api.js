import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://slim-mom-backend-ylpc.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
