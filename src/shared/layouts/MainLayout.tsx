import { type FC, type ReactNode } from "react";
import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
