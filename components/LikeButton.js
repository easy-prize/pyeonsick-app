import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as OutlineHeart } from '@fortawesome/free-regular-svg-icons'

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8;
`;

const Likes = styled.Text`
  color: #6A32FE;
  font-size: 25;
  font-family: 'NotoSansKR-Regular';
  line-height: ${1.4 * 25};
  margin-left: 8;
`;

const LikeButton = ({ isLike = false, likes = 0 }) => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={ isLike ? SolidHeart : OutlineHeart }
        color="#6A32FE"
        size={28}
      />
      <Likes>
        {likes}
      </Likes>
    </Container>
  );
};

export default LikeButton;
