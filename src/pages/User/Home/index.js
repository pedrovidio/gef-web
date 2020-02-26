import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ListaInformation, Description } from './styles';

import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

import imgHomeHeader from '../../../assets/images/imgHomeHeader.png';
import img1 from '../../../assets/images/financial-2860753_1920.jpg';
import img2 from '../../../assets/images/SMSAD.png';

export default function Home() {
  return (
    <Container>
      <SideBar />
      <div className="imgBackgroung">
        <img src={imgHomeHeader} alt="backgroung" />
      </div>

      <ListaInformation>
        <div className="info info-right">
          <img src={img1} alt="imagem1" />

          <Description>
            <h1>É ESCOLHER E SAIR USANDO</h1>
            <p>
              Com pesquisas preconcebidas e com a possibilidade de personalizar
              até 5 perguntas
            </p>
            <Link to="/">Saiba mais</Link>
            <div className="div-button">
              <Link to="/produtos">
                <button type="button">COMECE AGORA</button>
              </Link>
            </div>
          </Description>
        </div>

        <div className="info info-left">
          <Description>
            <h1>DIVERSAS FORMAS DE COMUNICAÇÃO</h1>
            <p>
              Com pesquisas preconcebidas e com a possibilidade de personalizar
              até 5 perguntas
            </p>
            <Link to="/">Saiba mais</Link>
            <div className="div-button">
              <Link to="/produtos">
                <button type="button">COMECE AGORA</button>
              </Link>
            </div>
          </Description>
          <img src={img2} alt="imagem2" />
        </div>

        <div className="info info-right">
          <img src={img2} alt="imagem2" />
          <Description>
            <h1>DIVERSAS FORMAS DE COMUNICAÇÃO</h1>
            <p>
              Com pesquisas preconcebidas e com a possibilidade de personalizar
              até 5 perguntas
            </p>
            <Link to="/">Saiba mais</Link>
            <div className="div-button">
              <Link to="/produtos">
                <button type="button">COMECE AGORA</button>
              </Link>
            </div>
          </Description>
        </div>
      </ListaInformation>

      <Footer />
    </Container>
  );
}
