'use client'
import React from 'react';

import styles from './page.module.css';


const questions = [
  {
    title: 'useState - это ... ?',
    variants: ['Это функция для хранения данных компонента', 'Это глобальный стейт', 'Это город'],
    correct: 0,
  },
  {
    title: 'React - это ... ?',
    variants: ['Библиотека', 'Фреймворк', 'Язык программирования'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ?',
    variants: ['Часть приложения или страницы', 'Приложение', 'Коллега по работе'],
    correct: 0,
  },
  {
    title: 'JSX - это ... ?',
    variants: ['Машинный код', 'Расширение синтаксиса JavaScript', 'Валюта'],
    correct: 1,
  },
  {
    title: 'State - это ... ?',
    variants: ['Входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту', 'Объект, позволяющий отслеживать данные компонента', 'Расширение синтаксиса JavaScript'],
    correct: 1,
  },
  {
    title: 'Props - это ... ?',
    variants: ['Объект, позволяющий отслеживать данные компонента', 'Модный синтаксис', 'Входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту'],
    correct: 2,
  },
  {
    title: 'Что делают методы жизненного цикла?',
    variants: ['Отображают дату создания компонента', 'Дают возможность запускать код в конкретные моменты жизни компонента', 'Показывают нахождение компонента в DOM'],
    correct: 1,
  },
  {
    title: 'Фреймворк - это ... ?',
    variants: ['Набор ИТ-инструментов, который упрощает разработку и поддержку сложных и высоконагруженных веб-проектов', 'Программа для написания кода', 'Редактор кода'],
    correct: 0,
  },
  {
    title: 'Что используется для передачи данных к компоненту извне?',
    variants: ['Props', 'Render with arguments', 'setState'],
    correct: 0,
  },
  {
    title: 'Хуки - ... ?',
    variants: ['Собирают информацию о действиях пользователя на странице', 'Позволяют нам разрабатывать статические или динамические компоненты и реагировать на них', 'Антивирусная программа'],
    correct: 1,
  },
]

function Result({ correct }) {
  return (
    <div className={styles.result}>
      <h2 className={styles.resultTitle}>Вы отгадали {correct} из 10</h2>
      <a className={styles.againBtn} href="/quiz">
        <button className={styles.again}>Попробовать снова</button>
      </a>
    </div>
  )
}

function Game({ step, question, onClickVariant }) {

  const percentage = Math.round(step * 10);
  console.log(percentage)

  return (
    <>
      <div className={styles.progress}>
        <div className={styles.width} style={{ width: `${percentage}%` }}></div>
      </div>
      <h1 className={styles.quiz}>{question.title}</h1>
      <ul>
        <div className={styles.item}>          {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text} className={styles.answer}> {text} </li>
          ))}
        </div>
      </ul>
    </>
  )
}


const Quiz = () => {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(index, step)
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <main className={styles.container}>
      {step !== 10 ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </main>
  );
}

export default Quiz;