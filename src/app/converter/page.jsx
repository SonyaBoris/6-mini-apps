'use client'

import React from "react";
import Block from "./Block";



const Converter = () => {
  return (
    <main>
      <Block value={0} currency='RUB' />
      <Block value={0} currency='USD' />

    </main>
  );
}

export default Converter;