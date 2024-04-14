import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesTeachers: [],
  },
  reducers: {
    addFavoriteTeacher: (state, action) => {
      state.favoritesTeachers = [...state.favoritesTeachers, action.payload];
      console.log('ДОБАВИЛ');
    },
    removeFavoriteTeacher: (state, action) => {
      console.log('TYTA');
      state.favoritesTeachers = state.favoritesTeachers.filter(
        teacher => teacher.id !== action.payload.id
      );
      console.log('УДАЛИЛ');
    },
  },
});

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favoritesTeachers'],
};

export const { addFavoriteTeacher, removeFavoriteTeacher } =
  favoritesSlice.actions;
export const favoritesReducer = persistReducer(
  favoritesConfig,
  favoritesSlice.reducer
);
