import React from 'react';
import { Link } from 'react-router-dom';

import { ComeBack } from './styles';

import seta from '../../../../assets/images/voltar.png';

export default function toBack() {
  return (
    <ComeBack>
      <Link to="/">
        <img src={seta} alt="Voltar" />
      </Link>
    </ComeBack>
  );
}
