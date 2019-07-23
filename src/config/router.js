import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import DynamicImport from './router_lazy_load';
import '../css/home.css';
import spinner from '../assets/images/blog-spinner.gif';

const lazyLoad=(props, link)=>{
    return (
        <DynamicImport load={() => link}>
            {(Component) => Component === null
            ? <div style={{ width:"200px", margin: '50vh 45%'}}>
                <p>Loading please wait....</p>
            </div>
            :
            <Component {...props} />
            }
        </DynamicImport>
    )
}
const App =(props) => lazyLoad(props, import('../App'))

const Product = (props) => lazyLoad(props, import('../pages/Product'))

const Upload = (props) => lazyLoad(props, import('../pages/upload'))
const Blog = (props) => lazyLoad(props, import('../pages/blog'))
const Post = (props) => lazyLoad(props, import('../pages/post'));
const Wholesale = (props) => lazyLoad(props, import('../pages/wholesale'));
const Search = (props) => lazyLoad(props, import('../pages/search'));
const Help = (props) => lazyLoad(props, import('../pages/help'))
const Contact = (props) => lazyLoad(props, import('../pages/contact'));
const Info = (props) => lazyLoad(props, import('../pages/info'));
const M2M2 = (props) => lazyLoad(props, import('../pages/m2m2'));
const Gallery = (props) => lazyLoad(props, import('../pages/gallery'));
const WholesaleQuote = (props) => lazyLoad(props, import('../pages/wholesale_quote'));
const Signin = (props) => lazyLoad(props, import('../pages/signin'));
const Fabric = (props) => lazyLoad(props, import('../pages/fabric'));
const Fabric_Single = (props) => lazyLoad(props, import('../pages/fabric_single'));
const Fabric_Display = (props) => lazyLoad(props, import('../pages/fabric_display'));
const Fabric_Upload = (props) => lazyLoad(props, import('../pages/fabric_upload'));
const Fabric_Upload_Select = (props) => lazyLoad(props, import('../pages/fabric_upload_select'));
const visitRwanda = (props) => lazyLoad(props, import('../pages/visitRwanda2'));
const notFound = (props) => lazyLoad(props, import('../pages/404'));
const GiftCard = (props) => lazyLoad(props, import('../pages/gift_card'));
const student_discount = (props) => lazyLoad(props, import('../pages/student_discount'));
const Cart = (props) => lazyLoad(props, import('../pages/cart'));
const Delivery = (props) => lazyLoad(props, import('../pages/delivery_final'));
const Company = (props) => lazyLoad(props, import('../pages/company'));
const About = (props) => lazyLoad(props, import('../pages/about'));
const PointOfSale = (props) => lazyLoad(props, import('../pages/point_of_sale'));
const DashBoard = (props) => lazyLoad(props, import('../pages/dashboard/dashboard'));
const FlashDeals = (props) => lazyLoad(props, import('../pages/dashboard/flashdeals'));
const Blog_Dashboard = (props) => lazyLoad(props, import('../pages/dashboard/blog'));
const Trending = (props) => lazyLoad(props, import('../pages/dashboard/trending'));
const PreFabricUpload = (props) => lazyLoad(props, import('../pages/pre_fabirc_upload'));
const About2 = (props) => lazyLoad(props, import('../pages/about2'));
const ComingSoon1 = (props) => lazyLoad(props, import('../pages/coming_soon2'));
const Company2 = (props) => lazyLoad(props, import('../pages/company2'));
const SizeGuide = (props) => lazyLoad(props, import('../pages/size_guide'));
const BuyerLicence = (props) => lazyLoad(props, import('../pages/buyer_licence'));
const Happiness = (props) => lazyLoad(props, import('../pages/hapiness_guaranteed'));
const SellerLicence = (props) => lazyLoad(props, import('../pages/seller_licence'));
const WashCare = (props) => lazyLoad(props, import('../pages/washcare'));
const MIKKFW = (props) => lazyLoad(props, import('../pages/mik_kfw'));
const SiteMap = (props) => lazyLoad(props, import('../pages/sitemap'));
const MIKRemera = (props) => lazyLoad(props, import('../pages/mik_remera_corner'));
const Affiliates = (props) => lazyLoad(props, import('../pages/affiliates'));
const Careers = (props) => lazyLoad(props, import('../pages/careers_opportunities'));
const SocialResponsibility = (props) => lazyLoad(props, import('../pages/social_responsibility'));
const Refer = (props) => lazyLoad(props, import('../pages/refer_a_friend'));

const outer = () => (
    <Suspense fallback={<p>Loading..</p>}>

    <Router onUpdate={() => window.scrollTo(0, 0)} basename="/dev">
        <Switch>
            <Route exact path={"/company2"} component={Company2} />
            {/* <Route exact path={"/"} component={ComingSoon1}/> */}
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
    </Suspense>

);


export default outer;
