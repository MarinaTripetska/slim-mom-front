import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    userInfo: null,
    userDailyCalorieIntake: null,
    userNotRecommendedProducts: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },

  extraReducers: {
    // register

    [authOperations.actionRegister.pending](state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionRegister.fulfilled](state, _) {
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    },
    [authOperations.actionRegister.rejected](state, _) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // login

    [authOperations.actionLogin.pending](state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionLogin.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionLogin.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },

    // current user

    [authOperations.actionCurrent.pending](state) {
      state.isLoading = true;
      state.isFetchingUser = true;

      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionCurrent.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isFetchingUser = false;
      state.isLoggedIn = true;

      state.isSuccess = true;
      state.isError = false;
    },
    [authOperations.actionCurrent.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.isFetchingUser = false;
      state.isSuccess = false;
    },

    // logout
    [authOperations.actionLogout.pending](state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionLogout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.actionLogout.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },
    // getUserAdvice

    [authOperations.getUsersAdvice.pending](state, _) {
      // TODO
    },
    [authOperations.getUsersAdvice.fulfilled](state, { payload }) {
      state.user = {
        userDailyCalorieIntake: payload.userDailyCalorieIntake,
        userNotRecommendedProducts: [...payload.userNotRecommendedProducts],
      };
    },
    [authOperations.getUsersAdvice.rejected](state, _) {
      //
    },
  },
});

export const { login, logout, reset, advice } = authSlice.actions;
