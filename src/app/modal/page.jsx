'use client'

import React from 'react';

import styles from './page.module.css';

const Modal = () => {

  const [open, setOpen] = React.useState(false);
  return (
    <main className={styles.main}>
      <button className={styles.open} onClick={() => setOpen(true)}>Открыть модальное окно</button>
      {open && (
        <div className={styles.container}>
          <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
              <div className={styles.modalDist}>
                
                  <h4 className={styles.modalTitle}>Это модальное окно</h4>
                  <p className={styles.modalDesc}>Здесь какой то текст какой то текст какой то текст какой то текст какой то текст какой то текст</p>
                  
                
                <button className={styles.close} onClick={() => setOpen(false)}>Закрыть окно</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Modal;