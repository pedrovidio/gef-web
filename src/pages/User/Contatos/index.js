import React from 'react';
// import { Link } from 'react-router-dom';

import { Container, ListaInformation, Contacts, Forms } from './styles';

import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

import cabecContatos from '../../../assets/images/cabecContatos.png';
import mail from '../../../assets/images/mail.png';
import pointer from '../../../assets/images/pointer.png';
import phone from '../../../assets/images/phone.png';

export default function Contatos() {
  return (
    <Container>
      <SideBar />
      <div className="imgBackgroung">
        <img src={cabecContatos} alt="backgroung" />
      </div>

      <ListaInformation>
        <div className="bodyList">
          <div className="col">
            <Contacts>
              <p>
                <img src={mail} alt="E-mail" />
                contato@sphinxbrasil.com
              </p>
              <p>
                <img src={phone} alt="Telefone" />
                +55 51 3477 3610
              </p>
              <p>
                <img src={pointer} alt="Endereco" />
                Rua Pindorama, 260 - Bairro São José - Canoas/RS CEP 92420-310
              </p>
            </Contacts>
            <Forms>
              <div>Nome</div>
              <div>
                <input type="text" />
              </div>
              <div>E-mail</div>
              <div>
                <input type="mail" />
              </div>
              <div>Telefone</div>
              <div>
                <input type="text" />
              </div>
              <div>Assunto</div>
              <div>
                <input type="text" />
              </div>
              <div>Mensagem</div>
              <div>
                <textarea name="" id="" cols="30" rows="10" />
              </div>
              <div />
              <div className="btn">
                <button className="buttonPurple" type="submit">
                  Enviar
                </button>
              </div>
            </Forms>
          </div>
        </div>
      </ListaInformation>

      <Footer />
    </Container>
  );
}
