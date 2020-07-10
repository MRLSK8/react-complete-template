import React from 'react';

import styled from 'styled-components';

const Header = () => (
  <Container>
    <Title>Header</Title>
  </Container>
);

const Container = styled.header`
  width: 100%;
  height: 60px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1``;

export default Header;
