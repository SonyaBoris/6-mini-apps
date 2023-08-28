'use client'

import React from "react";
import Block from "./Block";

import styles from './page.module.css';



const Converter = () => {

  const [fromCurrency, setFromCurrency] = React.useState('RUB');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);

  const [rates, setRates] = React.useState({});

  // React.useEffect(() => {
  //   fetch('https://www.cbr-xml-daily.ru/latest.js')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setRates(json.rates)

  //     }).catch(err => {
  //       console.warn(err)
  //       alert('не удалось получить информацию')
  //     })

  // });

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency]
    const result = price * rates[toCurrency]
    setFromPrice(value)
    setToPrice(result)
  };
  const onChangeToPrice = (value) => {
    setToPrice(value)
  };

  return (
    <main className={styles.container}>
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice} />


    </main>
  );
}

export default Converter;