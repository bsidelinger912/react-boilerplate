/* eslint-disable camelcase */
import { useEffect, useState } from 'react';

export type DataItem = {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  openPrice: string;
  lowPrice: string;
  highPrice: string;
  lastPrice: string;
  volume: string;
  bidPrice: string;
  askPrice: string;
  at: number;
};

export type Data = DataItem[];

interface UseCoins {
  loading: boolean;
  error?: string;
  data?: Data;
}

const coinsApiUrl = 'https://api.wazirx.com/sapi/v1/tickers/24hr';

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
