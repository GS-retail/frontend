import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./Form.module.scss";

export const Search = () => {
    return (
        <div className={styles.search_wrapper}>
            <input type="text" placeholder="검색어를 입력하세요"></input>
            <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export const Form = ({ children, width, height, ...rest }) => {
    return (
        <form style={{ width: width, height: height }} {...rest}>
            {children}
        </form>
    );
};

export const Input = ({ width, height, ...rest }) => {
    return <input style={{ width: width, height: height }} className={styles.input} {...rest}></input>;
};

export const Label = ({ children, ...rest }) => {
    return (
        <label className={styles.label} {...rest}>
            {children}
        </label>
    );
};

export const Button = ({ type, width, height, children, ...rest }) => {
    if (type === "primary-stroke") {
        return (
            <button className={`${styles.btn_primary_stroke} ${styles.btn_default}`} style={{ width: width, height: height }} {...rest}>
                {children}
            </button>
        );
    }
    if (type === "primary-fill") {
        return (
            <button className={`${styles.btn_primary_fill} ${styles.btn_default}`} style={{ width: width, height: height }} {...rest}>
                {children}
            </button>
        );
    }
};
