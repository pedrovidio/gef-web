import React from 'react';
import { Link } from 'react-router-dom';

import { SideBar } from './styles';

import logoSb from '../../../../assets/images/logo.png';

export default function sideBar() {
  return (
    <SideBar>
      <div className="menu">
        <Link to="/">
          <span>GESTÃO ELETRÔNICA DE FEEDBACK</span>
        </Link>
        <ul>
          <li>
            <Link to="/sobre">SOBRE O GEF</Link>
          </li>
          <li>
            <Link to="/produtos">PRODUTOS</Link>
          </li>
          <li>
            <Link to="/contatos">CONTATOS</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
        <Link to="/">
          <img src={logoSb} alt="SPHINX Brasil" />
        </Link>
      </div>
    </SideBar>
  );
}
