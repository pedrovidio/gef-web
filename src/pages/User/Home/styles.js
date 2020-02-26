import styled from 'styled-components';

export const Container = styled.div`
  .imgBackgroung img {
    max-height: 753px;
    max-width: 100%;
    z-index: 0;
  }
`;

export const ListaInformation = styled.div`
  height: 100%;

  .info {
    padding: 2% 20%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    img {
      max-width: 400px;
      max-height: 264px;
      width: auto;
      height: auto;
      border-radius: 25px;
    }
  }

  .info-left {
    background: #fff;
  }

  @media (max-width: 1200px) {
    .info {
      img {
        max-width: 300px;
        height: auto;
      }
    }
  }

  @media (max-width: 900px) {
    .info {
      padding: 20px;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #83658e;
  }

  p {
    max-width: 550px;
    font-size: 18px;
    margin: 30px 0;
  }

  a {
    color: #777777;
    font-size: 14px;
    margin-bottom: 30px;
  }

  .div-button {
    text-align: center;

    button {
      background: #fff;
      width: 200px;
      height: 50px;
      border-radius: 50px;
      font-size: 18px;
      font-family: Tempus Sans ITC;
      color: #83658e;
      border: 1px #83658e solid;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    button:hover {
      background: #83658e;
      color: #fff;
      transition: 0.7s;
    }
  }

  @media (max-width: 1380px) {
    h1 {
      font-size: 26px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      margin-top: 10px;
    }
  }
`;
