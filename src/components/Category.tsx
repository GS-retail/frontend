import styles from "./Category.module.scss";
import { ICategoryContainer, ICategoryItem, ICategoryItems } from "./types";

export const Category = {
    Container: ({ children }: ICategoryContainer): JSX.Element => {
        return (
            <div className={styles.category_wrapper}>
                <div className={styles.category_container}>{children}</div>
            </div>
        );
    },

    Items: ({ children }: ICategoryItems) => {
        return <div className={styles.category_items}>{children}</div>;
    },

    Item: ({ imgSrc, text }: ICategoryItem): JSX.Element => {
        return (
            <div className={styles.category_item}>
                <img src={imgSrc}></img>
                <p>{text}</p>
            </div>
        );
    },
};
