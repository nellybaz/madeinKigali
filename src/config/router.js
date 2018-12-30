import React, { lazy, Suspense, Component } from 'react'; 
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';


import App from '../App';
import Product from '../pages/Product.js';
import Upload from '../pages/upload';
import Blog from '../pages/blog';
import Post from '../pages/post';
import Wholesale from '../pages/wholesale';
import Search from '../pages/search';
import Help from '../pages/help';
import Contact from '../pages/contact';
import Info from '../pages/info';
import M2M2 from '../pages/m2m2';
import M2M from '../pages/m2m';
import Gallery from '../pages/gallery';
import WholesaleQuote from '../pages/wholesale_quote';
import Fabric from '../pages/fabric_home';
import Signin from '../pages/signin';
import '../css/home.css';
import Fabric_Single from '../pages/fabric_single.js';
import Fabric_Display from '../pages/fabric_display';
import Fabric_Upload from '../pages/fabric_upload';
import Fabric_Upload_Select from '../pages/fabric_upload_select';
import visitRwanda from '../pages/visitRwanda.js';
import notFound from '../pages/404';
import student_discount from '../pages/student_discount';
import GiftCard from '../pages/gift_card.js';
import Cart from '../pages/cart.js';
import Delivery from '../pages/delivery_final.js';

    const outer =()=> (
                <Router onUpdate={()=> window.scrollTo(0,0)}>
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
                            <Route exact path={"/dev/info/:infocategory"} component={Info}/>
                            <Route exact path={"/dev/m2m"} component={M2M}/>
                            <Route exact path={"/dev/m2m2"} component={M2M2}/>
                            <Route exact path={"/dev/gallery"} component={Gallery}/>
                            <Route exact path={"/dev/quote"} component={WholesaleQuote}/>
                            <Route exact path={"/dev/fabric"} component={Fabric}/>
                            <Route exact path={"/dev/fabric_single"} component={Fabric_Single}/>
                            <Route exact path={"/dev/fabric_search"} component={Fabric_Display}/>
                            <Route exact path={"/dev/fabric/upload"} component={Fabric_Upload}/>
                            <Route exact path={"/dev/fabric/upload/select/:fabric_id"} component={Fabric_Upload_Select}/>
                            <Route exact path={"/dev/signin"} component={Signin}/>
                            <Route exact path={"/dev/visit_rwanda"} component={visitRwanda}/>
                            <Route exact path={"/dev/student_discount"} component={student_discount}/>
                            <Route exact path={"/dev/gift_card"} component={GiftCard}/>
                            <Route exact path={"/dev/cart"} component={Cart}/>
                            <Route exact path={"/dev/delivery"} component={Delivery}/>
                             <Route component={notFound}/>
                        </Switch>            
                </Router>
        
        );
        
    

export default outer;
