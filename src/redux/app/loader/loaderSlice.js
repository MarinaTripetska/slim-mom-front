import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false };

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loaderAction: (state, action) => {
      state.isShown = action.payload;
    },
  },
});

export const { loaderAction } = loaderSlice.actions;

export default loaderSlice.reducer;

// SELECTOR
export const getIsLoading = state => state.loader.isLoading;
