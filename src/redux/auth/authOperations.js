import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/auth';

import NotiflixMessage from 'shared/components/NotiflixMessage/NotiflixMessage';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      return result;
    } catch ({ response }) {
      NotiflixMessage({ type: 'failure', data: response.data.message });
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      NotiflixMessage({ type: 'failure', data: response.data.message });
      console.log(response.data.message);
      return rejectWithValue(response);
    }
  }
);

// /^(?=(?:[^A-Z]*[A-Z]){1,}[^A-Z]*$)(?=(?:[^a-z]*[a-z]){1,}[^a-z]*$)(?=(?:\\D*\\d){1,}\\D*$)[A-Za-z\\d]+/

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const editCurrent = createAsyncThunk(
  'auth',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.patchCurrent(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const googleAuth = createAsyncThunk(
  'auth/google',
  async (token, { rejectWithValue }) => {
    try {
      const result = await api.getCurrent(token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const fetchToggleFavoriteNotice = createAsyncThunk(
  'auth/toggle-favorite',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.toggleFavoriteNotice(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
