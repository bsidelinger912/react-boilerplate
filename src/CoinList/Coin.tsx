/**
 * @class Coin
 * @description
 */

import React from 'react';
import styled from 'styled-components';

import { DataItem } from './useCoins';

const CoinDiv = styled.div`
  border: 1px solid #fff;
  margin: 10px; 
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface Props {
  data: DataItem;
}

const Coin: React.FC<Props> = ({ data }) => (
  <CoinDiv>{data.symbol}</CoinDiv>
);

export default Coin;
