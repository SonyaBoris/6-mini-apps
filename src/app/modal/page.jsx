'use client'

import React from 'react';

import styles from './page.module.css';

const Modal = () => {

  const [open, setOpen] = React.useState(false);
  return (
    <main className={styles.container}>
      <button className={styles.open} onClick={() => setOpen(true)}>Открыть модальное окно</button>
      {open && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h4>это модальное окно</h4>
              <div className={styles.fon}></div>
              <button onClick={() => setOpen(false)}>Понятно</button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}

export default Modal;