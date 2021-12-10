import React from 'react';
import {Button} from '@mui/material';

const Basket = (props) => { 
    const {cartItems, addToBasket, removeFromBasket} = props;
    return(
    <div>
        <h3>Basket</h3>
        <div>
            {cartItems.length === 0 &&<div>Cart is empty</div>}
            {cartItems.map((item) => (
                <div key={item.id}>
                        { item.name }

                        <Button variant="text" onClick={() => addToBasket(item)}>
                            +
                        </Button>
                        <Button variant="text" onClick={() => removeFromBasket(item)}>
                            -
                        </Button>
                        {item.qty} x ${item.price}
                </div>
            ))}
        </div>
    </div>
    
    )
}

export default Basket