import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {store} from '@/redux/store'
import {Provider} from 'react-redux'
import {ShoppingCartOutlined} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import React from "react";

const {Header, Content, Footer} = Layout;
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'black',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'gray',
};
export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>

            <Layout className="Container">
                <Header style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Menu theme="light" mode="horizontal" style={{display: "flex"}}>
                        <Menu.Item disabled key="1">
                            <div className="logo">
                                <img
                                    src="https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/logo.png"
                                    alt="Logo"/>
                            </div>

                        </Menu.Item>


                    </Menu>
                    <div>
                        <ShoppingCartOutlined style={{fontSize: '30px', color: '#08c'}}/>
                    </div>
                </Header>

                <Content className="Content">

                </Content>
                <Component {...pageProps} />


            </Layout>


        </Provider>
    )
}
