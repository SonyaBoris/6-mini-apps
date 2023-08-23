import Link from "next/link"

import styles from './page.module.css';

const links = [
  {
    id: 1,
    title: "Главная",
    url: "/",
  },
  {
    id: 2,
    title: "Модальное окно",
    url: "/modal",
  },
  {
    id: 3,
    title: "Опросник",
    url: "/quiz",
  },
  {
    id: 4,
    title: "Список пользователей",
    url: "/users",
  },
  {
    id: 5,
    title: "Конвертер валют",
    url: "/converter",
  },
  {
    id: 6,
    title: "Коллекция фотографий",
    url: "/photo",
  },
  {
    id: 7,
    title: "Счётчик",
    url: "/counter",
  },

];

const Header = () => {
  return ( 
    <header className={styles.container}>      
      <nav className={styles.navigation}>
          {links.map((link) => (
            <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
          ))}
        </nav>         
    </header>
   );
}
 
export default Header;