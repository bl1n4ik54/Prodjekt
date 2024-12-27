import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../routes/Product/productSlice"
import contactSlice from "../routes/Contacts/contactsSlice"

export default configureStore({
    reducer: {
        product: productSlice,
        cont: contactSlice
    }
})