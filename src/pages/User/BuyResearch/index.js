import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdMail } from 'react-icons/md';
import { FaCheck, FaSms, FaWhatsapp } from 'react-icons/fa';
import { Container, ListaInformation, Table } from './styles';

import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

class BuyResearch extends Component {
  state = {
    products: [],
  };

  render() {
    const { project } = this.props;

    return (
      <Container>
        <SideBar />
        <ListaInformation>
          <div className="bodyList">
            <h1>{project[0].products.title}</h1>
            <p>
              Configure a sua pesquisa. Altere a quantidade de créditos que
              precisará utilizar!
            </p>
            <div>
              <Table>
                <div className="titleColmn">Tipo de crédito</div>
                <div className="titleColmn">Quantidades</div>
                <div className="titleColmn">R$</div>
                <div className="titleColmn">Não limitar</div>

                <div className="titleRow">
                  <FaCheck />
                  <p>Respostas</p>
                </div>
                <div className="inputForm">
                  <input type="text" value={project[0].credit} />
                </div>
                <div className="inputForm">
                  <input type="text" value={project[0].price_credit} disabled />
                </div>
                <div className="inputForm">
                  <input type="checkbox" />
                </div>

                <div className="titleRow">
                  <MdMail />
                  <p>E-mail</p>
                </div>
                <div className="inputForm">
                  <input type="text" value={project[0].email} />
                </div>
                <div className="inputForm">
                  <input type="text" value={project[0].price_email} disabled />
                </div>
                <div className="inputForm">
                  <input type="checkbox" />
                </div>

                <div className="titleRow">
                  <FaSms />
                  <p>SMS</p>
                </div>
                <div className="inputForm">
                  <input type="text" value={project[0].sms} />
                </div>
                <div className="inputForm">
                  <input type="text" value={project[0].price_sms} disabled />
                </div>
                <div className="inputForm">
                  <input type="checkbox" />
                </div>

                <div className="titleRow">
                  <FaWhatsapp />
                  <p>Whatsapp</p>
                </div>
                <div className="inputForm">
                  <input type="text" value={project[0].whatsapp} />
                </div>
                <div className="inputForm">
                  <input
                    type="text"
                    value={project[0].price_whatsapp}
                    disabled
                  />
                </div>
                <div className="inputForm">
                  <input type="checkbox" />
                </div>

                <div className="titleTotal" />
                <div className="titleTotal">Total:</div>
                <div className="titleTotal inputForm">
                  {project[0].credit * project[0].price_credit +
                    project[0].email * project[0].price_email +
                    project[0].sms * project[0].price_sms +
                    project[0].whatsapp * project[0].price_whatsapp}
                </div>
                <div className="titleTotal" />
              </Table>
              <div className="bt">
                <button className="buttonPurple" type="submit">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </ListaInformation>
        <Footer />
      </Container>
    );
  }
}

export default connect(state => ({
  project: state.project,
}))(BuyResearch);
