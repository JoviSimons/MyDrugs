import Button from '@restart/ui/esm/Button';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Basket(props) { 
    const {cartItems,onAdd, onRemove} = props;
    return(
    <div>
        <h3>Basket</h3>
        <div>
            {cartItems.length === 0 &&<div>Cart is empty</div>}
            {cartItems.map((item) => (
                <div key={item.id}>
                    <div>
                        { item.name }
                    </div>
                    <div>
                        <Button variant="text" onClick={() => onAdd(item)}>
                            +
                        </Button>
                        <Button variant="text" onClick={() => onRemove(item)}>
                            -
                        </Button>
                    </div>
                    <div>
                        {item.qty} x ${item.price}
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    )
}