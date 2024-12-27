import { createSlice, nanoid } from "@reduxjs/toolkit"

let arr = JSON.parse(localStorage.getItem('cont')) ?? []

const contactSlice = createSlice({
    name: 'cont',
    initialState: {
        value: arr
    },
    reducers: {
        otp: (s, a) => {
            if (a.payload) {
                const { name, tel, mes, photo } = a.payload
                s.value.push({
                    id: nanoid(),
                    name,
                    tel,
                    mes, 
                    photo
                })

                localStorage.setItem('cont', JSON.stringify(s.value))
            }
        }
    }
})

export default contactSlice.reducer
export let { otp } = contactSlice.actions