import React from 'react';

import { Container, ListaInformation } from './styles';

import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

import cabecSobre from '../../../assets/images/cabecSobre.png';
import vantagens from '../../../assets/images/vantagens.png';
import exeTela from '../../../assets/images/exeTela.png';
import diferenciais from '../../../assets/images/diferenciais.png';

export default function Sobre() {
  return (
    <Container>
      <SideBar />

      <div className="imgBackgroung">
        <img src={cabecSobre} alt="backgroung" />
      </div>

      <ListaInformation>
        <div className="bodyList">
          <div className="description">
            <p>
              Nossas tecnologias proporcionam autonomia e flexibilidade ao
              usuário, permitindo que projetos sejam dinamizados, integrados e
              automatizados. Contemplam todas as etapas da pesquisa, da coleta à
              análise de dados.
            </p>
          </div>

          <div className="info info-left">
            <img src={vantagens} alt="Vantagens" />
            <ul>
              <li>Programação avançada do formulário</li>
              <li>Integração com aplicações mobile e web</li>
              <li>Relatórios personalizados</li>
              <li>Análises multivariadas </li>
            </ul>
          </div>

          <div className="telas">
            <img src={exeTela} alt="ExeTela" />
            <img src={exeTela} alt="ExeTela" />
            <img src={exeTela} alt="ExeTela" />
            <img src={exeTela} alt="ExeTela" />
          </div>

          <div className="info info-left">
            <img src={diferenciais} alt="Diferenciais" />
            <ul>
              <li>Programação avançada do formulário</li>
              <li>Integração com aplicações mobile e web</li>
              <li>Relatórios personalizados</li>
              <li>Análises multivariadas </li>
            </ul>
          </div>
        </div>
      </ListaInformation>

      <Footer />
    </Container>
  );
}
