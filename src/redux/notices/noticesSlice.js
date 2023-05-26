import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllNotices,
  fetchAddNotice,
  fetchDeleteNotice,
  fetchNoticesByCategory,
  fetchNoticesByUser,
  fetchFavoriteNoticesByUser,
} from './noticesOperations';

const initialState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null,
  totalPages: 0,
  currentPage: 1,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllNotices.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllNotices.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchAllNotices.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddNotice.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(fetchAddNotice.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddNotice.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteNotice.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteNotice.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteNotice.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchNoticesByCategory.pending, store => {
        store.loading = true;
        store.items = [];
      })
      .addCase(fetchNoticesByCategory.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload.data];
        store.totalPages = payload.totalPages;
        store.currentPage = payload.currentPage;
        store.category = payload.category;
      })
      .addCase(fetchNoticesByCategory.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchNoticesByUser.pending, store => {
        store.loading = true;
        store.items = [];
      })
      .addCase(fetchNoticesByUser.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload.data];
        store.totalPages = payload.totalPages;
        store.currentPage = payload.currentPage;
      })
      .addCase(fetchNoticesByUser.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchFavoriteNoticesByUser.pending, store => {
        store.loading = true;
        store.items = [];
      })
      .addCase(fetchFavoriteNoticesByUser.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload.data];
        store.totalPages = payload.totalPages;
        store.currentPage = payload.currentPage;
      })
      .addCase(fetchFavoriteNoticesByUser.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
  reducers: {
    addFilteredNotices(state, action) {
      state.filteredItems = action.payload;
    },
  },
});

export const { addFilteredNotices } = noticesSlice.actions;
export default noticesSlice.reducer;
