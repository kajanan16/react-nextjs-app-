import axios from "axios";
import {loadProducts, getProduct} from "@/redux/product-reducer";
import {Dispatch} from "redux";

export const fetchProducts = () => {
    // @ts-ignore
    return function (dispatch: Dispatch) {
        axios.get('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db').then(res => {
            dispatch(loadProducts(res.data.ecommerce.products))
        }).catch(err => {
        });
    }

}
export const fetchProduct = (id:string) => {
    // @ts-ignore
    return function (dispatch: Dispatch) {
        axios.get('https://my-json-server.typicode.com/kodplex/pr-re-ec-product/db').then(res =>
        {
            dispatch(getProduct(res.data.ecommerce.product))
        }).catch(err => {
        });
    }

}
