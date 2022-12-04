import { configureStore, createSlice } from '@reduxjs/toolkit';

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
      state += action.payload;
    },
    userModify(state) {
      return state;
    },
  },
});

const isLogin = createSlice({
  name: 'isLogin',
  initialState: false,
  reducers: {
    isLoginTrue(state) {
      return state;
    },
    isLoginFalse(state) {
      return state;
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
    loginUserSet(state) {
      return state;
    },
    loginUserModify(state) {
      return state;
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
    todoRemove(state) {
      return state;
    },
    todoToggle(state) {
      return state;
    },
    todoCreate(state) {
      return state;
    },
    todoModify(state) {
      return state;
    },
  },
});

export default configureStore({
  reducer: {
    users: users.reducer,
    isLogin: isLogin.reducer,
    loginUser: loginUser.reducer,
    todos: todos.reducer,
  },
});

export const { userAdd, userModify } = users.actions;
export const { isLoginTrue, isLoginFalse } = isLogin.actions;
export const { loginUserSet, loginUserModify } = loginUser.actions;
export const { todoRemove, todoToggle, todoCreate, todoModify } = todos.actions;

// import {useSelector} from 'react-redux'
// import {useDispatch} from 'react-redux'
// import {changeName } from './../store.js'
// let a = useSelector ((state)=> {state.user})
