import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';

axios.defaults.baseURL = `https://slim-mom-back.herokuapp.com/api/v1`;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'AUTH_TOKEN',
)}`;

//==================REGISTER====================
export const register = async ({ name, email, password }) => {
  try {
    const res = await axios.post(`/users/signup`, { name, email, password });
    toast.success('Registration success');
    return res;
  } catch (e) {
    if (e.response.status === 409) {
      toast.error(`This email already exist`);
    } else {
      toast.error('Registration error');
    }
  }
};

//==================LOGIN=====================
export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`/users/login`, { email, password });
    // toast.success('Authorization success');
    // console.log(res.data.data.user.name);
    if (res.data.code === 200) {
      toast.success(`Welcome ${res.data.data.user.name}`);
    }
    return res;
  } catch (error) {
    // TODO: error on wrong auth data
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
    if (res.data.code === 200) {
      toast.success(`Welcome ${res.data.data.user.name}`);
    }
    return res;
  } catch (error) {
    // toast.error('User not found');
  }
};

//==================PRODUCTS ADD=====================
export const addProduct = async product => {
  try {
    const { data } = await axios.post('/product/addDiaryFood', product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// //==================PRODUCTS DELETE=====================

export const deleteProduct = async id => {
  try {
    const deletedProduct = await axios.delete('/product/delDiaryFood', { id });
    return deletedProduct;
  } catch (error) {
    console.log(error);
  }
};

// //==================PRODUCTS GET BY QUERY=====================

export const getProductByQuery = async query => {
  try {
    const { data } = await axios.get(`/products/search?query=${query}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// //==================PRODUCTS GET BY DATA=====================

export const getProductsListByDate = async date => {
  try {
    const { data } = await axios.post('/users/dayinfo', {
      day: moment(date).format('DD.MM.yyyy'),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

//==================Advice recomendation for not loggin user=====================

export const adviceForNoAuthUser = async payload => {
  try {
    const { data } = await axios.post('/users/nutrition-advice', payload);
    return data;
  } catch (error) {
    toast.error('Ups, something wrong ');
  }
};
