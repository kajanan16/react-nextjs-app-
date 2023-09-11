import React, {useState} from 'react';
import {Avatar, List, Menu} from "antd";

const CardDropdown = () => {

    const [visible, setVisible] = useState(false);


    return (
        <div>
            <List itemLayout="horizontal">
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel`}
                            />
                        }
                        title="Free Delivery"
                        description="Enter your postal code for delivery avilability"
                    />
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel`}
                            />
                        }
                        title="Return Delivery"
                        description="Free 30 days delivery returns. Details"
                    />
                </List.Item>
            </List>
        </div>
    );
};

export default CardDropdown;