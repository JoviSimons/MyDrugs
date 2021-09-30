import React from "react";
import Basket from "../components/Basket";
import Header from "../components/Header";


export default class Category extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1>Home</h1>
                <Basket></Basket>
            </div>
        )
    }
}