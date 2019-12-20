import React from 'react';
import styled from 'styled-components/native';

import Product from '../components/Product';

const productImage = require('../assets/4904.jpg');

const Container = styled.View`
  flex: 1;
  background-color: #e9ecef;
`;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Product
          image={productImage}
          name="스팸김치볶음밥"
          price="1,000원"
        />
      </Container>
    );
  }
}
