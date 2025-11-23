// src/widgets/UserTabs/ui/UserTabs.tsx

import { NavLink } from "react-router-dom";
import styles from "./UserTabs.module.css";
import type { FC } from "react";

export const UserTabs: FC = () => {
  const tabs = [
    { to: `/users/${1}/posts`, label: "Посты" },
    { to: `/users/${1}/albums`, label: "Альбомы" },
    { to: `/users/${1}/todos`, label: "Задачи" },
  ];

  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
};
