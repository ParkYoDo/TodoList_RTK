import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    writer: '박요도',
    title: '첫번째 글',
    content: '안녕하세요',
    done: false,
  },
];

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoRemove(state, action) {
      return state.filter((todo) => todo.id !== parseInt(action.payload));
    },
    todoToggle(state, action) {
      return state.map((todo) => (todo.id === parseInt(action.payload) ? { ...todo, done: !todo.done } : todo));
    },
    todoCreate(state, action) {
      return [...state, action.payload];
    },
    todoModify(state, action) {
      return state.map((todo) =>
        todo.writer === action.payload.loginUser.name ? { ...todo, writer: action.payload.writer } : todo,
      );
    },
  },
});

export default todos;
export const { todoRemove, todoToggle, todoCreate, todoModify } = todos.actions;
