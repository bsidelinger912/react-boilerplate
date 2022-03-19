import React from 'react';
import { act, render } from '@testing-library/react';
import CoinList from '..';
import { fetchMock, sleep } from '../../__tests__/fixtures';
import { coinData } from '../../__tests__/data';

describe('Coinlist', () => {
  beforeAll(() => {
    (window.fetch as any) = () => null;
    jest.spyOn(window, 'fetch').mockImplementation(() => fetchMock(coinData) as any);
  });

  afterAll(() => {
    (window.fetch as any).mockClear();
  });

  it('should render and load data', async () => {
    const { getByText, getAllByText, rerender } = render(<CoinList />);

    getByText('Loading...');

    await act(async () => {
      await sleep(100);
      rerender(<CoinList />);
    });

    getAllByText(coinData.markets[0].symbol);
  });
});
