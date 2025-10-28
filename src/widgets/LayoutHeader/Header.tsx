import React from "react";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>MyBlog</h1>
        <nav className={styles.nav}>
          <a href="#">Главная</a>
          <a href="#">О проекте</a>
          <a href="#">Контакты</a>
        </nav>
      </div>
    </header>
  );
};
