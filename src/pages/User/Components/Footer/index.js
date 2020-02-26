import React from 'react';

import { Footer } from './styles';

import logoSb from '../../../../assets/images/logo.png';

export default function sideBar() {
  return (
    <Footer>
      <div className="footer">
        <img src={logoSb} alt="SPHINX Brasil" />
        <div>
          <h1>ACESSO RÁPIDO</h1>
          <p>Sobre o GEF</p>
          <p>Produtos</p>
        </div>
        <div>
          <h1>CONTATOS</h1>
          <p>contato@sphinxbrasil.com</p>
          <p>+55 51 3477 3610</p>
          <p>Rua Pindorama, 260 - Bairro São José - Canoas/RS CEP 92420-310</p>
        </div>
      </div>
    </Footer>
  );
}
