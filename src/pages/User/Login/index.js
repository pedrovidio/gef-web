import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ListaInformation, Register, SignIn } from './styles';

import SideBar from '../Components/SideBar';

export default function Contatos() {
  return (
    <Container>
      <SideBar />
      <ListaInformation>
        <div className="col">
          <Register>
            <h1>Ainda não possui cadastro?</h1>
            <h1>Cadastre-se agora!</h1>
            <div className="buttonCadastrar">
              <Link to="/register">
                <button type="button">Efetuar cadastro</button>
              </Link>
            </div>
          </Register>
          <SignIn>
            <div className="forms">
              <h1>Que bom que retornou!</h1>
              <p>Faça login na sua conta</p>
              <input type="mail" placeholder="E-mail" />
              <input type="password" placeholder="password" />
              <div>
                <button className="buttonPurple" type="submit">
                  Entrar
                </button>
              </div>
            </div>
            <Link to="/">Esqueceu seu password?</Link>
          </SignIn>
        </div>
      </ListaInformation>
    </Container>
  );
}
