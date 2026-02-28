import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // mutating (directly modifying) the state here
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        // use actions in parameter when they are used otherwise only use state or the way you want to do it.
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length=0;
            // state = [] wont work
        }
    }
});

// This createSlice function creates an object and return something in the form
// {
//     actions: {
//         addItem
//     },
//     reducer
// }


export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer;