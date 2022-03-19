import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

describe('App.tsx', () => {
  it('should render', () => {
    const { getByText } = render(<App />);
    getByText('React Boilerplate');
  });
});
