import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Main/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './Product';
import Profile from '../components/Main/Profile';
import Basket from "../components/Main/Basket";

const LOCAL_STORAGE_KEY = 'Basket.items'

const Home = () => {

    const [cartItems, setCartItems] = useState([]);
   
    useEffect(() =>{
        const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedItems) setCartItems(storedItems)
        console.log("Page loaded")
      }, [])
    
      useEffect(() =>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
        console.log(cartItems)
      }, [cartItems])

    const addToBasket = (product) => {
        console.log("added to basket")
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
    const removeFromBasket = (product) => {
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
                <Router>
                    <Header cartItems={cartItems}/>
                    <div className="App">
                    <Switch>
                        <Route exact path='/' render={() => (<Product addToBasket={addToBasket} cartItems={cartItems}/>)}/>
                        <Route path='/product/:id'>
                            <Product/>
                        </Route>
                        <Route path='/profile'>
                            <Profile/>
                        </Route>
                        <Route exact path='/basket' render={() => (<Basket addToBasket={addToBasket} removeFromBasket={removeFromBasket} cartItems={cartItems}/>)}/>
                    </Switch>
                    </div>
                </Router>
            </div>
        )
}
export default Home 