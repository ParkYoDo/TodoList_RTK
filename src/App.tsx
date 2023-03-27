import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoNav from 'components/TodoNav/TodoNav';
import TodoHome from 'pages/TodoHome/TodoHome';
import TodoSignUp from 'pages/TodoSignUp/TodoSignUp';
import TodoLogin from 'pages/TodoLogin/TodoLogin';
import TodoMyPage from 'pages/TodoMyPage/TodoMyPage';

function App() {
  return (
    <>
      <TodoNav />
      <Routes>
        <Route path="/" element={<TodoHome />} />
        <Route path="/signup" element={<TodoSignUp />} />
        <Route path="/login" element={<TodoLogin />} />
        <Route path="/mypage" element={<TodoMyPage />} />
      </Routes>
    </>
  );
}

export default App;
