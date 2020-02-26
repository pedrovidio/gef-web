import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const ListaInformation = styled.div`
  .bodyList {
    padding: 90px 140px;
  }

  .grid-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

  > div:hover{
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 1500px){
    .grid-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 1200px){
    .grid-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 900px){
    .grid-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 350px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background: #fff;

  a {
    color: #454446;
  }

  @media (max-width: 900px) {
    margin: 10px;
  }

  .header-card {
    background: no-repeat center;
    background-size: cover;
    height: 250px;
    border-radius: 15px 15px 0 0;
  }

  .body-card {
    padding: 15px;

    h1 {
      text-align: center;
      font-size: 18px;
      color: #6d3975;
    }

    hr {
      border: 1px solid #eee;
    }

    p {
      line-height: 25px;
    }
  }

  .footer-card {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      text-align: right;
      color: #eb1d2b;
      text-decoration: line-through;
    }

    .sale {
      text-align: right;
      color: #3f7539;
    }

    button {
      padding: 5px;
      border: 0;
      background: #fff;
    }

    button:hover {
      border-radius: 5px;
      background: rgba(132, 102, 143, 0.2);
      transition: 0.3s;
    }

    button img {
      width: 16px;
      height: 16px;
    }
  }
`;
