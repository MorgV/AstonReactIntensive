import { useEffect, type ReactNode, type FC } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { Button } from "../Button/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type ModalSectionProps = {
  children: ReactNode;
};

type ModalComponent = FC<ModalProps> & {
  Header: FC<ModalSectionProps>;
  Body: FC<ModalSectionProps>;
  Footer: FC<ModalSectionProps>;
};

export const Modal: ModalComponent = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return; // добавляем слушатель только если модалка открыта

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Button onClick={onClose} className={styles.close}>
          ×
        </Button>
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.Header = ({ children }: ModalSectionProps) => (
  <div className={styles.header}>
    <h2 className={styles.title}>{children}</h2>
  </div>
);

Modal.Body = ({ children }: ModalSectionProps) => (
  <div className={styles.bodyScrollable}>{children}</div>
);

Modal.Footer = ({ children }: ModalSectionProps) => (
  <div className={styles.footer}>{children}</div>
);
