import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  body {
    /*background: #191920;*/
    background: #EEEBEB;
    -webkit-font-smoothing: antiliased !important;
  }

  body, input, button {
    font-family: Segoe UI, Arial, Helvetica, sans-serif;
    color: #656365;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  .buttonPurple {
      background: #83658e;
      color: #fff;
      width: 200px;
      height: 35px;
      border-radius: 50px;
      font-size: 16px;
      border: 1px #83658e solid;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    .buttonPurple:hover {
      background: #fff;
      color: #83658e;
      transition: 0.7s;
    }

    .buttonWhite{
      background: #fff;
      color: #83658e;
      width: 200px;
      height: 35px;
      border-radius: 50px;
      font-size: 16px;
      border: 1px #83658e solid;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    .buttonWhite:hover {
      background: #83658e;
      color: #fff;
      transition: 0.7s;
    }
`;
