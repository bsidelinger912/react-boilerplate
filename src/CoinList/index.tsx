/**
 * @class CoinList
 * @description
 */

import React from 'react';
import styled from 'styled-components';

import Coin from './Coin';
import useCoins from './useCoins';

const CoinsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CoinList: React.FC = () => {
  const { error, data } = useCoins();

  if (data) {
    return (
      <CoinsWrapper>
        {data.map((dataItem, index) => <Coin key={`${dataItem.symbol}-${index}`} data={dataItem} />)}
      </CoinsWrapper>
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
