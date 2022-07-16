import { createSlice } from '@reduxjs/toolkit';

const initialState = { date: '' };

export const dateSlice = createSlice({
  name: 'selectedDate',
  initialState,
  reducers: {
    dateAction: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { dateAction } = dateSlice.actions;
export const getSelectedDate = state => state.selectedDate.date;
export default dateSlice.reducer;
