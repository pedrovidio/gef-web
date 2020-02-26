import React, { Component } from 'react';

import { Container, Form, SubmitButton } from './style';

import * as Yup from 'yup';

// import api from '../../../services/api';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = e => {
    const state = { ...this.state };
    const campo = e.target.name;
    state[campo] = e.target.value;

    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.email, this.state.password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <div>
          <span>
            Preencha os campos abaixo para acessar o ambiente de administração
          </span>

          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />

            <SubmitButton>Login</SubmitButton>
          </Form>
        </div>
      </Container>
    );
  }
}
