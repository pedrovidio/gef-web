import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

import { Container, ListaInformation, Card } from './styles';

import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

class Produtos extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('packages');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      saleFormatted: formatPrice(product.sale),
    }));

    this.setState({ products: data });
  }

  handleAddProject = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_PROJECT',
      product,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <SideBar />
        <ListaInformation>
          <div className="bodyList">
            <div className="grid-cards">
              {products.map(product => (
                <Card
                  key={product.id}
                  onClick={() => this.handleAddProject(product)}
                >
                  <Link to="/descriptions">
                    <div
                      className="header-card"
                      style={{
                        backgroundImage: `url(${product.products.image.url})`,
                      }}
                    />
                    <div className="body-card">
                      <h1>{product.products.title}</h1>
                      <hr />
                      <p>{product.products.description.substr(0, 200)} ...</p>
                    </div>
                    <div className="footer-card">
                      <div>
                        {product.sale > 1 ? (
                          <>
                            <p className="price">{product.priceFormatted}</p>
                            <p className="sale">
                              Promoção {product.saleFormatted}
                            </p>
                          </>
                        ) : (
                          <p className="sale">{product.priceFormatted}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </ListaInformation>

        <Footer />
      </Container>
    );
  }
}

export default connect()(Produtos);
