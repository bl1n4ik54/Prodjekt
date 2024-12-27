import { createSlice, nanoid } from "@reduxjs/toolkit";

let arr = JSON.parse(localStorage.getItem('product')) ?? [];

const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: arr,
        count: 1,
    },
    reducers: {
        add: (s, a) => {
            if (a.payload) {
                const { title, count } = a.payload;
                s.value.push({
                    id: nanoid(),
                    title,
                    count
                });

                localStorage.setItem('product', JSON.stringify(s.value));
            }
        }
    }
});

export default productSlice.reducer;
export let { add } = productSlice.actions;
