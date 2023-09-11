import {combineReducers, createStore} from "redux";
import productReducer from "@/redux/product-reducer";
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "@/redux/cart-reducer";

export default combineReducers({
    product:productReducer,
    cart:cartReducer
});
