'use client'

import React from "react";
import Block from "./Block";

import styles from './page.module.css';



const Converter = () => {
  return (
    <main className={styles.container}>
      <Block value={0} currency='RUB' />
      <Block value={0} currency='USD' />

    </main>
  );
}

export default Converter;