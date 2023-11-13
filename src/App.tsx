import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { Header } from "@/components/Header";

import HomePage from "@/pages/HomePage";
import AuthPage from "@/pages/AuthPage";

export default function App() {
    return (
        <Provider store={store}>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth/signin" element={<AuthPage.SignIn />} />
                <Route path="/auth/signup" element={<AuthPage.SignUp />} />
            </Routes>
        </Provider>
    );
}
