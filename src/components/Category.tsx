import styles from "./Category.module.scss";
import { ICategoryContainer, ICategoryItem, ICategoryItems } from "./types";

export const Category = {
    Container: ({ children }: ICategoryContainer): JSX.Element => {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>{children}</div>
            </div>
        );
    },

    Items: ({ children }: ICategoryItems) => {
        return <div className={styles.items}>{children}</div>;
    },

    Item: ({ imgSrc, text }: ICategoryItem): JSX.Element => {
        return (
            <div className={styles.item}>
                <img src={imgSrc}></img>
                <p>{text}</p>
            </div>
        );
    },
};
