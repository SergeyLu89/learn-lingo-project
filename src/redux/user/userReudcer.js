import { createSlice } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: null,
      email: null,
      token: null,
      id: null,
    },
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.token = payload.token;
      state.user.id = payload.id;
      state.isLoggedIn = true;
    },
    removeUser: state => {
      state.user.name = null;
      state.user.email = null;
      state.user.token = null;
      state.user.id = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
