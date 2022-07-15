import { combineReducers } from '@reduxjs/toolkit';
import { loaderSlice } from './app/loader/loaderSlice';
import { authSlice } from './app/auth';
import { productsSlice } from './app/products/productsSlice';
import { usersSlice } from './app/users/users-slice';
// import { persistReducer } from 'redux-persist';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const rootReducer = combineReducers({
  loader: loaderSlice.reducer,
  auth: authSlice.reducer,
  products: productsSlice.reducer,
  users: usersSlice.reducer,
});
