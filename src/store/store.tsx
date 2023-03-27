import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import users from 'store/users';
import isLogin from 'store/isLogin';
import loginUser from 'store/loginUser';
import todos from 'store/todos';

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

export type RootState = ReturnType<typeof reducers>;
