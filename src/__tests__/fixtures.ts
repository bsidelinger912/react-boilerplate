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
