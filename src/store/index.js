import auth from "./auth";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth,
    },

});

export default store;
