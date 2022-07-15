import { createSlice } from '@reduxjs/toolkit';

const initialState = { date: '' };
// const initialState = '';

export const dateSlice = createSlice({
  name: 'selectedDate',
  initialState,
  reducers: {
    dateAction: (state, action) => {
      state.date = action.payload;
      console.log('action.payload:', action.payload);
    },
  },
});

export const { dateAction } = dateSlice.actions;

export default dateSlice.reducer;

// SELECTOR
export const getSelectedDate = state => state.selectedDate.date;
