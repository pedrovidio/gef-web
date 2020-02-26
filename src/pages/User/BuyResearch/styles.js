import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const ListaInformation = styled.div`
  padding: 90px 120px 0 120px;
  margin-bottom: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 950px) {
    padding: 130px 0px 0 0px;
  }

  .bodyList {
    width: 80%;
    color: #656365;

    > div {
      padding: 30px;
    }

    p {
      text-align: center;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .bt {
      margin-top: 20px;
      text-align: center;
    }
  }

  @media (max-width: 1200px) {
    .bodyList {
      width: 100%;
    }
  }
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 0;

  .titleColmn {
    font-weight: bold;
    text-align: center;
    border-bottom: 1px #ddd solid;
    padding-bottom: 10px;
  }

  .titleRow {
    display: flex;
    align-items: center;
    color: #84668f;

    p {
      margin-left: 10px;
    }
  }

  .titleTotal {
    font-weight: bold;
    text-align: center;
    border-top: 1px #ddd solid;
    padding-top: 10px;
    color: green;
  }

  input {
    border-radius: 25px;
    border: 1px #707070 solid;
    width: 150px;
    height: 30px;
    padding: 15px;
    text-align: center;
  }

  input[type='checkbox'] {
    height: 20px;
  }

  .inputForm {
    text-align: center;
  }
`;
