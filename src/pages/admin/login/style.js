import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;

  div {
    max-width: 500px;
    background: #fff;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    text-align: center;

    span {
      font-size: 20px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 300px;
    margin-bottom: 10px;
    border-radius: 25px;
    padding: 10px;
    border: 1px solid #707070;
  }
`;

export const SubmitButton = styled.button`
  width: 300px;
  border-radius: 25px;
  padding: 10px;
  border: 0;
  color: #fff;
  background: #84668f;
  font-size: 20px;
`;
