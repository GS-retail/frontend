import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { Nav } from "./components/Nav";

import HomePage from "@/pages/HomePage";

export default function App() {
    return (
        <Provider store={store}>
            <Nav />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Provider>
    );
}
