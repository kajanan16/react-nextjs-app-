import React from 'react';
import {Button, Card, Col, Image, Row} from "antd";
import {useRouter} from "next/router";
import {addToCart, cart} from "@/redux/cart-reducer";
import {useDispatch} from "react-redux";


export interface product {
    name: string;
    id: string;
    image: string;
    rating: number;
    rateBy: number;
    price: number;
    status: string;
}

const PCard: React.FC<product> = (data) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const onClickProduct = (id: string) => {
        router.push('/products/' + id);
    }

    const onClickAddToCart=(c:product)=>{

        const { name, id, image, price } = c;
        const cartItem: cart = {
            name,
            id,
            image,
            price: price.toString()
        };
        dispatch(addToCart(cartItem))
    }


    return (
        <div>

            <Card  bordered={false} style={{width: 300, margin: "5px 5px"}}>
                <Col>
                    <Row><Image onClick={()=>onClickProduct(data.id)} width={"50%"} preview={false}
                                src={data.image}></Image></Row>
                    <Row>
                        <Col> {data.name}</Col>
                        <Col> {data.price}</Col>
                    </Row>

                    <Row>{data.status}</Row>
                    <Row> <Button onClick={()=>onClickAddToCart(data)}>Add to Cart</Button></Row>


                </Col>
            </Card>
        </div>
    );
};

export default PCard;