import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      const { user } = payload;
      const filteredUser = { ...user, reloadListener: undefined };
      state.user = filteredUser;
      state.isLoggedIn = true;
    },
    removeUser: state => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
