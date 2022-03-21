import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { spacing } from './cssNumbers';
import List from './List';
import Settings from './Settings';

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

interface LocalStorageSettings {
  width: number;
  height: number;
  imagesPerPage: number;
}

function getFromLocalStorage(): LocalStorageSettings | undefined {
  return undefined;
}

function setToLocalStorage(data: LocalStorageSettings): void {
  return undefined;
}

const App: React.FC = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [imagesPerPage, setImagesPerPage] = useState(20);

  const hasRendered = useRef(false);

  // did mount
  useEffect(() => {
    hasRendered.current = true;

    const savedData = getFromLocalStorage();
    if (savedData) {
      setWidth(savedData.width);
      setHeight(savedData.height);
      setImagesPerPage(savedData.imagesPerPage);
    }
  }, []);

  // did update
  useEffect(() => {
    if (hasRendered.current) {
      setToLocalStorage({
        width,
        height,
        imagesPerPage,
      });
    }
  }, [width, height, imagesPerPage]);

  return (
    <Page>
      <Body>
        <h1>React Boilerplate</h1>
        <div>
          <Settings setHeight={setHeight} setWidth={setWidth} setImagesPerPage={setImagesPerPage} />
        </div>
        <List width={width} height={height} imagesPerPage={imagesPerPage} />
      </Body>
    </Page>

  );
};

export default App;
