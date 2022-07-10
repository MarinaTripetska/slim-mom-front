import { combineReducers } from '@reduxjs/toolkit';
import { loaderSlice } from './loader/loaderSlice';

export const rootReducer = combineReducers({ loader: loaderSlice.reducer });
