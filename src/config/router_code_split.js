import React, { lazy, Suspense, Component } from 'react'; 
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';
import asyncComponent from "../components/AsyncComponent";
import '../css/home.css';
import '../css/main.css';

// import App from '../App';

const App = asyncComponent(() => import("../App"));

const Product = asyncComponent(() =>import('../pages/Product.js'));
const Upload = asyncComponent(() =>import('../pages/upload'));
const Blog = asyncComponent(() =>import('../pages/blog'));
const Post = asyncComponent(() =>import('../pages/post'));
const Wholesale = asyncComponent(() =>import('../pages/wholesale'));
const Search = asyncComponent(() =>import('../pages/search'));
const Help = asyncComponent(() =>import('../pages/help'));
const Contact = asyncComponent(() =>import('../pages/contact'));
const Info = asyncComponent(() =>import('../pages/info'));
const M2M2 = asyncComponent(() =>import('../pages/m2m2'));
const M2M = asyncComponent(() =>import('../pages/m2m'));
const Gallery = asyncComponent(() =>import('../pages/gallery'));
const WholesaleQuote = asyncComponent(() =>import('../pages/wholesale_quote'));
const Fabric = asyncComponent(() =>import('../pages/fabric_home'));
const Signin = asyncComponent(() =>import('../pages/signin'));

const Fabric_Single = asyncComponent(() =>import('../pages/fabric_single.js'));
const Fabric_Display = asyncComponent(() =>import('../pages/fabric_display'));
const Fabric_Upload = asyncComponent(() =>import('../pages/fabric_upload'));
const Fabric_Upload_Select = asyncComponent(() =>import('../pages/fabric_upload_select'));
const visitRwanda = asyncComponent(() =>import('../pages/visitRwanda.js'));
const notFound = asyncComponent(() =>import('../pages/404'));
const student_discount = asyncComponent(() =>import('../pages/student_discount'));
const GiftCard = asyncComponent(() =>import('../pages/gift_card.js'));
const Cart = asyncComponent(() =>import('../pages/cart.js'));
const Delivery = asyncComponent(() =>import('../pages/delivery_final.js'));
const About = asyncComponent(() =>import('../pages/company.js'));
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
                            <Route exact path={"/dev/company"} component={About}/>
                             <Route component={notFound}/>
                            
                        </Switch>            
                </Router>
        
        );
        
    

export default outer;
