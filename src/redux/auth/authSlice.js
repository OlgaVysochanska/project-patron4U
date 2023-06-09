import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  login,
  current,
  logout,
  fetchToggleFavoriteNotice,
  editCurrent,
  googleAuth,
} from './authOperations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  pets: [],
  isRegistered: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegistered(state, { payload }) {
      state.isRegistered = payload;
    },
    togglePayload(state, { payload }) {
      const index = state.user.favoriteNotice.indexOf(payload);
      if (index !== -1) {
        state.user.favoriteNotice.splice(index, 1);
      } else {
        state.user.favoriteNotice.push(payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, token, pets } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
        state.pets = pets;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(googleAuth.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleAuth.fulfilled, (state, { payload }) => {
        const { user, pets, token } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
        state.pets = pets;
      })
      .addCase(googleAuth.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(current.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        const { user, token, pets } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
        state.pets = pets;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
        state.isRegistered = false;
        state.pets = {};
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchToggleFavoriteNotice.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToggleFavoriteNotice.fulfilled, (state, { payload }) => {
        state.loading = false;
        authSlice.caseReducers.togglePayload(state, { payload });
      })
      .addCase(fetchToggleFavoriteNotice.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(editCurrent.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCurrent.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isLogin = true;
      })
      .addCase(editCurrent.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setRegistered } = authSlice.actions;
export default authSlice.reducer;
