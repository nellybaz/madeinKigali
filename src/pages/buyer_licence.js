import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/licences.css';
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

class BuyerLicence extends Component {


    render() {

        return (
            <div style={{ background: 'white' }}>
                {/* <Header /> */}
                <section>

                    <div className="top-bar">

                        <Link className="_active" to={'#'}>Buyer Licence Agreement</Link>
                        <Link to={SellerLicence}>Seller Licence Agreement</Link>

                    </div>

                    <div className="terms">
                        <h1>Standard License (Non-exclusive)</h1>
                        <p>
                        Our Standard License allows you to use the design for digital and physical reproduction such as websites, ebooks, apps, software, books, magazines, posters, packaging and and other promotional/marketing media that is not for resale. The supplied downloadable file is a hi-resolution flat JPG file. Choosing an Extended or Premium License allows you do even more with the designs.
                        </p>

                        <h1>Extended License Options (Non-exclusive)</h1>
                        <p>
                            Our Extended License allows you to tailor the license to your requirements, choose from Items for Resale up to 500 units and Items for Resale + Unlimited Reproduction. The supplied downloadable file is a hi-resolution layered Photoshop PSD or Illustrator AI or EPS file (only on new and upgraded designs).
                        </p>
                        
                    </div>
                </section>


                <Footer />

            </div>

        );
    }
}

export default withRouter(BuyerLicence);
