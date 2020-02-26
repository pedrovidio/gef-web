import React from 'react';
// import { Link } from 'react-router-dom';

import { Container, ListaInformation, Forms } from './styles';

import ToBack from '../Components/ToBack';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

import cabecCadastro from '../../../assets/images/cabecCadastro.png';

export default function Contatos() {
  return (
    <Container>
      <SideBar />
      <div className="imgBackgroung">
        <img src={cabecCadastro} alt="backgroung" />
      </div>

      <ListaInformation>
        <div className="bodyList">
          <ToBack />
          <div className="col">
            <Forms>
              <div>Nome</div>
              <div>
                <input type="text" />
              </div>
              <div>E-mail</div>
              <div>
                <input type="mail" />
              </div>
              <div>Confirmação do e-mail</div>
              <div>
                <input type="mail" />
              </div>
              <div>Password</div>
              <div>
                <input type="password" />
              </div>
              <div>Confirmação do password</div>
              <div>
                <input type="password" />
              </div>
              <div />
              <div className="buttonEnviar">
                <button type="submit">Cadastrar</button>
              </div>
            </Forms>
          </div>
        </div>
      </ListaInformation>

      <Footer />
    </Container>
  );
}
