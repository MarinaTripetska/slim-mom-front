import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = `https://slim-mom-back.herokuapp.com/api/v1`;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'AUTH_TOKEN',
)}`;

//==================REGISTER USER====================
export const register = async ({ name, email, password }) => {
  try {
    const res = await axios.post(`/users/signup`, { name, email, password });
    toast.success('Реєстрація успішна');
    return res;
  } catch (e) {
    if (e.response.status === 409) {
      toast.error(`Ця електронна пошта існує`);
    } else {
      toast.error('Помилка реєстрації');
    }
  }
};

//==================LOGIN USER=====================
export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`/users/login`, { email, password });

    if (res.data.code === 200) {
      toast.success(`Вітаємо ${res.data.data.user.name}`);
    }
    return res;
  } catch (error) {
    toast.error('Помилка авторизації');
  }
};

//==================LOGOUT USER=====================
export const logout = async () => {
  try {
    const res = await axios.get(`/users/logout`);
    return res;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

//==================CURRENT USER=====================
export const current = async () => {
  try {
    const res = await axios.get(`/users/current`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

//==================GET LIST OF PRODUCTS BY QUERY=====================

export const getProductsByQuery = async query => {
  try {
    const { data } = await axios.get(`/products/search?query=${query}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

//==================Advice recomendation for not loggin user=====================

export const adviceForNoAuthUser = async payload => {
  try {
    const { data } = await axios.post('/users/nutrition-advice', payload);
    return data;
  } catch (error) {
    toast.error('Упс, щось пішло не так ');
    console.log(error.message);
  }
};

//==================Advice recomendation for Login in user=====================

export const adviceForLoginUser = async payload => {
  try {
    const { data } = await axios.post(
      '/users/logged-nutrition-advice',
      payload,
    );
    return data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.log(error.message);
  }
};

// ================GET PRODUCTS IN DIETARY BY DATE ================
export const getProductsByDate = async ({ date }) => {
  try {
    const { data } = await axios.get(`/dietaries?date=${date}`);

    return data;
  } catch (error) {
    if (error.response.status === 404) {
      return { data: 'Дієта на цю дату ще не створена' };
    } else {
      console.log(error.message);
    }
  }
};
//==================CREATE OBJ FOR PRODUCTS TO DIETARY BY DATE=====================

export const createProductsListByDate = async ({ date }) => {
  try {
    return await axios.post('/dietaries', { date });
  } catch (error) {
    console.log(error);
  }
};

//==================ADD PRODUCTS TO DIETARY BY DATE=====================

export const addProductByDate = async ({ date, data }) => {
  try {
    return await axios.patch('/dietaries', { date, data });
  } catch (error) {
    console.log(error);
  }
};

//==================DELETE PRODUCTS TO DIETARY BY DATE=====================

export const deleteProductByDate = async ({ productId, date }) => {
  try {
    return await axios.delete(`dietaries/?productId=${productId}&date=${date}`);
  } catch (error) {
    console.log(error);
  }
};
