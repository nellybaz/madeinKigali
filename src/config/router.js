import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import request from 'superagent';


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
import SizeGuide from '../pages/size_guide';
import BuyerLicence from '../pages/buyer_licence';
import SellerLicence from '../pages/seller_licence';
import WashCare from '../pages/washcare';
import MIKKFW from '../pages/mik_kfw';
import SiteMap from '../pages/sitemap';
import MIKRemera from '../pages/mik_remera_corner';

import Happiness from '../pages/hapiness_guaranteed';
import Affiliates from '../pages/affiliates';
import Careers from '../pages/careers_opportunities';
import SocialResponsibility from '../pages/social_responsibility';
import Refer from '../pages/refer_a_friend';


class AppRouter extends Component{

    
 
    render(){
        return(
            <Router onUpdate={() => window.scrollTo(0, 0)} basename="">
        <Switch>
            <Route exact path={"/company2"} component={Company2} />
            <Route exact path={"/"} component={ComingSoon1}/>
            <Route exact path={"/12hdgsikdhlmsdne"} component={App} />
            <Route exact path={"/upload"} component={Upload} />
            <Route exact path={"/blog/:nav"} component={Blog} />
            <Route exact path={"/dev"} component={ComingSoon1} />
            <Route exact path={"/blog/post/:blog_id/:blog_name"} component={Post} />
            <Route exact path={"/product/:slug/:number"} component={Product} />
            <Route exact path={"/wholesale/:slug/:number"} component={Wholesale} />
            <Route exact path={"/search/:query/category/:category_no"} component={Search} />
            <Route exact path={"/shop"} component={Search} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/help"} component={Help} />
            <Route exact path={"/points"} component={PointOfSale} />
            <Route exact path={"/info/:infocategory"} component={Info} />
            {/* <Route exact path={"/m2m"} component={M2M}/> */}
            <Route exact path={"/size-guide"} component={SizeGuide} />
            <Route exact path={"/m2m2"} component={M2M2} />
            <Route exact path={"/gallery"} component={Gallery} />
            <Route exact path={"/quote"} component={WholesaleQuote} />
            <Route exact path={"/fabric"} component={Fabric} />
            <Route exact path={"/fabric_single"} component={Fabric_Single} />
            <Route exact path={"/fabric_search"} component={Fabric_Display} />
            <Route exact path={"/fabric/upload"} component={Fabric_Upload} />
            <Route exact path={"/fabric/create"} component={PreFabricUpload} />
            <Route exact path={"/fabric/upload/select/:fabric_id"} component={Fabric_Upload_Select} />
            <Route exact path={"/signin"} component={Signin} />
            <Route exact path={"/visit_rwanda"} component={visitRwanda} />
            <Route exact path={"/student_discount"} component={student_discount} />
            <Route exact path={"/gift_card"} component={GiftCard} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/delivery"} component={Delivery} />
            <Route exact path={"/company"} component={Company} />
            <Route exact path={"/company/about"} component={About} />
            <Route exact path={"/company/about2"} component={About2} />
            <Route exact path={"/admin/dashboard"} component={DashBoard} />
            <Route exact path={"/admin/dashboard/flashdeals"} component={FlashDeals} />
            <Route exact path={"/admin/dashboard/blog"} component={Blog_Dashboard} />
            <Route exact path={"/admin/dashboard/trending"} component={Trending} />
            <Route exact path={"/buyer_licence"} component={BuyerLicence} />
            <Route exact path={"/seller_licence"} component={SellerLicence} />
            <Route exact path={"/washcare"} component={WashCare} />
            <Route exact path={"/mik_kigali_fashion_week"} component={MIKKFW} />
            <Route exact path={"/sitemap"} component={SiteMap} />
            <Route exact path={"/locations/remera_corner"} component={MIKRemera} />
            <Route exact path={"/happiness_guaranteed"} component={Happiness} />
            <Route exact path={"/affiliates"} component={Affiliates} />
            <Route exact path={"/careers&Opportunities"} component={Careers} />
            <Route exact path={"/socialresponsibility"} component={SocialResponsibility} />
            <Route exact path={"/refer_a_friend"} component={Refer} />
            <Route component={notFound} />
        </Switch>
    </Router>


        );
    }
}
// const router = () => (
    
// );


export default AppRouter;
