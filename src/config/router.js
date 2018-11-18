import React, { Component } from 'react'; 
import { BrowserRouter, Route,Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import App from '../App.js'; 
import Product from '../pages/Product.js';
import Header from '../components/header';
import Upload from '../pages/upload';
import Blog from '../pages/blog';
import Post from '../pages/post';
import Wholesale from '../pages/wholesale';
import Search from '../pages/search';
import Help from '../pages/help';
import Contact from '../pages/contact';
import Info from '../pages/info';


import '../css/home.css';
import wholesale from '../pages/wholesale.js';

class Routing extends Component {

    constructor(props){
        super(props)

       
    }
  render() {

    return (
        <div className="Router">
                <BrowserRouter onUpdate={()=> window.scrollTo(0,0)}>
                <ScrollContext>
                        <Switch>
                            <Route exact path={"/dev"} component={App}/>
                            <Route exact path={"/upload"} component={Upload}/>
                            <Route exact path={"/dev/blog"} component={Blog}/>
                            <Route exact path={"/dev/blog/post/:blog_id/:blog_name"} component={Post}/>
                            <Route exact path={"/dev/product/:slug/:number"} component={Product}/>
                            <Route exact path={"/dev/wholesale/:slug/:number"} component={Wholesale}/>
                            <Route exact path={"/dev/search/:query/"} component={Search}/>
                            <Route exact path={"/dev/shop"} component={Search}/>
                            <Route exact path={"/dev/contact"} component={Contact}/>
                            <Route exact path={"/dev/help"} component={Help}/>
                            <Route exact path={"/dev/info"} component={Info}/>
                        </Switch>
                    </ScrollContext>
            
            

                </BrowserRouter>
        </div>
        
       
    );
  }
}

export default Routing;
