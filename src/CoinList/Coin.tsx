/**
 * @class Coin
 * @description
 */

import React from 'react';

export interface Props {
  symbol: string;
}

const Coin: React.FC<Props> = ({ symbol }) => (
  <span>{symbol}</span>
);

export default Coin;
