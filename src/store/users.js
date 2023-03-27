import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    name: '박요도',
    email: 'rucasian@korea.com',
    password: 'Sd0708r7b7!',
    phone: '010-7773-0037',
  },
];

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdd(state, action) {
      return [...state, action.payload];
    },
    userModify(state, action) {
      return state.map((user) =>
        user.id === action.payload.loginUser.id ? { ...user, [action.payload.key]: action.payload.value } : user,
      );
    },
  },
});

export default users;
export const { userAdd, userModify } = users.actions;
