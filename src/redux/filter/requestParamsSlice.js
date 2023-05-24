// requestParamsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const requestParamsSlice = createSlice({
  name: 'requestParams',
  initialState: {
    ages: [],
    genders: [],
  },
  reducers: {
    setRequestParams: (state, action) => {
      state.ages = action.payload.ages;
      state.genders = action.payload.genders;
    },
  },
});

export const { setRequestParams } = requestParamsSlice.actions;

export default requestParamsSlice.reducer;
