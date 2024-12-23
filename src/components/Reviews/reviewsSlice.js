import { createSlice, nanoid } from "@reduxjs/toolkit";

let reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        value: arr,
    },
    reducers: {
        createReview: s => {
            s.value.push({
                id: nanoid(12)
                
            })
        }
    }
})