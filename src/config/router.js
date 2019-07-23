import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import Loadable from 'react-loadable';
// import Product from '../pages/Product.js';
// import Upload from '../pages/upload';
// import Blog from '../pages/blog';
// import Post from '../pages/post';
// import Wholesale from '../pages/wholesale';
// import Search from '../pages/search';
// import Help from '../pages/help';
// import Contact from '../pages/contact';
// import Info from '../pages/info';
// import M2M2 from '../pages/m2m2';
import M2M from '../pages/m2m';
// import Gallery from '../pages/gallery';
// import WholesaleQuote from '../pages/wholesale_quote';
// import Fabric from '../pages/fabric_home';
// import Signin from '../pages/signin';
import '../css/home.css';
// import Fabric_Single from '../pages/fabric_single.js';
// import Fabric_Display from '../pages/fabric_display';
// import Fabric_Upload from '../pages/fabric_upload';
// import Fabric_Upload_Select from '../pages/fabric_upload_select';
// import visitRwanda from '../pages/visitRwanda2';
// import notFound from '../pages/404';
// import student_discount from '../pages/student_discount';
// import GiftCard from '../pages/gift_card.js';
// import Cart from '../pages/cart.js';
// import Delivery from '../pages/delivery_final.js';
// import Company from '../pages/company';
// import About from '../pages/about';
// import PointOfSale from '../pages/point_of_sale';
// import DashBoard from '../pages/dashboard/dashboard';
// import FlashDeals from '../pages/dashboard/flashdeals';
// import Blog_Dashboard from '../pages/dashboard/blog';
// import Trending from '../pages/dashboard/trending';
// import PreFabricUpload from '../pages/pre_fabirc_upload';
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
import DynamicLoad from './router_lazy_load';
import Happiness from '../pages/hapiness_guaranteed';
import Affiliates from '../pages/affiliates';
import Careers from '../pages/careers_opportunities';
import SocialResponsibility from '../pages/social_responsibility';
import Refer from '../pages/refer_a_friend';

const App = lazy(() => import('../App'));
// const Product = lazy(() => import('../pages/Product.js'));
const Product = (props) => (
    <DynamicLoad load={()=> import('../pages/Product')}>
        {
            (Component) => Component === null ? <p>you will hearr new</p> : <Component props= "...props"/>
        }
    </DynamicLoad>
)
const Upload = lazy(() => import('../pages/upload'));
const Blog = lazy(() => import('../pages/blog'));
const Post = lazy(() => import('../pages/post'));
const Wholesale = lazy(() => import('../pages/wholesale'));
const Search = lazy(() => import('../pages/search'));
const Help = lazy(() => import('../pages/help'));
const Contact = lazy(() => import('../pages/contact'));
const Info = lazy(() => import('../pages/info'));
const M2M2 = lazy(() => import('../pages/m2m2'));
const Gallery = lazy(() => import('../App'));
const WholesaleQuote = lazy(() => import('../App'));
const Signin = lazy(() => import('../App'));
const Fabric = lazy(() => import('../App'));
const Fabric_Single = lazy(() => import('../pages/fabric_single'));
const Fabric_Display = lazy(() => import('../pages/fabric_display'));
const Fabric_Upload = lazy(() => import('../pages/fabric_upload'));
const Fabric_Upload_Select = lazy(() => import('../pages/fabric_upload_select'));
const visitRwanda = lazy(() => import('../pages/visitRwanda2'));
const notFound = lazy(() => import('../pages/404'));
const GiftCard = lazy(() => import('../pages/gift_card'));
const student_discount = lazy(() => import('../pages/student_discount'));
const Cart = lazy(() => import('../pages/cart'));
const Delivery = lazy(() => import('../pages/delivery_final'));
const Company = lazy(() => import('../pages/company'));
const About = lazy(() => import('../pages/about'));
const PointOfSale = lazy(() => import('../pages/point_of_sale'));
const DashBoard = lazy(() => import('../pages/dashboard/dashboard'));
const FlashDeals = lazy(() => import('../pages/dashboard/flashdeals'));
const Blog_Dashboard = lazy(() => import('../pages/dashboard/blog'));
const Trending = lazy(() => import('../pages/dashboard/trending'));
const PreFabricUpload = lazy(() => import('../pages/pre_fabirc_upload'));


const outer = () => (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
            <Route exact path={"/dev/company2"} component={Company2} />
            {/* <Route exact path={"/"} component={ComingSoon1}/> */}
            <Suspense fallback={<p>Loading...</p>}>
            <Route exact path={"/dev/12hdgsikdhlmsdne"} component={App} />
            </Suspense>
            <Suspense fallback={<p>Loading .. </p>}> 
            <Route exact path={"/dev/upload"} component={Upload} />
            </Suspense>

            <Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/blog/:nav"} component={Blog} />
</Suspense>

<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev"} component={ComingSoon1} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/blog/post/:blog_id/:blog_name"} component={Post} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/product/:slug/:number"} component={Product} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/wholesale/:slug/:number"} component={Wholesale} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/search/:query/category/:category_no"} component={Search} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/shop"} component={Search} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/contact"} component={Contact} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/help"} component={Help} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/points"} component={PointOfSale} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/info/:infocategory"} component={Info} />
</Suspense>
            {/* <Route exact path={"/dev/m2m"} component={M2M}/> */}
            <Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/size-guide"} component={SizeGuide} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/m2m2"} component={M2M2} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/gallery"} component={Gallery} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/quote"} component={WholesaleQuote} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/fabric"} component={Fabric} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/fabric_single"} component={Fabric_Single} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/fabric_search"} component={Fabric_Display} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/fabric/upload"} component={Fabric_Upload} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/fabric/create"} component={PreFabricUpload} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/fabric/upload/select/:fabric_id"} component={Fabric_Upload_Select} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/signin"} component={Signin} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/visit_rwanda"} component={visitRwanda} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/student_discount"} component={student_discount} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/gift_card"} component={GiftCard} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/cart"} component={Cart} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/delivery"} component={Delivery} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/company"} component={Company} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/company/about"} component={About} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/company/about2"} component={About2} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/admin/dashboard"} component={DashBoard} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/admin/dashboard/flashdeals"} component={FlashDeals} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/admin/dashboard/trending"} component={Trending} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/admin/dashboard/blog"} component={Blog_Dashboard} />
</Suspense>

<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/buyer_licence"} component={BuyerLicence} />
</Suspense>

<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/seller_licence"} component={SellerLicence} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/washcare"} component={WashCare} />
</Suspense>

<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/mik_kigali_fashion_week"} component={MIKKFW} />
</Suspense>

<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/sitemap"} component={SiteMap} />
</Suspense>

<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/locations/remera_corner"} component={MIKRemera} />
</Suspense>

<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/happiness_guaranteed"} component={Happiness} />
</Suspense>

<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/affiliates"} component={Affiliates} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/careers&Opportunities"} component={Careers} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/socialresponsibility"} component={SocialResponsibility} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route exact path={"/dev/refer_a_friend"} component={Refer} />
</Suspense>
<Suspense fallback={<p>Loading</p>}> 

            <Route component={notFound} />
</Suspense>
        </Switch>
    </Router>

);


export default outer;
