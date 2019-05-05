import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../css/pages/mik_kfw.css';
import Header from '../components/header';
import Footer from '../components/footer';

class MIKKFW extends Component {
    render() {
        return (
            <div style={{ background: 'white' }}>
                <Header />
                <section className="kfw-section">
                    <h1 className="kfw-title">
                    MADE IN KIGALI
                    </h1>
                    <h1 className="kfw-mid-title">
                    SUPPORTS
                    </h1>
                    <h1 className="kfw-sub-title">
                    KIGALI FASHION WEEK
                    </h1>

                    <hr className="kfw-hr"/>
                    

                    <p className="kfw-p">
                    For Kigali Fashion Week February 2018, we supported designers Molly Goddard, House of Holland, Preen <br />
                    by Thornton Bregazzi, Fashion East, Nicopanda and Shrimps at a new show space on Covent Garden’s <br />
                    Floral Street. We also hosted exclusive fashion talks and events at our London flagship store, including 
                    <br />trend talks with broadcaster and style maven Laura Jackson. London Fashion Week will be back in 
                    <br />September, but you can discover the latest trends to arrive at Topshop.com here. Sign up to our<br />
                     newsletter to be the first to know about our future partnerships.
                    </p>

                </section>


                <Footer />

            </div>

        );
    }
}

export default withRouter(MIKKFW);
