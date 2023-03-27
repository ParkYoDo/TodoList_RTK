import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isLogin = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    isLoginTrue(state) {
      return (state = true);
    },
    isLoginFalse(state) {
      return (state = false);
    },
  },
});

export default isLogin;
export const { isLoginTrue, isLoginFalse } = isLogin.actions;
