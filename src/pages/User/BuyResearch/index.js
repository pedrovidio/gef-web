import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MdMail } from 'react-icons/md';
import { FaCheck, FaSms, FaWhatsapp } from 'react-icons/fa';
import { formatPrice } from '../../../util/format';
import { Container, ListaInformation, Table } from './styles';

import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

function Block(props) {
  if (props.sale > 0) {
    return (
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.change}
        disabled
      />
    );
  }

  return (
    <input
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.change}
    />
  );
}

function Calc(props) {
  if (props.sale > 0) {
    return (
      <>
        <span>{formatPrice(props.sale)}</span>
        <input
          name="total"
          type="hidden"
          value={props.sale}
          onChange={props.change}
        />
      </>
    );
  }

  return (
    <>
      <span>{formatPrice(props.total)}</span>
      <input
        name="total"
        type="hidden"
        value={props.total}
        onChange={props.change}
      />
    </>
  );
}

class BuyResearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCredit: '',
      valueMail: '',
      valueSms: '',
      valueWhatsapp: '',
      checkboxCredit: '',
      checkboxMail: '',
      checkboxSms: '',
      checkboxWhatsapp: '',
      priceCredit: '',
      priceMail: '',
      priceSms: '',
      priceWhatsapp: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const { project } = this.props;
    this.setState({
      valueCredit: project[0].credit,
      valueMail: project[0].email,
      valueSms: project[0].sms,
      valueWhatsapp: project[0].whatsapp,
      priceCredit: project[0].price_credit,
      priceMail: project[0].price_email,
      priceSms: project[0].price_sms,
      priceWhatsapp: project[0].price_whatsapp,
    });
  }

  handleAddProject = product => {
    const { dispatch } = this.props;
    product = this.state;

    dispatch({
      type: 'BUY_PROJECT',
      product,
    });
  };

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { project } = this.props;

    return (
      <Container>
        <SideBar />
        <ListaInformation>
          <div className="bodyList">
            <h1>{project[0].products.title}</h1>

            <p>
              Configure a sua pesquisa. Altere a quantidade de créditos conforme
              a sua necessidade!
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
                  <Block
                    name="valueCredit"
                    type="text"
                    value={this.state.valueCredit}
                    change={this.handleInputChange}
                    sale={project[0].sale}
                  />
                </div>
                <div className="inputForm">
                  <input
                    name="priceCredit"
                    type="text"
                    value={project[0].price_credit}
                    disabled
                  />
                </div>
                <div className="inputForm">
                  <Block
                    name="checkboxCredit"
                    type="checkbox"
                    value={this.state.valueCredit}
                    change={this.handleInputChange}
                    sale={project[0].sale}
                  />
                </div>

                <div className="titleRow">
                  <MdMail />
                  <p>E-mail</p>
                </div>
                <div className="inputForm">
                  <Block
                    name="valueMail"
                    type="text"
                    value={this.state.valueMail}
                    change={this.handleInputChange}
                    sale={project[0].sale}
                  />
                </div>
                <div className="inputForm">
                  <input
                    name="priceMail"
                    type="text"
                    value={project[0].price_email}
                    disabled
                  />
                </div>
                <div className="inputForm">
                  <Block
                    name="checkboxMail"
                    type="checkbox"
                    value={this.state.valueCredit}
                    change={this.handleInputChange}
                    sale={project[0].sale}
                  />
                </div>

                <div className="titleRow">
                  <FaSms />
                  <p>SMS</p>
                </div>
                <div className="inputForm">
                  <Block
                    name="valueSms"
                    type="text"
                    value={this.state.valueSms}
                    change={this.handleInputChange}
                    sale={project[0].sale}
                  />
                </div>
                <div className="inputForm">
                  <input
                    name="priceSms"
                    type="text"
                    value={project[0].price_sms}
                    disabled
                  />
                </div>
                <div className="inputForm">
                  <Block
                    name="checkboxSms"
                    type="checkbox"
                    value={this.state.valueCredit}
                    change={this.handleInputChange}
                    sale={project[0].sale}
                  />
                </div>

                <div className="titleRow">
                  <FaWhatsapp />
                  <p>Whatsapp</p>
                </div>
                <div className="inputForm">
                  <Block
                    name="valueWhatsapp"
                    type="text"
                    value={this.state.valueWhatsapp}
                    change={this.handleInputChange}
                    sale={project[0].sale}
                  />
                </div>
                <div className="inputForm">
                  <input
                    name="priceWhatsapp"
                    type="text"
                    value={project[0].price_whatsapp}
                    disabled
                  />
                </div>
                <div className="inputForm">
                  <Block
                    name="checkboxWhatsapp"
                    type="checkbox"
                    value={this.state.valueCredit}
                    change={this.handleInputChange}
                    sale={project[0].sale}
                  />
                </div>

                <div className="titleTotal" />
                <div className="titleTotal">Total:</div>
                <div className="titleTotal inputForm">
                  <Calc
                    total={
                      this.state.valueCredit * project[0].price_credit +
                      this.state.valueMail * project[0].price_email +
                      this.state.valueSms * project[0].price_sms +
                      this.state.valueWhatsapp * project[0].price_whatsapp
                    }
                    sale={project[0].sale}
                    change={this.handleInputChange}
                  />
                </div>
                <div className="titleTotal" />
              </Table>
              <div className="bt">
                <button
                  className="buttonPurple"
                  type="button"
                  onClick={this.handleAddProject}
                >
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
