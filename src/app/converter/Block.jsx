'use client'
import React from "react";

import './block.css';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency == cur ? 'active' : ''}
            key={cur}>
            {cur}
          </li>
        ))}
        <li className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g transform="rotate(90 12 12)">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="m7 2l10 10L7 22" />
            </g>
          </svg>
        </li>
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  );
}

export default Block;