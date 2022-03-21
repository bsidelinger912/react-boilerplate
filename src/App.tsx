import React from 'react';
import styled from 'styled-components';

import { spacing } from './cssNumbers';

const Page = styled.div`
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  max-width: ${spacing.pageWidth};
  margin: 0 auto;

  @media (max-width: ${spacing.pageWidth}) {
    padding: ${spacing.medium};
  }
`;

const Content = styled.div`

`;

const App: React.FC = () => (
  <Page>
    <Body>
      <h1>React Boilerplate</h1>
      <Content>
        A simple boilerplate to escape the bloat and unnecessary complexity of create-react-app
      </Content>
    </Body>
  </Page>

);

export default App;
