import React, { Component } from 'react'; 
import { BrowserRouter, Route,Switch, Link } from 'react-router-dom';
import App from '../pages/Home.js'; 
import Product from '../pages/Product.js';
import Header from '../components/header';

class Routing extends Component {

    constructor(props){
        super(props)

       
    }
  render() {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path={"/dev"} component={App}/>
                    <Route exact path={"/product/:slug/:number"} component={Product}/>
                </Switch>
            </div>
            
            

        </BrowserRouter>
       
    );
  }
}

export default Routing;
