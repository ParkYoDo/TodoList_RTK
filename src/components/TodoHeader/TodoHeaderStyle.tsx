import styled from 'styled-components';

export const TodoHeadBlock = styled.div`
  padding: 30px 20px 0px 20px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    font-size: 24px;
    color: #343a40;
    font-weight: bold;
    text-align: center;
    margin-bottom: 32px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .day {
    color: #868e96;
    font-size: 14px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 14px;
  }
`;
