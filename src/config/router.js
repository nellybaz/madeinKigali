import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
import visitRwanda from '../pages/visitRwanda2';
import notFound from '../pages/404';
import student_discount from '../pages/student_discount';
import GiftCard from '../pages/gift_card.js';
import Cart from '../pages/cart.js';
import Delivery from '../pages/delivery_final.js';
import Company from '../pages/company';
import About from '../pages/about';
import PointOfSale from '../pages/point_of_sale';
import DashBoard from '../pages/dashboard/dashboard';
import FlashDeals from '../pages/dashboard/flashdeals';
import Blog_Dashboard from '../pages/dashboard/blog';
import Trending from '../pages/dashboard/trending';
import PreFabricUpload from '../pages/pre_fabirc_upload';
import ComingSoon from '../pages/coming_soon2';
import About2 from '../pages/about2';
import Company2 from '../pages/company2';
import ComingSoon1 from '../pages/comimg_soon';


const outer = () => (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
                <Switch>
                        
                        {/* <Route exact path={"/stash/12hdgsikdhlmsdne"} component={App} />
                        <Route exact path={"/stash/upload"} component={Upload} />
                        <Route exact path={"/stash/blog/:nav"} component={Blog} />
                        <Route exact path={"/stash/blog/post/:blog_id/:blog_name"} component={Post} />
                        <Route exact path={"/stash/product/:slug/:number"} component={Product} />
                        <Route exact path={"/stash/wholesale/:slug/:number"} component={Wholesale} />
                        <Route exact path={"/stash/search/:query/category/:category_no"} component={Search} />
                        <Route exact path={"/stash/shop"} component={Search} />
                        <Route exact path={"/stash/contact"} component={Contact} />
                        <Route exact path={"/stash/help"} component={Help} />
                        <Route exact path={"/stash/points"} component={PointOfSale} />
                        <Route exact path={"/stash/info/:infocategory"} component={Info} />
                        <Route exact path={"/stash/m2m"} component={M2M} />
                        <Route exact path={"/stash/m2m2"} component={M2M2} />
                        <Route exact path={"/stash/gallery"} component={Gallery} />
                        <Route exact path={"/stash/quote"} component={WholesaleQuote} />
                        <Route exact path={"/stash/fabric"} component={Fabric} />
                        <Route exact path={"/stash/fabric_single"} component={Fabric_Single} />
                        <Route exact path={"/stash/fabric_search"} component={Fabric_Display} />
                        <Route exact path={"/stash/fabric/upload"} component={Fabric_Upload} />
                        <Route exact path={"/stash/fabric/create"} component={PreFabricUpload} />
                        <Route exact path={"/stash/fabric/upload/select/:fabric_id"} component={Fabric_Upload_Select} />
                        <Route exact path={"/stash/signin"} component={Signin} />
                        <Route exact path={"/stash/visit_rwanda"} component={visitRwanda} />
                        <Route exact path={"/stash/student_discount"} component={student_discount} />
                        <Route exact path={"/stash/gift_card"} component={GiftCard} />
                        <Route exact path={"/stash/cart"} component={Cart} /> */}
                        <Route exact path={"/stash/"} component={ComingSoon1} />
                        {/* <Route exact path={"/stash/delivery"} component={Delivery} /> */}
                        <Route exact path={"/stash/company2"} component={Company2} />
                        <Route exact path={"/stash/company/about"} component={About} />
                        <Route exact path={"/stash/company/about2"} component={About2} />
                        {/* <Route exact path={"/stash/admin/dashboard"} component={DashBoard} />
                        <Route exact path={"/stash/admin/dashboard/flashdeals"} component={FlashDeals} />
                        <Route exact path={"/stash/admin/dashboard/blog"} component={Blog_Dashboard} />
                        <Route exact path={"/stash/admin/dashboard/trending"} component={Trending} /> */}
                        <Route component={notFound} />
                </Switch>
        </Router>

);



export default outer;
