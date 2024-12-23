import { configureStore } from "@reduxjs/toolkit";
import { Reviews } from "../components/Reviews/Reviews";

export default configureStore({
    reducer: {
        reviews: reviewsSlice
    }
})