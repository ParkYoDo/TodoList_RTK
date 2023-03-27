import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  email: '',
  password: '',
  phone: '',
};

const loginUser = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    loginUserSet(state, action) {
      return { ...action.payload };
    },
    loginUserModify(state, action) {
      return { ...state, [action.payload.key]: action.payload.value };
    },
  },
});

export default loginUser;
export const { loginUserSet, loginUserModify } = loginUser.actions;
