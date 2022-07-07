import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rootReducer } from './rootReducer';

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
