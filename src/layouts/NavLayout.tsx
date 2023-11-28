import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const NavLayout = () => {
    return (
        <main style={{ marginTop: "200px" }}>
            <Header />
            <Outlet />
        </main>
    );
};
