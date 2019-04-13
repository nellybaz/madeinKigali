import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/mik_kfw.css';
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

class MIKRemera extends Component {


    render() {

        return (
            <div style={{ background: 'white' }}>
                <Header />
                <section>
                 

                </section>


                <Footer />

            </div>

        );
    }
}

export default withRouter(MIKRemera);
