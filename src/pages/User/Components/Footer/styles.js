import styled from 'styled-components';

export const Footer = styled.div`
  background: rgba(132, 102, 143, 0.2);
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    max-width: 900px;

    img {
      width: 200px;
      height: 40px;
    }

    div {
      color: #6d3975;
      h1 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
        margin: 10px 0;
      }
    }
  }

  @media (max-width: 700px) {
    .footer {
      display: flex;
      flex-direction: column;

      img {
        order: 2;
      }

      div {
        margin-bottom: 20px;
        order: 1;
      }
    }
  }
`;
