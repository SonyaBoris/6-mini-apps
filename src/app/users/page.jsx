'use client'
import React from "react";


import styles from './page.module.css';

const Users = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)
      })
      .catch((err) => {
        console.warn(err)
        alert('ошибка при получении пользователей')
      })
  }, []);
  return (
    <main>


    </main>
  );
}

export default Users;