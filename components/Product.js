import React from 'react';
import styled from 'styled-components/native';

import LikeButton from './LikeButton';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.Image`
  width: 140;
  height: 140;
  border-width: 5px;
  border-color: #DFE6ED;
  border-radius: 70;
`;

const Title = styled.Text`
  margin-top: 10;
  font-size: 25;
  font-family: 'NotoSansKR-Black';
  line-height: ${1.4 * 25};
  color: #282828;
`;

const Price = styled.Text`
  margin-top: 5;
  font-size: 20;
  font-family: 'NotoSansKR-Bold';
  line-height: ${1.4 * 20};
  color: #6F6C89;
`;

const Product = ({ image, name, price }) => {
  return (
    <Container>
      <Image source={image} />
      <Title>{name}</Title>
      <Price>{price}</Price>
      <LikeButton
        isLike={true}
        likes={174}
      />
    </Container>
  );
};

export default Product;
