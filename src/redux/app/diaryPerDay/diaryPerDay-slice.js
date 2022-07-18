import { createSlice } from '@reduxjs/toolkit';
import { diaryPerDayOperation } from './diaryPerDay-operation';

const currentDate = new Date().toLocaleDateString();

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  date: currentDate,
  products: null,
};

export const diaryPerDaySlice = createSlice({
  name: 'diaryPerDay',

  initialState,

  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload;
      state.products = null;
    },
  },

  extraReducers: {
    // get products

    [diaryPerDayOperation.actionGetProducts.pending](state) {
      state.isLoading = true;
    },
    [diaryPerDayOperation.actionGetProducts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;

      state.products = [...payload.result.products];
    },
    [diaryPerDayOperation.actionGetProducts.rejected](state, action) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // create list products
    [diaryPerDayOperation.actionCreateProductsList.pending](state) {
      state.isLoading = true;
    },
    [diaryPerDayOperation.actionCreateProductsList.fulfilled](
      state,
      { payload },
    ) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = [...payload.result.products];
    },
    [diaryPerDayOperation.actionCreateProductsList.rejected](state, action) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // update products list
    [diaryPerDayOperation.actionAddProduct.pending](state) {
      state.isLoading = true;
    },
    [diaryPerDayOperation.actionAddProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = action.payload.products;
    },
    [diaryPerDayOperation.actionAddProduct.rejected](state, action) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // delete product from list
    [diaryPerDayOperation.actionDeleteProduct.pending](state) {
      state.isLoading = true;
    },
    [diaryPerDayOperation.actionDeleteProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = action.payload.products;
    },
    [diaryPerDayOperation.actionDeleteProduct.rejected](state, action) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const {
  updateDate,
  getProducts,
  createProductsList,
  addProduct,
  deleteProduct,
} = diaryPerDaySlice.actions;

export const diaryReducer = diaryPerDaySlice.reducer;
