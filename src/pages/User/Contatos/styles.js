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

  @media (max-width: 1020px) {
    .col {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 900px) {
    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 820px) {
    .col {
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const Contacts = styled.div`
  margin: 0 100px 50px 0;

  p {
    img {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Forms = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 5px;

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

  .btn {
    text-align: center;
  }
`;
