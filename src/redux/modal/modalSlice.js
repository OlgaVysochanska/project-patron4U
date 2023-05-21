import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalShown: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state, action) {
      console.log('Викликали toggleModal');
      state.modal.isModalShown = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
