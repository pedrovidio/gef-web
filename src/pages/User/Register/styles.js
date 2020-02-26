import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;

  .imgBackgroung img {
    max-height: 753px;
    max-width: 100%;
    z-index: 0;
  }
`;

export const ListaInformation = styled.div`
  .bodyList {
    padding: 20px 140px;
  }

  .col {
    display: flex;
    justify-content: center;
  }
`;

export const Forms = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 5px;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  div {
    margin-bottom: 10px;
  }

  input {
    border-radius: 25px;
    border: 1px #707070 solid;
    width: 350px;
    height: 30px;
    padding: 15px;
  }

  textarea {
    padding: 15px;
    border-radius: 25px;
    border: 1px #707070 solid;
    width: 100%;
  }

  .buttonEnviar {
    text-align: center;
  }

  button {
    background: #83658e;
    color: #fff;
    width: 200px;
    height: 35px;
    border-radius: 50px;
    font-size: 16px;
    border: 1px #83658e solid;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }

  button:hover {
    background: #fff;
    color: #83658e;
    transition: 0.7s;
  }
`;
