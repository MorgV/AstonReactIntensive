import { type ComponentType, type JSX } from "react";
import styles from "./withLoading.module.css";

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<PropsType extends object>(
  WrappedComponent: ComponentType<PropsType>
) {
  return (props: PropsType & WithLoadingProps): JSX.Element => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}></div>
        </div>
      );
    }

    return <WrappedComponent {...(restProps as PropsType)} />;
  };
}
