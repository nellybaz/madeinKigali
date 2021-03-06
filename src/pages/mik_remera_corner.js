import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
// import SimpleImageSlider from "react-simple-image-slider";
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
import otherPlaces from '../assets/images/rem-map.png';
import minusIcon from '../assets/images/icons/minus-circle-solid.svg';
import markerIcon from '../assets/images/icons/map-marker-alt-solid.svg';
import minusIconWhite from '../assets/images/icons/minus-circle-solid-white.svg';
import brand1Img from '../assets/images/rem-brands1.png';
import brand2Img from '../assets/images/rem-brands2.png';
import brand3Img from '../assets/images/rem-brands3.png';
import brand4Img from '../assets/images/rem-brands4.png';
import brand5Img from '../assets/images/rem-brands5.png';

import CombineWith from '../components/combine';
import GoogleMapReact from 'google-map-react';
import SimpleImageSlider from '../components/ImageSlider';


import Footer from '../components/footer';
import SellerLicence from './seller_licence';


import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
const AnyReactComponent = ({ text }) => <div>{text}</div>;


function OtherLocations() {
    return (
        <div className='rem-other-store'>
            <div className='other-store-map'>
                <p className='other-store-label'>
                    <img style={{ objectFit: 'contain' }} src={markerIcon} />
                    <p >
                        <strong>Made In Kigali</strong><br />
                        Selfridges,<br />
                        400 Oxford St,<br />
                        Marylebone,<br />
                        London,<br />
                        W1A 1AB<br />
                    </p>
                </p>
                <img style={{ objectFit: 'contain' }} src={otherPlaces} />
            </div>
        </div>
    )
}

function BeautyServices() {
    return (
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
    )
}

let slidesWidth = window.innerWidth;
class MIKRemera extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    
    constructor(props) {
        console.log(slidesWidth);
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        // console.log(this.state.width/783.0)
        slidesWidth = this.state.width/4;
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        slidesWidth = this.state.width/3.5;
        // console.log(this.state.width)
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
            { url: slide3 },
            { url: slide4 },
            { url: slide5 },
            { url: slide6 },
        ];
        
        // if (isMobile) {
        //     slidesWidth = 50;
        //      }
        //      else if (isBrowser){
        //         //  slidesWidth=;
        //      }

             

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
                                MADEINKIGALI AT REMERA CORNER
                        </h1>
                            <hr className='remA-hr' />
                            <p className='remA-desc-text'>
                                214 OXFORD STREET, <br />
                                LONDON, W1C 1DA <br /><br />
                                03448 487487
                        </p>
                            <div className='remB-btn'><button>GET DIRECTIONS</button></div>

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
                                <div className='remB-desc-loc'>
                                    <img style={{ objectFit: 'contain' }} src={minusIcon} />

                                    Remera Street
                            <img style={{ marginLeft: '2vw', backgroundColor: 'blue', objectFit: 'contain' }} src={minusIconWhite} />
                                    <img style={{ backgroundColor: 'gold', objectFit: 'contain' }} src={minusIconWhite} />
                                    <img style={{ backgroundColor: 'red', objectFit: 'contain' }} src={minusIconWhite} />
                                </div>
                                <div className='remB-desc-loc'>
                                    <img style={{ objectFit: 'contain' }} src={minusIcon} />

                                    Remera Street
                            <img style={{ marginLeft: '5.5vw', backgroundColor: 'gray', objectFit: 'contain' }} src={minusIconWhite} />
                                    <img style={{ backgroundColor: 'red', objectFit: 'contain' }} src={minusIconWhite} />
                                </div>
                                <div className='remB-desc-loc'>
                                    <img style={{ objectFit: 'contain' }} src={minusIcon} />

                                    Remera Street
                            <img style={{ marginLeft: '5.5vw', backgroundColor: 'black', objectFit: 'contain' }} src={minusIconWhite} />
                                    <img style={{ backgroundColor: 'red', objectFit: 'contain' }} src={minusIconWhite} />
                                </div>


                            </p>
                            <div className='remB-btn'><button>GET DIRECTIONS</button></div>

                        </div>
                        <div className='remB-map' >
                            <div style={{ height: 'inherit', width: 'inherit', }}>
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
                                <hr className='rem-hr' />
                            </h2>

                            <p className='remC-text'>
                                WIth three floors and 90,000 sq ft - that's the equivalent of 1,800 Kigali busses standing end to end - MIK Remera Corner  is more than just your average. WIth three floors and 90,000 sq ft - that's the equivalent of 1,800 Kigali busses standing end to end
                        <br /><br />
                                WIth three floors and 90,000 sq ft - that's the equivalent of 1,800 Kigali busses standing end to end - MIK Remera Corner  is more than just your average.

                                WIth three floors and 90,000 sq ft - that's the equivalent of 1,800 Kigali busses standing end to end - MIK Remera Corner  is more than just your average.
                        </p>
                        </div>

                        <div className='remC-slides'>
                            <SimpleImageSlider 
                    width={783}
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
                                <img style={{ objectFit: 'contain' }} src={brand1Img} />
                                <img style={{ objectFit: 'contain' }} src={brand2Img} />
                                <img style={{ objectFit: 'contain' }} src={brand3Img} />
                                <img style={{ objectFit: 'contain' }} src={brand4Img} />
                                <img style={{ objectFit: 'contain' }} src={brand5Img} />

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

                                <h2 className='drop-it-title'><strong style={{ fontSize: '2.3vw', }}>Drop</strong><em style={{ fontSize: '2.3vw', paddingRight: '2vw', }}>it</em> YOU SHOP. YOU DROP. WE DELIVER.</h2>

                                <p className='drop-it-text'>
                                    Visit our Remera Corner store and have your shopping delivered home

                        <button>DOWNLOAD THE APP NOW</button>
                                </p>

                            </div>

                            <h2 className='remD-sub-title'>
                                BEAUTY SERVICES
                        <hr className='rem-hr' />
                            </h2>

                            <section className="remE">
                           

                                <BeautyServices />
                                <BeautyServices />
                                <BeautyServices />
                                <BeautyServices />
                                <BeautyServices />
                                <BeautyServices />

                            </section>

                            <h2 className='remD-sub-title'>
                                FOOD AND DRINK SERVICES
                        <hr className='rem-hr' />
                            </h2>
                            <div className='food-drink'>

                                <img style={{ objectFit: 'contain' }} src={brand1Img} />
                                <img style={{ objectFit: 'contain' }} src={brand2Img} />
                                <img style={{ objectFit: 'contain' }} src={brand3Img} />

                                {/* Images for drinks brands */}

                            </div>
                            <hr className='rem-sep' />
                            <h2 className='remD-sub-title'>
                                OTHER STORES NEARBY...
                        <hr className='rem-hr' />
                            </h2>

                            <div className='other-stores'>
                                <OtherLocations />
                                <OtherLocations />
                                <OtherLocations />
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
