import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = `http://localhost:5050/api/v1`;

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
//   'AUTH_TOKEN',
// )}`;

//==================REGISTER====================
export const register = async ({ name, email, password }) => {
  try {
    const res = await axios.post(`/users/signup`, { name, email, password });
    toast.success('Registration success');
    return res;
  } catch (error) {
    if (error.response.status === 409) {
      toast.error(`${error.response.data.message}`);
    } else {
      toast.error('Registration error');
    }
  }
};

//==================LOGIN=====================
export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`/users/login`, { email, password });
    toast.success('Authorization success');
    return res;
  } catch (error) {
    toast.error('Authorization error');
  }
};

//==================LOGOUT=====================
export const logout = async () => {
  try {
    const res = await axios.get(`/users/logout`);
    return res;
  } catch (error) {
    toast.error('Ups, something went wrong');
    console.error(error);
  }
};

//==================CURRENT=====================
export const current = async () => {
  try {
    const res = await axios.get(`/users/current`);
    return res;
  } catch (error) {
    toast.error('User not found');
  }
};

//==================Diet for Modal=====================
// export const adviceForUser = async credentials => {
//   try {
//     const res = await axios.post('/users/nutrition-advice', credentials);
//     console.log(res);
//     return res;
//   } catch (error) {
//     toast.error('Ups, something wrong ');
//   }
// };
