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

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    p {
      line-height: 2;
    }

    .bts {
      margin: 30px 80px;
      display: flex;
      justify-content: space-between;

      > div a {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          margin-left: 10px;
        }
      }
    }

    @media (max-width: 950px) {
      .bts {
        flex-direction: column;
      }
    }

    .sub,
    .buttonWhite {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
