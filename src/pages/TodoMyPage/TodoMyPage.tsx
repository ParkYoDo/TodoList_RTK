import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoModifyUserModal from 'components/TodoModifyUserModal/TodoModifyUserModal';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import * as S from 'pages/TodoMyPage/TodoMyPageStyle';

function TodoMyPage() {
  const loginUser = useSelector((state: RootState) => state.loginUser);

  const [show, setShow] = useState({ open: false, name: '' });

  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    setShow({ open: true, name: e.currentTarget.dataset.id as string });
  };

  return (
    <S.MyPageBlock>
      <TodoModifyUserModal show={show} setShow={setShow} />
      <S.MyPageDiv>
        <h1>My Page :)</h1>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-3 me-auto text">
              <div className="fw-bold">Name</div>
              {loginUser.name}
            </div>
            <Badge className="badge" bg="primary" pill onClick={openModal} data-id="name">
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-3 me-auto text">
              <div className="fw-bold">E-mail</div>
              {loginUser.email}
            </div>
            <Badge className="badge" bg="primary" pill onClick={openModal} data-id="email">
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-3 me-auto text">
              <div className="fw-bold">Password</div>
              {loginUser.password}
            </div>
            <Badge className="badge" bg="primary" pill onClick={openModal} data-id="password">
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-3 me-auto text">
              <div className="fw-bold">Phone</div>
              {loginUser.phone}
            </div>
            <Badge className="badge" bg="primary" pill onClick={openModal} data-id="phone">
              수정
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </S.MyPageDiv>
    </S.MyPageBlock>
  );
}

export default TodoMyPage;
