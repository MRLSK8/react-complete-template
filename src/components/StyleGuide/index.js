import React from 'react';

import styled from 'styled-components';

import theme from '../../styles/theme';

export default function StyleGuide() {
  return (
    <div>
      <Row>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Primary</h3>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Secondary</h3>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Accent</h3>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Contrast</h3>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Background</h3>
        </Square>
        <Square
          color="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Text</h3>
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
    </div>
  );
}

const Row = styled.div`
  display: flex;
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
`;
