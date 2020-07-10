import React from 'react';

import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <p>
        Created by{' '}
        <a
          href="https://www.linkedin.com/in/mrlsk8/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Marcelo Lima
        </a>
      </p>
    </Container>
  );
}

export const Container = styled.footer`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
