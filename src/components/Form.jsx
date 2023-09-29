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
