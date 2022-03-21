import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';
import { heightLabel, widthLabel } from '../text';

describe('App.tsx', () => {
  it('should render', () => {
    const { getByText } = render(<App />);
    getByText('React Boilerplate');
  });

  it('should have controls for width and height', () => {
    const { getByLabelText } = render(<App />);

    const widthInput = getByLabelText(widthLabel);
    const heightInput = getByLabelText(heightLabel);
  });

  it.todo('should should have a control for images per page');
});
