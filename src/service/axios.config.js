// import axios from 'axios';
import { toast } from 'react-toastify';
import instanceClientAPI from './api';
// import { authOperations } from 'redux/app/auth';
// import { store } from 'redux/store';
// function updateAuthHeader() {
//   const token = localStorage.getItem('AUTH_TOKEN');
//   // axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';

//   return token ? `Bearer ${token}` : '';
// }

// const instanceClientAPI = axios.create({
//   baseURL: `https://slim-mom-back.herokuapp.com/api/v1`,
//   headers: {
//     'Content-Type': 'application/json',
//     common: {
//       Authorization: updateAuthHeader(),
//     },
//   },
// });
// instanceClientAPI.interceptors.response.use(undefined, error => {
//   if (error.response?.status === 401) {
//     const state = store.getState();
//     if (state.auth.isLoggedIn) {
//       store.dispatch(authOperations.actionLogout());
//     }
//     throw error;
//   }
// });
// setInterval(() => {
//   const state = store.getState();
//   if (state.auth.isLoggedIn) {
//     store.dispatch(authOperations.actionRefreshToken());
//   }
// }, 120000);
// ((axios.defaults.baseURL = `https://slim-mom-back.herokuapp.com/api/v1`));
// axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
//   'AUTH_TOKEN',
// )}`;

// updateAuthHeader();
//================== REGISTER USER ====================
export const register = async ({ name, email, password }) => {
  try {
    const res = await instanceClientAPI.post(`/users/signup`, {
      name,
      email,
      password,
    });
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

//================== LOGIN USER =====================
export const login = async ({ email, password }) => {
  try {
    const res = await instanceClientAPI.post(`/users/login`, {
      email,
      password,
    });

    if (res.data.code === 200) {
      toast.success(`Вітаємо ${res.data.data.user.name}`);
    }
    return res;
  } catch (error) {
    toast.error('Помилка авторизації');
  }
};

//================== LOGOUT USER =====================
export const logout = async () => {
  try {
    const res = await instanceClientAPI.get(`/users/logout`);
    return res;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

//================== CURRENT USER =====================
export const current = async () => {
  // try {
  const res = await instanceClientAPI.get(`/users/current`);
  return res;
  // } catch (error) {
  //   console.log(error.message);
  // }
};

export const getNewTokens = async payload => {
  const res = await instanceClientAPI.post(`/users/refresh-tokens`, payload);
  return res;
};

//================== GET LIST OF PRODUCTS BY QUERY =====================

export const getProductsByQuery = async query => {
  try {
    const { data } = await instanceClientAPI.get(
      `/products/search?query=${query}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

//================== Advice recomendation for not loggin user =====================

export const adviceForNoAuthUser = async payload => {
  try {
    const { data } = await instanceClientAPI.post(
      '/users/nutrition-advice',
      payload,
    );
    return data;
  } catch (error) {
    toast.error('Упс, щось пішло не так ');
    console.log(error.message);
  }
};

//================== Advice recomendation for Login in user =====================

export const adviceForLoginUser = async payload => {
  try {
    const { data } = await instanceClientAPI.post(
      '/users/logged-nutrition-advice',
      payload,
    );
    return data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.log(error.message);
  }
};

// ================ GET PRODUCTS IN DIETARY BY DATE ================
export const getProductsByDate = async ({ date }) => {
  try {
    const { data } = await instanceClientAPI.get(`/dietaries?date=${date}`);

    return data;
  } catch (error) {
    if (error.response.status === 404) {
      return { data: 'Дієта на цю дату ще не створена' };
    } else {
      console.log(error.message);
    }
  }
};
//================== CREATE OBJ FOR PRODUCTS TO DIETARY BY DATE =====================

export const createProductsListByDate = async ({ date }) => {
  try {
    return await instanceClientAPI.post('/dietaries', { date });
  } catch (error) {
    console.log(error);
  }
};

//================== ADD PRODUCTS TO DIETARY BY DATE =====================

export const addProductByDate = async ({ date, data }) => {
  try {
    return await instanceClientAPI.patch('/dietaries', { date, data });
  } catch (error) {
    console.log(error);
  }
};

//================== DELETE PRODUCTS TO DIETARY BY DATE =====================

export const deleteProductByDate = async ({ productId, date }) => {
  try {
    return await instanceClientAPI.delete(
      `dietaries/?productId=${productId}&date=${date}`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const clientAPI = {
  register,
  login,
  logout,
  current,
  getNewTokens,
  getProductsByQuery,
  adviceForNoAuthUser,
  adviceForLoginUser,
  getProductsByDate,
  createProductsListByDate,
  addProductByDate,
  deleteProductByDate,
};
