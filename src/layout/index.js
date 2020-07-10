import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default Layout;
