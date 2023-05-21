import { createSlice } from '@reduxjs/toolkit';

import { fetchAllPets, fetchAddPet, fetchDeletePet } from './petsOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllPets.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllPets.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllPets.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddPet.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(fetchAddPet.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddPet.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeletePet.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeletePet.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeletePet.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default petsSlice.reducer;
