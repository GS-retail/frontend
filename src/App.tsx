import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { NavLayout } from "./layouts/NavLayout";

export default function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<NavLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth/signin" element={<AuthPage.SignIn />} />
                    <Route path="/auth/signup" element={<AuthPage.SignUp />} />
                </Route>
            </Routes>
        </Provider>
    );
}
