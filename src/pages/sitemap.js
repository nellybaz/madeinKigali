import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/sitemap.css';
import Header from '../components/header';

import CombineWith from '../components/combine';
import Footer from '../components/footer';
import SellerLicence from './seller_licence';

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

class SiteMap extends Component {

    render() {

        return (
            <div style={{ background: 'white' }}>
                {/* <Header /> */}
                <section>

                    <p className="sitemap-title">SITE MAP</p>
                    <hr />

                    <div className="categ1">
                    <h1 className="category-name">
                    NEW IN
                    </h1>
                    <ul>
                        <li><Link to={"#"}>New In Fashion</Link></li>
                        <li><Link to={"#"}>New In Dresses</Link></li>
                        <li><Link to={"#"}>New In Lingerie & Swim</Link></li>
                        <li><Link to={"#"}>New In Shoes</Link></li>
                        <li><Link to={"#"}>New In Bags & Accessories</Link></li>
                        <li><Link to={"#"}>New In Petite, Tal & Maternity</Link></li>
                        <li><Link to={"#"}>New In Brands</Link></li>
                    </ul>
                    </div>


                </section>


                <Footer />

            </div>

        );
    }
}

export default withRouter(SiteMap);
