import { createSlice } from "@reduxjs/toolkit";

export interface INavState {
    isCategoryOpen: boolean;
}

const initialState: INavState = {
    isCategoryOpen: false,
};

export const navSlice = createSlice({
    name: "nav-slice",

    initialState: initialState,

    reducers: {
        openCategory: (state) => {
            state.isCategoryOpen = true;
        },
        closeCategory: (state) => {
            state.isCategoryOpen = false;
        },
        toggleCategory: (state) => {
            if (state.isCategoryOpen === true) state.isCategoryOpen = false;
            else state.isCategoryOpen = true;
        },
    },
});

export const navActions = navSlice.actions;
