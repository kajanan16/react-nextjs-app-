'use client'
import React, {useEffect, useState} from 'react';
import {Row, Col, Card, Button, Typography, Divider, Rate, Radio} from 'antd';

const {Title, Text} = Typography;


import {usePathname} from 'next/navigation'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {fetchProduct} from "@/redux/product-handler";
import {productInfo} from "@/redux/product-reducer";

const ProductPage = (props: any) => {
    const router = useRouter()
    const {productId} = router.query;
    const dispatch = useDispatch();
    const product: productInfo = useSelector((state: RootState) => state.product.product);
    const[prodImage,setprodImage]=useState(null);
    const [img,setImg]=useState(null);
    const [count,setCount]=useState(0);


    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [])




    return (
        <div style={{padding: '20px'}}>
            {
                product && <Row>
                    <Col span={8}>
                        <Card cover={<img alt={product.name} src={(product && product.images && product.images[0].image) || ""}/>}>


                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card>
                            <Title level={4}>{product.name} </Title>
                            <Text type="secondary">{product.description}</Text>

                            <br/>
                            <Rate disabled allowHalf defaultValue={product.rating}/> <br/>
                            <Divider/>
                            <h2>{"$" + product.price + " or " + product?.installment?.amount + "/ " + product.installment?.period}</h2>
                            <Text>{product.installment?.description}</Text>
                            <br/>
                            <Text>Choose colour</Text>
                            <br/>
                            <Button
                                style={{
                                    backgroundColor:(product && product.colors && product.colors[0]) || "green",
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    marginRight: '8px',
                                }}
                                // onClick={() => handleColorChange('red')}
                            >
                                {/* You can also use an icon or color indicator */}
                                <div style={{fontSize: '20px'}}></div>
                            </Button>
                            <Button
                                style={{
                                    backgroundColor: (product && product.colors && product.colors[0]) || "red",
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    marginRight: '8px',
                                }}
                                // onClick={() => handleColorChange('red')}
                            >
                                {/* You can also use an icon or color indicator */}
                                <div style={{fontSize: '20px'}}></div>
                            </Button>
                            <Button
                                style={{
                                    backgroundColor: (product && product.colors && product.colors[3]) || "blue",
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    marginRight: '8px',
                                }}
                                // onClick={() => handleColorChange('red')}
                            >
                                {/* You can also use an icon or color indicator */}
                                <div style={{fontSize: '20px'}}></div>
                            </Button>
                            <Button
                                style={{
                                    backgroundColor: (product && product.colors && product.colors[3] || "yellow"),
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    marginRight: '8px',
                                }}
                                // onClick={() => handleColorChange('red')}
                            >
                                {/* You can also use an icon or color indicator */}
                                <div style={{fontSize: '20px'}}></div>
                            </Button>
                            <br/>
                            <br/>
                            <Radio.Group >
                                <Radio.Button value="large" onClick={()=>setCount((prevState)=>prevState-1)}>-</Radio.Button>
                                <Radio.Button value="default" disabled>{count}</Radio.Button>
                                <Radio.Button value="small" onClick={()=>setCount((prevState)=>prevState+1)}>+</Radio.Button>
                            </Radio.Group>
                            <Text>{`Only ${product.stock} left!`}</Text>
                            <br/>

                            <Text>{`Don't miss it!`}</Text>
                        </Card>
                    </Col>
                </Row>
            }

        </div>
    );
};

export default ProductPage;