import React from 'react';
import { act, render } from '@testing-library/react';
import CoinList from '..';
import {
  clearFetchMock, setFetchMock, sleep,
} from '../../__tests__/fixtures';
import { coinData } from '../../__tests__/data';

describe('Coinlist', () => {
  beforeAll(() => {
    setFetchMock(coinData);
  });

  afterAll(() => {
    clearFetchMock();
  });

  it('should render and load data', async () => {
    const { getByText, getAllByText, rerender } = render(<CoinList />);

    getByText('Loading...');

    await act(async () => {
      await sleep(100);
      rerender(<CoinList />);
    });

    getAllByText(coinData[0].symbol);
  });
});
