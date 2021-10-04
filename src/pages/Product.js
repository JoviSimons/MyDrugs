import React from "react";
import useFetch from "../API/useFetch";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useState } from 'react';
import Basket from '../components/Basket';

const Product = () => {

    const { data: products, error, isPending } = useFetch("http://localhost:8080/products");
    const [cartItems, setCartItems] = useState([]);
   
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist){
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x
                )
            );
        }
        else{
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

        return (
            <div>             
            <Header></Header>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} ></Basket>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { products && <ProductList onAdd={onAdd} products={products} /> }
            </div>
        )
}

export default Product;