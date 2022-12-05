import React from 'react';
import styled from 'styled-components';
// import { Routes, Route } from 'react-router-dom';
// import TodoNav from './components/TodoNav';
import { useSelector, useDispatch } from 'react-redux';
// import TodoHome from './routes/TodoHome';
// import TodoSignUp from './routes/TodoSignUp';
// import TodoLogin from './routes/TodoLogin';
// import TodoMyPage from './routes/TodoMyPage';

const AppBlock = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #e9ecef;
  body,
  html {
    margin: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <AppBlock>
      {/* <TodoNav /> */}
      {/* <Routes>
        <Route path="/" element={<TodoHome />} />
        <Route path="/signup" element={<TodoSignUp />} />
        <Route path="/login" element={<TodoLogin />} />
        <Route path="/mypage" element={<TodoMyPage />} />
      </Routes> */}
    </AppBlock>
  );
}

export default App;
