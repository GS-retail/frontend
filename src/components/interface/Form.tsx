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

export const InputContainer = ({ label, type, btnRequired, btnLabel, onClick }) => {
    return <div className={styles.input_container}></div>;
};

export const Label = ({ children, ...rest }) => {
    return (
        <label className={styles.label} {...rest}>
            {children}
        </label>
    );
};
