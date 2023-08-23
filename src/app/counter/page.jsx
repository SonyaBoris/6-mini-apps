'use client'

import React from 'react';

import styles from './page.module.css';

const Counter = () => {

  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1)
  };

  const onClickMinus = () => {
    setCount(count - 1)
  };

  return (
    <main className={styles.container}>
      <div className={styles.counter}>
        <h2 className={styles.tittle}>Счетчик:</h2>
        <h1 className={styles.number}>{count}</h1>
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={onClickMinus}>- минус</button>
          <button className={styles.btn} onClick={onClickPlus}>+ плюс</button>
        </div>
      </div>
    </main>
  );
}

export default Counter;