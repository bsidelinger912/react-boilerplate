/**
 * @class CoinList
 * @description
 */

import React from 'react';
import Coin from './Coin';
import useCoins from './useCoins';

const CoinList: React.FC = () => {
  const { error, data } = useCoins();

  if (data) {
    return (
      <div>
        {data.markets.map((market, index) => <Coin key={`${market.symbol}-${index}`} symbol={market.symbol} />)}
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div>Loading...</div>
  );
};

export default CoinList;
