import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { ReducerName } from '../constant';
import { AuthReducer } from './auth';
import { ThemeReducer } from './theme';
import { UserReducer } from './user';
import { VideoReducer } from './video';

const combinationReducer = combineReducers({
  ThemeReducer: ThemeReducer,
  AuthReducer: AuthReducer,
  UserReducer: UserReducer,
  VideoReducer: VideoReducer,
});

interface persistConfigType {
  key: string;
  storage: AsyncStorageStatic;
  blacklist: string[];
  whitelist: string[];
}

/**
 * the configuring persistConfig object for ReduxStorage.
 * @type {object}
 * @property {string} key - The key to use for persisting the state.
 * @property {object} storage - The storage object to use for persisting the state.
 * @property {string[]} whitelist - The list of reducers of persists.
 */
const persistConfig: persistConfigType = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [ReducerName.userReducer, ReducerName.videoReducer],
  whitelist: [ReducerName.themeReducer, ReducerName.authReducer],
};

/**
 * Creates a persisted reducer that can be used in a Redux store.
 * @param {PersistConfig} persistConfig - The configuration object for the persisted reducer.
 * @param {Reducer} reducer - The reducer to be persisted
 * @returns {Reducer} - The persisted reducer.
 */
const persistedReducer = persistReducer(persistConfig, combinationReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/**
 * Persits the store to local storage.
 * @param {Store} store - The redux store.
 * @returns None
 */
export const persistor = persistStore(store);

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
