import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { Header } from "@/components/Header";

import HomePage from "@/pages/HomePage";

export default function App() {
    return (
        <Provider store={store}>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Provider>
    );
}
