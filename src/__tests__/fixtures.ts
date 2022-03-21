export function fetchMock<T>(data: T): Promise<{ json: () => Promise<T>}> {
  return new Promise((resolve) => setTimeout(() => {
    resolve({
      json: () => Promise.resolve(data),
    });
  }, 0));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function setFetchMock<T>(data: T): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window.fetch as any) = () => null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jest.spyOn(window, 'fetch').mockImplementation(() => fetchMock(data) as any);
}

export function clearFetchMock(): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window.fetch as any).mockClear();
}
