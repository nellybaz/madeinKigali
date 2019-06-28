import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import Loadable from 'react-loadable';
import Loader from '../pages/loader';

import '../css/pages/coming_soon.css';
import '../css/utils/screen.css';
import '../css/home.css';
import '../css/main.css';
import '../css/pages/new_flashdeals.css';
import App from '../App';


const Post = Loadable({
    loader: () => import('../pages/post'),
    loading: Loader,
  });


const Wholesale = Loadable({
    loader: () => import('../pages/wholesale'),
    loading: Loader,
  });


const Search = Loadable({
    loader: () => import('../pages/search'),
    loading: Loader,
  });


const Help = Loadable({
    loader: () => import('../pages/help'),
    loading: Loader,
  });


const Contact = Loadable({
    loader: () => import('../pages/contact'),
    loading: Loader,
  });


const Info = Loadable({
    loader: () => import('../pages/info'),
    loading: Loader,
  });


const M2M2 = Loadable({
    loader: () => import('../pages/m2m2'),
    loading: Loader,
  });


const Gallery = Loadable({
    loader: () => import('../pages/gallery'),
    loading: Loader,
  });


const WholesaleQuote = Loadable({
    loader: () => import('../pages/wholesale_quote'),
    loading: Loader,
  });


const Fabric = Loadable({
    loader: () => import('../pages/fabric_home'),
    loading: Loader,
  });


const Signin = Loadable({
    loader: () => import('../pages/signin'),
    loading: Loader,
  });


const Fabric_Single = Loadable({
    loader: () => import('../pages/fabric_single'),
    loading: Loader,
  });


const Fabric_Display = Loadable({
    loader: () => import('../pages/fabric_display'),
    loading: Loader,
  });


const Fabric_Upload = Loadable({
    loader: () => import('../pages/fabric_upload'),
    loading: Loader,
  });


const Fabric_Upload_Select = Loadable({
    loader: () => import('../pages/fabric_upload_select'),
    loading: Loader,
  });


const visitRwanda = Loadable({
    loader: () => import('../pages/visitRwanda2'),
    loading: Loader,
  });


const notFound = Loadable({
    loader: () => import('../pages/404'),
    loading: Loader,
  });


const student_discount = Loadable({
    loader: () => import('../pages/student_discount'),
    loading: Loader,
  });


const GiftCard = Loadable({
    loader: () => import('../pages/gift_card'),
    loading: Loader,
  });


const Cart = Loadable({
    loader: () => import('../pages/cart.js'),
    loading: Loader,
  });


const Delivery = Loadable({
    loader: () => import('../pages/delivery_final'),
    loading: Loader,
  });


const Company = Loadable({
    loader: () => import('../pages/company'),
    loading: Loader,
  });


const About = Loadable({
    loader: () => import('../pages/about'),
    loading: Loader,
  });


const PointOfSale = Loadable({
    loader: () => import('../pages/point_of_sale'),
    loading: Loader,
  });


const DashBoard = Loadable({
    loader: () => import('../pages/dashboard/dashboard'),
    loading: Loader,
  });


const FlashDeals = Loadable({
    loader: () => import('../pages/dashboard/flashdeals'),
    loading: Loader,
  });


const Blog_Dashboard = Loadable({
    loader: () => import('../pages/dashboard/blog'),
    loading: Loader,
  });


const Trending = Loadable({
    loader: () => import('../pages/dashboard/trending'),
    loading: Loader,
  });


const PreFabricUpload = Loadable({
    // loader: () => import('../pages/pre_fabric_upload'),
    loading: Loader,
  });


const About2 = Loadable({
    loader: () => import('../pages/about2'),
    loading: Loader,
  });


const Company2 = Loadable({
    loader: () => import('../pages/company2'),
    loading: Loader,
  });

const ComingSoon1 = Loadable({
    loader: () => import('../pages/comimg_soon'),
    loading: Loader,
  });


const SizeGuide = Loadable({
    loader: () => import('../pages/size_guide'),
    loading: Loader,
  });


const BuyerLicence = Loadable({
    loader: () => import('../pages/buyer_licence'),
    loading: Loader,
  });


const SellerLicence = Loadable({
    loader: () => import('../pages/seller_licence'),
    loading: Loader,
  });


const WashCare = Loadable({
    loader: () => import('../pages/washcare'),
    loading: Loader,
  });


const MIKKFW = Loadable({
    loader: () => import('../pages/mik_kfw'),
    loading: Loader,
  });


const SiteMap = Loadable({
    loader: () => import('../pages/sitemap'),
    loading: Loader,
  });


const MIKRemera = Loadable({
    loader: () => import('../pages/mik_remera_corner'),
    loading: Loader,
  });


const Happiness = Loadable({
    loader: () => import('../pages/hapiness_guaranteed'),
    loading: Loader,
  });


const Affiliates = Loadable({
    loader: () => import('../pages/affiliates'),
    loading: Loader,
  });


const Careers = Loadable({
    loader: () => import('../pages/careers_opportunities'),
    loading: Loader,
  });


const SocialResponsibility = Loadable({
    loader: () => import('../pages/social_responsibility'),
    loading: Loader,
  });


const Refer = Loadable({
    loader: () => import('../pages/refer_a_friend'),
    loading: Loader,
  });

const Product = Loadable({
    loader: () => import('../pages/Product'),
    loading: Loader,
  });


  const Blog = Loadable({
    loader: () => import('../pages/blog'),
    loading: Loader,
  });


  const Upload = Loadable({
    loader: () => import('../pages/upload'),
    loading: Loader,
  });



class AppRouter extends Component{

    render(){
        return(
        <Router onUpdate={() => window.scrollTo(0, 0)}>
        {/* <Suspense fallback={}> */}
            <Switch>
                <Route exact path={"/company2"} component={Company2} />
               
                <Route exact path={"/12hdgsikdhlmsdne"} component={App} />
                <Route exact path={"/upload"} component={Upload} />
                <Route exact path={"/blog/:nav"} component={Blog} />
                <Route exact path={"/dev"} component={ComingSoon1} />
                <Route exact path={"/blog/post/:blog_id/:blog_name"} component={Post} />
                <Route exact path={"/product/:slug/:number"} component={props => <Product {...props} />} />
                <Route exact path={"/wholesale/:slug/:number"} component={Wholesale} />
                <Route exact path={"/search/:query/category/:category_no"} component={Search} />
                <Route exact path={"/shop"} component={Search} />
                <Route exact path={"/contact"} component={Contact} />
                <Route exact path={"/help"} component={Help} />
                <Route exact path={"/points"} component={PointOfSale} />
                <Route exact path={"/info/:infocategory"} component={Info} />
               
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
            {/* </Suspense> */}
        </Router>
        );
    }
  

}

export default AppRouter;
