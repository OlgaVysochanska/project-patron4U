import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/notices';

export const fetchAllNotices = createAsyncThunk(
  'notice/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllNotices();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddNotice = createAsyncThunk(
  'notice/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addNotice(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteNotice = createAsyncThunk(
  'notice/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteNotice(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/category',
  async ( {categoryName, query}, { rejectWithValue }) => {
    try {
      const data = await api.getNoticeByCategory(categoryName, query);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);