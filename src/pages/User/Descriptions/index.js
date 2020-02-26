import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';
import { FaClipboard, FaChartBar } from 'react-icons/fa';
import { Container, ListaInformation } from './styles';

import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

function Descriptions({ project }) {
  console.log(project);
  return (
    <Container>
      <SideBar />
      <ListaInformation>
        <div className="bodyList">
          <h1>{project[0].products.title}</h1>
          <p>{project[0].products.description}</p>
          <div className="bts">
            <div>
              <Link to="/">
                <FaClipboard />
                <p>Acesse o formulário</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <FaChartBar />
                <p>Acesse o painel de acompanhamento</p>
              </Link>
            </div>
          </div>
          <div className="sub">
            <Link to="/buyresearchs">
              <button className="buttonWhite" type="submit">
                <MdAdd /> Adquirir
              </button>
            </Link>
          </div>
        </div>
      </ListaInformation>
      <Footer />
    </Container>
  );
}

export default connect(state => ({
  project: state.project,
}))(Descriptions);
