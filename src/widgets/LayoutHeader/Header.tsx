import React, { useState } from "react";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { Modal } from "../../shared/ui/Modal/Modal";
import { UserTabs } from "../UserTabs/ui/UserTabs";

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>MyBlog</h1>
          <UserTabs />
          <div className={styles.actions}>
            <Button onClick={handleToggleModal}>О проекте</Button>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>
          <p>
            <strong>Проект:</strong> приложение для просмотра постов и
            комментариев, основанное на публичном API{" "}
            <code>JSONPlaceholder</code>.
          </p>

          <p>
            <strong>Основные технологии:</strong> React, TypeScript, Vite, RTK
            Query, CSS Modules.
          </p>

          <p>
            <strong>Функциональность:</strong> загрузка данных с{" "}
            <a
              href="https://jsonplaceholder.typicode.com"
              target="_blank"
              rel="noreferrer"
            >
              JSONPlaceholder
            </a>
            , отображение постов и комментариев, переключение темы и модальные
            окна.
          </p>

          <p>
            <strong>Архитектура проекта:</strong> реализована по принципам FSD
            (Feature-Sliced Design):
          </p>

          <ul>
            <li>
              <code>app/</code> — инициализация приложения (router, store, темы)
            </li>
            <li>
              <code>pages/</code> — страницы роутов
            </li>
            <li>
              <code>widgets/</code> — крупные интерфейсные блоки
            </li>
            <li>
              <code>features/</code> — независимые пользовательские фичи
            </li>
            <li>
              <code>entities/</code> — доменные сущности (user, post, todo)
            </li>
            <li>
              <code>shared/</code> — общие компоненты, утилиты и стили
            </li>
          </ul>

          <p>
            <strong>Организация работы:</strong> для каждой домашней работы
            создаётся отдельный Merge Request.
          </p>
        </Modal.Body>
        <Modal.Footer>footer</Modal.Footer>
      </Modal>
    </>
  );
};
