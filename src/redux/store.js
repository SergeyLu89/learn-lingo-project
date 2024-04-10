import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { userReducer } from './user/userReudcer';
// import { advertsReducer } from './adverts/advertsReduser';
// import { favoritesReducer } from './favoritesAdverts/favoritesAdvertsReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // adverts: advertsReducer,
    // favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
