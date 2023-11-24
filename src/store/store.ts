import { configureStore } from "@reduxjs/toolkit";

import { navSlice } from "./nav-slice";

export const store = configureStore({
    reducer: {
        navSlice: navSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
