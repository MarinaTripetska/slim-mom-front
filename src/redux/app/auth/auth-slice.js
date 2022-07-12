import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },

  extraReducers: {
    //registration:
    [authOperations.register.pending](state) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [authOperations.register.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    // [authOperations.register.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logout.fulfilled](state, _) {
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
