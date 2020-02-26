import styled from 'styled-components';

export const SideBar = styled.div`
  .menu {
    width: 100%;
    padding: 10px 40px;
    background: rgba(132, 102, 143, 0.8);
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    span {
      font-size: 26px;
    }

    span,
    ul {
      font-family: Tempus Sans ITC;
      color: #fff;
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      list-style: none;
    }

    ul li {
      margin-right: 50px;
    }

    ul li a {
      color: #fff;
      text-decoration: none;
    }

    ul li a:hover {
      text-decoration: underline;
    }

    img {
      max-width: 200px;
    }
  }

  @media (max-width: 1300px) {
    .menu {
      span {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 1200px) {
    .menu {
      span {
        font-size: 16px;
      }

      ul {
        font-size: 16px;
      }

      ul li {
        margin-right: 20px;
      }
    }
  }

  @media (max-width: 1000px) {
    .menu {
      span {
        font-size: 14px;
      }

      ul {
        font-size: 14px;
      }

      ul li {
        margin-right: 20px;
      }
    }
  }

  @media (max-width: 950px) {
    .menu {
      flex-direction: column;

      span {
        font-size: 18px;
      }

      ul {
        margin: 10px 0;
      }
    }
  }

  @media (max-width: 450px) {
    .menu {
      img {
        order: 1;
      }

      span {
        display: none;
      }

      ul {
        flex-direction: column;
        align-items: flex-start;
        order: 2;
      }
    }
  }
`;
