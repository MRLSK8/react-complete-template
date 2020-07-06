import React from 'react';

import styled from 'styled-components';

import theme from '~/styles/theme';

export default function StyleGuide() {
  return (
    <div>
      <Row>
        <Square color={theme.colors.primaryLight} />
        <Square color={theme.colors.secondaryLight} />
        <Square color={theme.colors.accentLight} />
        <Square color={theme.colors.contrastLight} />
      </Row>
      <Row>
        <Square color={theme.colors.primary} />
        <Square color={theme.colors.secondary} />
        <Square color={theme.colors.accent} />
        <Square color={theme.colors.contrast} />
      </Row>
      <Row>
        <Square color={theme.colors.primaryDark} />
        <Square color={theme.colors.secondaryDark} />
        <Square color={theme.colors.accentDark} />
        <Square color={theme.colors.contrastDark} />
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
