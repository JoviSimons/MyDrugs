import React from "react";
import Header from "../components/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './Product';
import Profile from '../components/Profile';


export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Header></Header>
                    <div className="App">
                    <Switch>
                        <Route exact path='/'>
                            <Product/>
                        </Route>
                        <Route path='/product/:id'>
                            <Product/>
                        </Route>
                        <Route path='/profile'>
                            <Profile/>
                        </Route>
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}