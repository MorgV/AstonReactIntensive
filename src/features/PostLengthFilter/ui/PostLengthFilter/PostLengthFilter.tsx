import { type FC, memo, useRef } from "react";
import styles from "./PostLengthFilter.module.css";

type PostLengthFilterProps = {
  minLength: number;
  setMinLength: (value: number) => void;
};

export const PostLengthFilter: FC<PostLengthFilterProps> = memo(
  ({ minLength, setMinLength }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>Минимальная длина заголовка:</label>
        <input
          ref={inputRef}
          type="number"
          value={minLength}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMinLength(Number(e.target.value))
          }
          min={0}
          className={styles.input}
        />
      </div>
    );
  }
);
