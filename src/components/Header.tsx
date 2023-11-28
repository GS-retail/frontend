import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Search } from "./interface/Form";
import { Button } from "./interface/Button";
import { Category } from "./Category";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { navActions } from "../store/nav-slice";

import { categories } from "../constant/categories";
import styles from "./Header.module.scss";
import logo from "@/assets/logo.svg";

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

    const dispatch: Dispatch = useDispatch();

    return (
        <div className={styles.nav_menu_wrapper}>
            <ul className={styles.nav_menu_container}>
                <li onClick={() => dispatch(navActions.toggleCategory())}>
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
    const baseURL = "src/assets/category-icons/";

    const { isCategoryOpen } = useSelector((state: RootState) => state.navSlice);

    return (
        <header className={styles.header}>
            <Nav />
            <NavMenu />

            {isCategoryOpen && (
                <Category.Container>
                    <Category.Items>
                        {categories.slice(0, 4).map((element) => {
                            return <Category.Item imgSrc={baseURL + element.imgSrc} text={element.text} />;
                        })}
                    </Category.Items>

                    <Category.Items>
                        {categories.slice(4, 8).map((element) => {
                            return <Category.Item imgSrc={baseURL + element.imgSrc} text={element.text} />;
                        })}
                    </Category.Items>

                    <Category.Items>
                        {categories.slice(8, 12).map((element) => {
                            return <Category.Item imgSrc={baseURL + element.imgSrc} text={element.text} />;
                        })}
                    </Category.Items>

                    <Category.Items>
                        {categories.slice(12, 15).map((element) => {
                            return <Category.Item imgSrc={baseURL + element.imgSrc} text={element.text} />;
                        })}
                    </Category.Items>
                </Category.Container>
            )}
        </header>
    );
};
