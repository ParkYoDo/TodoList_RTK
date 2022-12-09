import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const users = createSlice({
  name: 'users',
  initialState: [
    {
      id: 0,
      name: '박요도',
      email: 'rucasian@korea.com',
      password: 'Sd0708r7b7!',
      phone: '010-7773-0037',
    },
    {
      id: 1,
      name: '박기태',
      email: 'scarletdemon@naver.com',
      password: 'Sd0708r7b7!',
      phone: '010-7997-1988',
    },
  ],
  reducers: {
    userAdd(state, action) {
      return [...state, action.payload];
    },
    userModify(state, action) {
      return state.map((user) =>
        user.id === action.payload.loginUser.id
          ? { ...user, [action.payload.key]: action.payload.value }
          : user,
      );
    },
  },
});

const isLogin = createSlice({
  name: 'isLogin',
  initialState: false,
  reducers: {
    isLoginTrue(state) {
      return (state = true);
    },
    isLoginFalse(state) {
      return (state = false);
    },
  },
});

const loginUser = createSlice({
  name: 'loginUser',
  initialState: {
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
  },
  reducers: {
    loginUserSet(state, action) {
      return { ...action.payload };
    },
    loginUserModify(state, action) {
      return { ...state, [action.payload.key]: action.payload.value };
    },
  },
});

const todos = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 0,
      writer: '박요도',
      title: '첫번째 글',
      content: '안녕하세요',
      done: false,
    },
    {
      id: 1,
      writer: '박요도',
      title: '두번째 글',
      content: '안뇽',
      done: false,
    },
    {
      id: 2,
      writer: '박요도',
      title: '세번째 글',
      content: '안뇽ㅋ',
      done: false,
    },
    {
      id: 3,
      writer: '박요도',
      title: '네번째 글',
      content: '안뇽ㅋㅋ',
      done: false,
    },
    {
      id: 4,
      writer: '박기태',
      title: '첫번째 글',
      content: '안뇽ㅋㅋ',
      done: false,
    },
    {
      id: 5,
      writer: '박기태',
      title: '두번째 글',
      content: '안뇽ㅋㅋ',
      done: false,
    },
  ],
  reducers: {
    todoRemove(state, action) {
      return state.filter((todo) => todo.id !== parseInt(action.payload));
    },
    todoToggle(state, action) {
      return state.map((todo) =>
        todo.id === parseInt(action.payload)
          ? { ...todo, done: !todo.done }
          : todo,
      );
    },
    todoCreate(state, action) {
      return [...state, action.payload];
    },
    todoModify(state, action) {
      return state.map((todo) =>
        todo.writer === action.payload.loginUser.name
          ? { ...todo, writer: action.payload.writer }
          : todo,
      );
    },
  },
});

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
  // blacklist: ['users', 'todos', 'isLogin', 'loginUser'],
  whitelist: ['isLogin', 'loginUser', 'todos', 'users'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const { userAdd, userModify } = users.actions;
export const { isLoginTrue, isLoginFalse } = isLogin.actions;
export const { loginUserSet, loginUserModify } = loginUser.actions;
export const { todoRemove, todoToggle, todoCreate, todoModify } = todos.actions;
