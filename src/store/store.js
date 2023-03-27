import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import users from './users';
import isLogin from './isLogin';
import loginUser from './loginUser';
import todos from './todos';

const reducers = combineReducers({
  users: users.reducer,
  isLogin: isLogin.reducer,
  loginUser: loginUser.reducer,
  todos: todos.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  //   blacklist: ['users', 'todos', 'isLogin', 'loginUser'],
  whitelist: ['isLogin', 'loginUser', 'todos', 'users'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// export type RootState = ReturnType<typeof reducers>;
