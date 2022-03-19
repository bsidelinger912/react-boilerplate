/* eslint-disable camelcase */
import { useEffect, useState } from 'react';

interface Data {
  markets: {
    symbol: string;
    price: number;
  }[];
}

interface UseCoins {
  loading: boolean;
  error?: string;
  data?: Data;
}

const coinsApiUrl = 'https://www.cryptingup.com/api/markets';

export default function useCoins(): UseCoins {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Data>();

  const getData = async (): Promise<void> => {
    setLoading(true);
    try {
      const d = await fetch(coinsApiUrl).then((resp) => resp.json());

      setData(d);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, error, data };
}
