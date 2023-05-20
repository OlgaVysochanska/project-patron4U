import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalShown: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (_, { payload }) => payload,
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
