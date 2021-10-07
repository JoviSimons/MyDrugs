import React from "react";
import { useParams, withRouter } from "react-router-dom";
import useFetch from "../API/useFetch";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Product = () => {

    const { data: products, error, isPending } = useFetch("http://localhost:8080/products");
    

        return (
            <div>             
            <Header></Header>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { products && <ProductList products={products} /> }
            </div>
        )
}

export default Product;