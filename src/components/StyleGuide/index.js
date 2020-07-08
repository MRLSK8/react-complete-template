import React from 'react';

import styled from 'styled-components';

import theme from '../../styles/theme';

export default function StyleGuide() {
  return (
    <Container>
      <Row>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>Primary</Title>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>Secondary</Title>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>Accent</Title>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>Contrast</Title>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>Background</Title>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>Text</Title>
        </Square>
      </Row>
      <Row>
        <Square color={theme.primaryLight} />
        <Square color={theme.secondaryLight} />
        <Square color={theme.accentLight} />
        <Square color={theme.contrastLight} />
        <Square color={theme.backgroundLight} />
        <Square color={theme.textLight} />
      </Row>
      <Row>
        <Square color={theme.primary} />
        <Square color={theme.secondary} />
        <Square color={theme.accent} />
        <Square color={theme.contrast} />
        <Square color={theme.background} />
        <Square color={theme.text} />
      </Row>
      <Row>
        <Square color={theme.primaryDark} />
        <Square color={theme.secondaryDark} />
        <Square color={theme.accentDark} />
        <Square color={theme.contrastDark} />
        <Square color={theme.backgroundDark} />
        <Square color={theme.textDark} />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
`;
