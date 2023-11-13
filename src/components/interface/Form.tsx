import { IForm, IInput, IInputContainer, ILabel } from "./types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./Form.module.scss";
import { Button } from "./Button";

export const Search = (): JSX.Element => {
    return (
        <div className={styles.search_wrapper}>
            <input type="text" placeholder="검색어를 입력하세요"></input>
            <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export const Form = ({ children, width, height, ...rest }: IForm) => {
    return (
        <form style={{ width: width, height: height }} {...rest}>
            {children}
        </form>
    );
};

export const Input = ({ width, height, ...rest }: IInput) => {
    return <input style={{ width: width, height: height }} className={styles.input} {...rest}></input>;
};

export const InputContainer = ({ label, type, placeholder, btnRequired, btnLabel, onClick, ...rest }: IInputContainer) => {
    return (
        <div className={styles.input_container}>
            <p>{label}</p>
            <Input type={type} placeholder={placeholder} value={type === "button" ? placeholder : null} />
            {btnRequired && <Button type="primary-stroke">{btnLabel}</Button>}
        </div>
    );
};

export const Label = ({ children, ...rest }: ILabel) => {
    return (
        <label className={styles.label} {...rest}>
            {children}
        </label>
    );
};
