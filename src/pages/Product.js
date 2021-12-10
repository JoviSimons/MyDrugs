import React from "react";
import { useState, useEffect } from 'react';
import DrugType from '../components/Drug/DrugType';
import axios from "axios";

const Product = (props) => {

  const {addToBasket} = props
  const localUrl = "http://localhost:9000/MyDrugs/"


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
            { drugTypes && <DrugType onAdd={addToBasket} drugTypes={drugTypes}/> }
            </div>
        )
}

export default Product;