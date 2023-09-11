import {createSlice} from "@reduxjs/toolkit";

export interface cart {
    name: string;
    id: string;
    image: string;
    price: string;
}

const initialState = {
    cartList: []
};
const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // @ts-ignore
            state.cartList.map((x: cart) => {
                if (x.id != action.payload.id) {
                    // @ts-ignore
                    state.cartList.push(action.payload);
                }
            })
        },

    }
});


export const {addToCart} = cartReducer.actions;
export default cartReducer.reducer;