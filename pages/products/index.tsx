import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import { theme} from "antd";
import React, {useEffect} from "react";
import {fetchProducts} from "@/redux/product-handler";
import PCard, {product} from "@/prodcard";


const Index: React.FC<product> = (props) => {

    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.productList);

    const {
        token: {colorBgContainer},
    } = theme.useToken();


    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

            {products && products.map((x: product) =>

                <PCard
                    image={x.image}
                    name={x.name}
                    rating={x.rating}
                    id={x.id}
                    status={x.status}
                    price={x.price}
                />
            )}
        </div>
    );
};

export default Index;