import { Button, Search } from "./Form";

import styles from "./Header.module.scss";

import logo from "@/assets/logo.svg";

export const Nav = () => {
    return (
        <nav className={styles.nav_wrapper}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.search}>
                <Search></Search>
            </div>

            <div className={styles.auth}>
                <Button type="primary-fill" width="90px" height="45px">
                    로그인
                </Button>

                <Button type="primary-stroke" width="90px" height="45px">
                    회원가입
                </Button>
            </div>
        </nav>
    );
};

export const NavMenu = () => {
    return <div className={styles.nav_menu_wrapper}></div>;
};

export const Header = () => {
    return (
        <header className={styles.header}>
            <Nav />
        </header>
    );
};
