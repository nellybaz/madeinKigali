import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
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

const App = lazy(() => import('../App')); 


const outer = () => (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
            {/* <Route exact path={"/dev/company2"} component={Company2} /> */}
            {/* <Route exact path={"/"} component={ComingSoon1}/> */}
            <Suspense fallback={<p>Loading...</p>}>
            <Route exact path={"/dev/12hdgsikdhlmsdne"} component={App} />
            </Suspense>
            
        </Switch>
    </Router>

);


export default outer;
