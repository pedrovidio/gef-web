import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Login from './pages/admin/login';
// import Surveys from './pages/admin/surveys';

import Home from './pages/User/Home';
import Sobre from './pages/User/Sobre';
import Produtos from './pages/User/Produtos';
import Contatos from './pages/User/Contatos';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import Descriptions from './pages/User/Descriptions';
import BuyResearch from './pages/User/BuyResearch';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/contatos" component={Contatos} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/descriptions" component={Descriptions} />
      <Route path="/buyresearchs" component={BuyResearch} />
    </Switch>
  );
}
