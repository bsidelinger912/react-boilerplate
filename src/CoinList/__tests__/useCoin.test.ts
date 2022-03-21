import { renderHook, act } from '@testing-library/react-hooks';
import { coinData } from '../../__tests__/data';
import { setFetchMock, sleep } from '../../__tests__/fixtures';
import useCoins from '../useCoins';

describe('renderHook', () => {
  beforeAll(() => {
    setFetchMock(coinData);
  });

  afterAll(() => {
    (window.fetch as any).mockClear();
  });

  it('should fetch data on mount', async () => {
    const { result, rerender } = renderHook(() => useCoins());

    expect(result.current.loading).toBeTruthy();

    await act(async () => {
      await sleep(100);
      rerender();
    });

    expect(result.current.data).toEqual(coinData);
  });
});
