import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/notices';

export const fetchAllNotices = createAsyncThunk(
  'notices/fetch-all',
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
  'notices/add',
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
  'notices/delete',
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
  async (category, { rejectWithValue }) => {
    try {
      const data = await api.getNoticesByCategory(category);
      console.log(data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

// export const fetchNoticesByUser = createAsyncThunk(
//   'notices/own',
//   async ( id, { rejectWithValue }) => {
//     try {
//       const data = await api.getUserNotices(id);
//       return data;

//     } catch ({ response }) {
//       return rejectWithValue(response.data);
//     }
//   }
// );

// export const fetchFavoriteNoticesByUser = createAsyncThunk(
//   'notices/favorite',
//   async ( id, { rejectWithValue }) => {
//     try {
//       const data = await api.getUserFavoriteNotices(id);
//       return data;

//     } catch ({ response }) {
//       return rejectWithValue(response.data);
//     }
//   }
// );
