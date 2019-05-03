import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/mik_card.css';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerImg1 from '../assets/images/card-transparent1.png'
import BannerImg2 from '../assets/images/card-transparent2.png'

class MIKCard extends Component {


    render() {

        return (
            <div style={{ background: 'white' }}>
                <Header />
                {/* Top banner */}
                <h1 className='mik-card-banner-text'>THE MADEINKIGALI CARD</h1>

                <section className="mik-card-banner">
                   <img className="mik-card-bannerImg1" style={{ objectFit: 'contain' }} src={BannerImg1} />
                    <img className="mik-card-bannerImg2" style={{ objectFit: 'contain' }} src={BannerImg2} />
                </section>
                

                {/* The real card */}
                <div className='mik-card-triangle-up'></div>
                <section className="mik-card-card">

                    <h2 className="mik-card-sub-title">MANAGE YOUR</h2>
                    <h1 className="mik-card-title">ACCOUNT ONLINE</h1>

                    <p className='mik-card-p'>
                        WE'VE MADE IT REALLY EASY TO KEEP TRACK OF YOUR MIK CARD.
                </p>

                    <p className='mik-card-p'>
                        YOU CAN CHECK YOUR BALANCE, MAKE PAYMENTS AND VIEW TRANSACTIONS ONLINE,
                        24 HOURS A DAY - THAT'S EVERYTHING YOU NEED IN A COUPLE OF CLICKS!
                </p>

                    <p className='mik-card-p'>
                        DON'T FORGET YOU CAN GO GREEN BY CHOOSING TO RECEIVE YOUR STATEMENTS ONLINE INSTEAD OF ON PAPER.
                </p>
                    <div className='mik-card-btn-div'>

                        <button className="mik-card-btn">
                            MANAGE YOUR ACCOUNT
                </button>
                    </div>
                </section>

                <section className="mik-card-bottom">
                    <div className='mik-card-bottom-bar'>
                        <Link className="mik-card-bottom-bar-link" to={'#'}>CONTACT US AND FAQS</Link>
                        <Link className="mik-card-bottom-bar-link" to={'#'}>LEGAL NOTICE</Link>

                    </div>
                    <div className='mik-card-bottom-text'>
                        <p className='mik-card-bottom-small-text'>
                            Credit only available to over 18s and subject to status is powered by NewDay Ltd. NewDay Ltd is a company registered in England and Wales with registered
                            number 7297722, registered office: Two Pancras Square, London, N1C 4AG. NewDay Ltd is authorised and regulated by the Financial Conduct Authority with
                            number 690292 and is also authorised by the Financial Conduct Authority under the Payment Services Regulations 2009 (Ref no: 555318) for the provision
                            of payment services. The retailer, Top Shop / Top Man Limited trading as Topshop, acts solely as a credit broker and provides credit products from NewDay Ltd
                            on a non-exclusive basis and is authorised and regulated by the Financial Conduct Authority with number 679741. Registered office: Colegrave House,
                            70 Berners Street, London, United Kingdom, WIT 3NL. Registered in England and Wales. Registered number 02317752.
                    </p>
                    </div>
                </section>


                <Footer />

            </div>

        );
    }
}

export default withRouter(MIKCard);
