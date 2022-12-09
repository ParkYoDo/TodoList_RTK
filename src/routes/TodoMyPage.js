import React, { useState } from 'react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoModifyUserModal from '../components/TodoModifyUserModal';
import { useSelector } from 'react-redux';

const MyPageBlock = styled.div`
  width: 80%;
  margin: 20vh auto;

  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  padding: 3vh;

  background-color: white;

  h1 {
    font-size: 4vh;
    margin-bottom: 2vw;
  }
  .badge,
  .text {
    font-size: 1vw;
  }
`;

function TodoMyPage() {
  const loginUser = useSelector((state) => state.loginUser);

  const [show, setShow] = useState({ open: false, name: '' });

  const openModal = (e) => {
    setShow({ open: true, name: e.target.dataset.id });
  };

  return (
    <>
      <TodoModifyUserModal show={show} setShow={setShow} />
      <MyPageBlock>
        <h1>My Page :)</h1>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-3 me-auto text">
              <div className="fw-bold">Name</div>
              {loginUser.name}
            </div>
            <Badge
              className="badge"
              bg="primary"
              pill
              onClick={openModal}
              data-id="name"
            >
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-3 me-auto text">
              <div className="fw-bold">E-mail</div>
              {loginUser.email}
            </div>
            <Badge
              className="badge"
              bg="primary"
              pill
              onClick={openModal}
              data-id="email"
            >
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-3 me-auto text">
              <div className="fw-bold">Password</div>
              {loginUser.password}
            </div>
            <Badge
              className="badge"
              bg="primary"
              pill
              onClick={openModal}
              data-id="password"
            >
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-3 me-auto text">
              <div className="fw-bold">Phone</div>
              {loginUser.phone}
            </div>
            <Badge
              className="badge"
              bg="primary"
              pill
              onClick={openModal}
              data-id="phone"
            >
              수정
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </MyPageBlock>
    </>
  );
}

export default TodoMyPage;
