import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Search } from "./interface/Form";
import { Button } from "./interface/Button";

import styles from "./Header.module.scss";

import logo from "@/assets/logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const Nav = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <nav className={styles.nav_wrapper}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.search}>
                <Search></Search>
            </div>

            <div className={styles.auth}>
                <Button type="primary-fill" width="90px" height="45px" onClick={() => navigate("/auth/signin")}>
                    로그인
                </Button>
                <Button type="primary-stroke" width="90px" height="45px" onClick={() => navigate("/auth/signup")}>
                    회원가입
                </Button>
            </div>
        </nav>
    );
};

export const NavMenu = (): JSX.Element => {
    const getActiveStyle = useCallback(({ isActive }: { isActive: boolean }) => {
        if (isActive) return { color: "#05ca7e", fontWeight: "bold" };
    }, []);

    return (
        <div className={styles.nav_menu_wrapper}>
            <ul className={styles.nav_menu_container}>
                <li>
                    <FontAwesomeIcon icon={faBars} />
                    <span>카테고리</span>
                </li>

                <li>
                    <NavLink to="/" style={getActiveStyle}>
                        홈
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/new" style={getActiveStyle}>
                        신규
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/deadline" style={getActiveStyle}>
                        마감임박
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/delivery" style={getActiveStyle}>
                        배달
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Nav />
            <NavMenu />
        </header>
    );
};
