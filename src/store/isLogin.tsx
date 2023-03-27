import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isLogin = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    isLoginTrue() {
      return true;
    },
    isLoginFalse() {
      return false;
    },
  },
});

export default isLogin;
export const { isLoginTrue, isLoginFalse } = isLogin.actions;
