import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import SimpleImageSlider from "react-simple-image-slider";
import '../css/pages/mik_remera_corner.css';
import Header from '../components/header';
import rem from '../assets/images/about/remera_corner.png';
import slide1 from '../assets/images/slide1.jpeg';
import slide2 from '../assets/images/slide2.jpeg';
import slide3 from '../assets/images/slide3.jpeg';
import slide4 from '../assets/images/slide4.jpeg';
import slide5 from '../assets/images/slide5.jpeg';
import slide6 from '../assets/images/slide6.jpeg';
import remStore from '../assets/images/store.jpg';
import benugo from '../assets/images/benugo.png';
import lolas from '../assets/images/lolas.png';
import bubbleology from '../assets/images/bubleology.png';

import CombineWith from '../components/combine';
import GoogleMapReact from 'google-map-react';

import Footer from '../components/footer';
import SellerLicence from './seller_licence';


import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class MIKRemera extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static defaultProps = {
        center: {
            lat: -1.948840,
            lng: 30.077600
        },
        zoom: 13
    };


    render() {
        const images = [
            { url: slide1 },
            { url: slide2 },
            { url: slide3},
            { url: slide4 },
            { url: slide5 },
            { url: slide6},
        ];

        return (
            <div style={{ background: 'white' }}>
                <Header />

                {/* section containing everything */}

                <section className="remContainer">

                    <section className="remA">

                        <img style={{ width: '100%', objectFit: 'contain' }} src={rem} />
                        {/* First row of a grid */}
                        <div className='remA-desc'>
                            <h1 className='remA-desc-title'>
                                MADE IN KIGALI AT REMERA CORNER
                        </h1>
                            <p className='remA-desc-text'>
                                214 OXFORD STREET, <br />
                                LONDON, W1C 1DA <br /><br />
                                03448 487487
                        </p>

                        </div>

                        {/* Second row of a grid */}
                        <div className='remB'>
                            <h2 className='remB-sub-title'>
                                OPENING HOURS
                                <hr className="remB-hr" />
                            </h2>

                            <p className='remB-desc'>
                                Mon - Fri: 09.30 - 22.00 <br />
                                Sat: 09.00 - 22.00 <br />
                                Sun: 11.30 - 18.00 <br />
                            </p>
                        </div>


                        <div className='remB'>
                            <h2 className='remB-sub-title'>
                                MAP AND DIRECTIONS
                                <hr className="remB-hr" />
                            </h2>
                            <p className='remB-desc'>
                                Remera Street <br />
                                Remera Street<br />
                                Remera Street <br />
                            </p>
                            <button>GET DIRECTIONS</button>
                        </div>
                        <div className='remB-map' >
                            <div style={{ height: '30vw', width: 'inherit', }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: 'AIzaSyCMRJ7kiGqluy7WJRc43vd6LxyvOtt_6OE' }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                >
                                    <AnyReactComponent
                                        lat={-1.948840}
                                        lng={30.077600}
                                        text={'MADE IN KIGALI'}
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>

                        {/* Third row of a grid */}
                        <div className='remC'>
                            <h2 className='remC-sub-title'>
                                MORE THAN JUST A STORE
                        </h2>

                            <p className='remC-text'>
                                WIth three floors and 90,000 sq ft - that's the equivalent of 1,800 Kigali busses standing end to end - MIK Remera Corner  is more than just your average.
                        <br />
                                WIth three floors and 90,000 sq ft - that's the equivalent of 1,800 Kigali busses standing end to end - MIK Remera Corner  is more than just your average.
                        </p>
                        </div>

                        <div className='remC-slides'>
                        <SimpleImageSlider
                    width={807}
                    height={396}
                    images={images}
                />

                            {/* Sliding Images */}
                        </div>

                        <div className='remD'>
                            <div className='remD-top-bar'>
                                <h2 className='remD-sub-title'>
                                    BRANDS AVAILABLE
                        <hr className='rem-hr' />
                                </h2>
                                <button className='remD-button'>SHOP ALL BRANDS</button>
                            </div>

                            <div className='remD-brands'>
                            <img style={{ width: '100%', objectFit: 'contain' }} src={benugo} />
                            <img style={{ width: '100%', objectFit: 'contain' }} src={lolas} />
                            <img style={{ width: '100%', objectFit: 'contain' }} src={bubbleology} />

                                {/* Imgafes for brands available */}
                                

                            </div>

                            <h2 className='remD-sub-title'>
                                STORE SERVICES
                            <hr className='rem-hr' />
                            </h2>
                            <div className='remD-store-services'>
                                <h3 className='store-service'>MIK PERSONAL SHOPPING</h3>
                                <h3 className='store-service'>CLICK AND COLLECT</h3>
                                <h3 className='store-service'>STUDENT DISCOUNT 10% OFF</h3>
                                <h3 className='store-service'>ORDER IN STORE</h3>
                                <h3 className='store-service'>IN-STORE STYLIST</h3>
                            </div>

                            <div className='drop-it'>

                                <h2 className='drop-it-title'><strong style={{fontSize :'2.5vw',}}>Drop</strong><em style={{fontSize :'2.5vw', paddingRight:'2vw',}}>it</em> YOU SHOP. YOU DROP. WE DELIVER.</h2>

                                <p className='drop-it-text'>
                                    Visit our Remera Corner store and have your shoppin gdelivered home

                        <button>DOWNLOAD THE APP NOW</button>
                                </p>

                            </div>

                            <h2 className='remD-sub-title'>
                                BEAUTY SERVICES
                        <hr className='rem-hr' />
                            </h2>

                            <section className="remE">
                                <div className='remEBox'>
                                    <div className='remEimg'>
                                        {/* Image */}
                                        <img style={{ width: '100%', objectFit: 'contain' }} src={remStore} />
                                    </div>
                                    <div className='remEdesc'>
                                        <h5>HERSHESONS</h5>
                                        <h7>Blow Dry Bar</h7> <br />
                                        0207 927 7888
                            </div>
                                </div>
                                <div className='remEBox'>
                                    <div className='remEimg'>
                                    <img style={{ width: '100%', objectFit: 'contain' }} src={remStore} />
                                    
                                        {/* Image */}
                                    </div>
                                    <div className='remEdesc'>
                                        <h5>HERSHESONS</h5>
                                        <h7>Blow Dry Bar</h7> <br />
                                        0207 927 7888
                            </div>
                                </div>
                                <div className='remEBox'>
                                    <div className='remEimg'>
                                    <img style={{ width: '100%', objectFit: 'contain' }} src={remStore} />
                                     {/* Image */}
                                    </div>
                                    <div className='remEdesc'>
                                        <h5>HERSHESONS</h5>
                                        <h7>Blow Dry Bar</h7> <br />
                                        0207 927 7888
                            </div>
                                </div>
                                <div className='remEBox'>
                                    <div className='remEimg'>
                                    <img style={{ width: '100%', objectFit: 'contain' }} src={remStore} />
                                     {/* Image */}
                                    </div>
                                    <div className='remEdesc'>
                                        <h5>HERSHESONS</h5>
                                        <h7>Blow Dry Bar</h7> <br />
                                        0207 927 7888
                            </div>
                                </div>
                                <div className='remEBox'>
                                    <div className='remEimg'>
                                    <img style={{ width: '100%', objectFit: 'contain' }} src={remStore} />
                                     {/* Image */}
                                    </div>
                                    <div className='remEdesc'>
                                        <h5>HERSHESONS</h5>
                                        <h7>Blow Dry Bar</h7> <br />
                                        0207 927 7888
                            </div>
                                </div>
                                <div className='remEBox'>
                                    <div className='remEimg'>
                                    <img style={{ width: '100%', objectFit: 'contain' }} src={remStore} />
                                     {/* Image */}
                                    </div>
                                    <div className='remEdesc'>
                                        <h5>HERSHESONS</h5>
                                        <h7>Blow Dry Bar</h7> <br />
                                        0207 927 7888
                            </div>
                                </div>


                            </section>

                            <h2 className='remD-sub-title'>
                                FOOD AND DRINK SERVICES
                        <hr className='rem-hr' />
                            </h2>
                            <div className='food-drink'>
                            <img style={{ width: '100%', objectFit: 'contain' }} src={benugo} />
                            <img style={{ width: '100%', objectFit: 'contain' }} src={lolas} />
                            <img style={{ width: '100%', objectFit: 'contain' }} src={bubbleology} />

                                {/* Images for drinks brands */}

                            </div>
                            <h2 className='remD-sub-title'>
                                OTHER STORES NEARBY...
                        <hr className='rem-hr' />
                            </h2>
                            <div className='other-stores'>
                                <div className='rem-other-store'>
                                    <div className='other-store-map'>
                                        <p className='label'>  
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p >
                                        <strong>Made In Kigali</strong><br />
                                            Selfridges,<br />
                                            400 Oxford St,<br />
                                            Marylebone,<br />
                                            London,<br />
                                            W1A 1AB<br />
                                        </p>
                                           
                                            </p>
                                            <hr/>
                                            <i class="fas fa-map-marked"></i>
                                    </div>
                                </div>
                                <div className='rem-other-store'>
                                    <div className='other-store-map'>
                                        <p className='label'>  
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p >
                                        <strong>Made In Kigali</strong><br />
                                            Selfridges,<br />
                                            400 Oxford St,<br />
                                            Marylebone,<br />
                                            London,<br />
                                            W1A 1AB<br />
                                        </p>
                                           
                                            </p>
                                            <hr/>
                                            <i class="fas fa-map-marked"></i>
                                    </div>
                                </div>
                                <div className='rem-other-store'>
                                    <div className='other-store-map'>
                                        <p className='label'>  
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p >
                                        <strong>Made In Kigali</strong><br />
                                            Selfridges,<br />
                                            400 Oxford St,<br />
                                            Marylebone,<br />
                                            London,<br />
                                            W1A 1AB<br />
                                        </p>
                                           
                                            </p>
                                            <hr/>
                                            <i class="fas fa-map-marked"></i>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>




                </section>


                <Footer />

            </div>

        );
    }
}

export default withRouter(MIKRemera);
