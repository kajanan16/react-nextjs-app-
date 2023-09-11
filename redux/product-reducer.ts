import {createSlice} from '@reduxjs/toolkit';



export interface productInfo {
    id: string;
    name: string;
    description: string;
    rating: number;
    ratedBy: number;
    price: number;
    installment: {
        amount: number;
        period: string;
        description: string;
    };
    colors: string[];
    stock: number;
    images: {
        image: string;
        color: string;
    }[];
}

const initialState = {
    productList: [],
    product: {}
};


const productReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts: (state, action) => {
            state.productList = action.payload
        },
        getProduct: (state, action) => {
            state.product = action.payload;
        }
    }
});



export const {loadProducts,getProduct} = productReducer.actions;
export default productReducer.reducer;
