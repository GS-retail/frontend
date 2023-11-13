import { IButton, ISocialLoginButton } from "./types";

import styles from "./Button.module.scss";

import IconGoogle from "@/assets/icon-google.png";
import IconNaver from "@/assets/icon-naver.png";
import IconKakao from "@/assets/icon-kakao.png";

export const Button = ({ type, width, height, children, ...rest }: IButton): JSX.Element | undefined => {
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

export const SocialLoginButton = ({ type, ...rest }: ISocialLoginButton): JSX.Element => {
    const types = {
        google: {
            icon: IconGoogle,
            text: "구글",
        },
        naver: {
            icon: IconNaver,
            text: "네이버",
        },
        kakao: {
            icon: IconKakao,
            text: "카카오",
        },
    };

    return (
        <button className={styles.social_login_btn} {...rest}>
            <img src={types[type].icon} alt="" />
            <p>{types[type].text} 계정으로 시작</p>
        </button>
    );
};
