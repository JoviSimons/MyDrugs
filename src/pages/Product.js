import React from "react";
import { useState, useEffect } from 'react';
import Basket from '../components/Basket';
import DrugType from '../components/DrugType';
import axios from "axios";

const Product = () => {

  const localUrl = "http://localhost:9000/MyDrugs/"
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

  const [drugTypes, setDrugType] = useState(null);

  useEffect(() => {
    fetchDrugTypes()
  }, [])

  const fetchDrugTypes = () => 
  axios.get(localUrl+"categories/")
  .then((response) => {
    setDrugType(response.data)
    console.log(response.data)
  })
  .catch(() => {

  })
        return (
            <div>             
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} ></Basket>
            { drugTypes && <DrugType onAdd={onAdd} drugTypes={drugTypes}/> }
            </div>
        )
}

export default Product;