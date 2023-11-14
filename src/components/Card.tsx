import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import styles from "./Card.module.scss";
import { ICardContainer, ICardItem } from "./types";

export const Card = {
    Container: ({ children, ...rest }: ICardContainer) => {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container} {...rest}>
                    {children}
                </div>
            </div>
        );
    },

    Item: ({ imgSrc, title, category, subcategory, region, quantity, time, progress, ...rest }: ICardItem) => {
        const progressBar = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const timeout = setTimeout(() => {
                if (progressBar.current !== null) {
                    progressBar.current.style.transform = `scaleX(${progress})`;
                }
            }, 100);
            return () => clearTimeout(timeout);
        }, [progress]);

        return (
            <div className={styles.item_container} {...rest}>
                <img src={imgSrc} alt="card-img" width="200px" />

                <div className={styles.description}>
                    <p>
                        {category}/{subcategory} - {region}
                    </p>
                    <h3>{title}</h3>
                </div>

                <div className={styles.info}>
                    <div className={styles.progress_bar}>
                        <div></div>
                        <div ref={progressBar}></div>
                    </div>

                    <div className={styles.remain}>
                        <div className={styles.quantity}>
                            <h2>
                                <span>{quantity}개</span>
                                <span>남음</span>
                            </h2>
                        </div>

                        <div className={styles.time}>
                            <FontAwesomeIcon icon={faClock} />
                            <p>{time} 시간 남음</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};
