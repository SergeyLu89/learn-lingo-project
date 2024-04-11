import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      console.log('payload: ', payload);
      state.user = payload;
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
