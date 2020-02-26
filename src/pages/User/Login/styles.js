import styled from 'styled-components';

import registerBackground from '../../../assets/images/cadastro.png';

export const Container = styled.div`
  background: #fff;
  height: 100%;
`;

export const ListaInformation = styled.div`
  padding: 64px 0 0 0;
  height: 100%;

  .col {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 950px) {
    .col {
      margin-top: 61px;
    }
  }

  @media (max-width: 800px) {
    .col {
      height: auto;
      flex-direction: column;
    }
  }
`;

export const Register = styled.div`
  width: 50%;
  max-height: 1079px;

  background: url(${registerBackground}) no-repeat center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
    padding: 20px 0;
  }

  h1 {
    color: #fff;
    padding-bottom: 45px;
  }

  @media (max-height: 820px) {
    h1 {
      font-size: 24px;
    }
  }

  button {
    background: #fff;
    color: #83658e;
    width: 200px;
    height: 35px;
    border-radius: 50px;
    font-size: 16px;
    border: 1px #83658e solid;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }

  button:hover {
    background: #83658e;
    color: #fff;
    transition: 0.7s;
  }
`;

export const SignIn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;

  @media (max-width: 800px) {
    width: 100%;
    padding-top: 20px;
  }

  a {
    font-size: 14px;
  }

  .forms {
    width: 100%;
    padding: 0 10%;
    display: flex;
    align-items: center;
    flex-direction: column;

    div {
      margin-bottom: 15px;
    }

    .label {
      width: 200px;
    }

    input {
      border-radius: 25px;
      border: 1px #707070 solid;
      height: 30px;
      padding: 15px;
      width: 300px;
    }

    a,
    p,
    input {
      margin-bottom: 20px;
    }

    .buttonEnviar,
    a,
    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 24px;
    }
  }
`;
