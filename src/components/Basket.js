import React from 'react';
import {Button} from '@mui/material';

export default function Basket(props) { 
    const {cartItems,onAdd, onRemove} = props;
    return(
    <div>
        <h3>Basket</h3>
        <div>
            {cartItems.length === 0 &&<div>Cart is empty</div>}
            {cartItems.map((item) => (
                <div key={item.id}>
                        { item.name }

                        <Button variant="text" onClick={() => onAdd(item)}>
                            +
                        </Button>
                        <Button variant="text" onClick={() => onRemove(item)}>
                            -
                        </Button>
                        {item.qty} x ${item.price}
                </div>
            ))}
        </div>
    </div>
    
    )
}