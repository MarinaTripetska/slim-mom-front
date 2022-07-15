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
  // message: '',
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      // state.message = '';
    },
  },

  extraReducers: {
    // register

    [authOperations.actionRegister.pending](state) {
      state.isLoading = true;
    },
    [authOperations.actionRegister.fulfilled](state, action) {
      // state.user = action.payload.user; //????
      state.isSuccess = true;
      state.isLoading = false;
    },
    [authOperations.actionRegister.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      // state.message = action.payload;
    },

    // login

    [authOperations.actionLogin.pending](state) {
      state.isLoading = true;
    },
    [authOperations.actionLogin.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.actionLogin.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      // state.message = action.payload; // TODO: test it
    },

    // current user

    [authOperations.actionCurrent.pending](state) {
      state.isLoading = true;
      state.isFetchingUser = true;
    },
    [authOperations.actionCurrent.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isFetchingUser = false;
      state.isLoggedIn = true;
    },
    [authOperations.actionCurrent.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.isFetchingUser = false;
      // state.message = action.payload; // TODO: test it
    },

    // logout

    [authOperations.actionLogout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    //first request:
    // [authOperations.fetchCurrentUser.pending](state) {
    //   state.isFetchingUser = true;
    // },
    // [authOperations.fetchCurrentUser.fulfilled](state, action) {
    //   state.isLoggedIn = true;
    //   state.isFetchingUser = false;
    //   state.user = action.payload;
    // },
    // [authOperations.fetchCurrentUser.rejected](state) {
    //   state.isFetchingUser = false;
    // },
  },
});

export const { login, logout, reset } = authSlice.actions;
