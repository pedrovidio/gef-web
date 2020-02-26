import styled from 'styled-components';

export const Container = styled.div`
  .imgBackgroung img {
    max-height: 753px;
    max-width: 100%;
    z-index: 0;
  }
`;

export const ListaInformation = styled.div`
  .bodyList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .description {
      padding: 20px 140px;
      p {
        margin-top: 20px;
        font-size: 18px;
      }
    }

    .info {
      width: 100%;
      padding: 2% 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #6d3975;
      font-size: 18px;

      img {
        width: auto;
      }
    }
  }

  .telas {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      margin: 10px 20px;
    }
  }

  .info-left {
    background: #fff;
  }
`;
