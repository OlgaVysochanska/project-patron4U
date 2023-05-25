// requestParamsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const requestParamsSlice = createSlice({
  name: 'requestParams',
  initialState: {
    ages: [],
    genders: [],
    ageButtons: [],
    genderButtons: [],
  },
  reducers: {
    setRequestParams: (state, action) => {
      state.ages = action.payload.ages;
      state.genders = action.payload.genders;
      state.ageButtons = action.payload.ageButtons;
      state.genderButtons = action.payload.genderButtons;
    },
  },
});

export const { setRequestParams } = requestParamsSlice.actions;

export default requestParamsSlice.reducer;
