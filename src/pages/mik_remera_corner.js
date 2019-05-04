import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
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
import otherPlaces from '../assets/images/rem-map.png';
import minusIcon from '../assets/images/icons/minus-circle-solid.svg';
import markerIcon from '../assets/images/icons/map-marker-alt-solid.svg';
import minusIconWhite from '../assets/images/icons/minus-circle-solid-white.svg';
import brand1Img from '../assets/images/rem-brands1.png';
import brand2Img from '../assets/images/rem-brands2.png';
import brand3Img from '../assets/images/rem-brands3.png';
import brand4Img from '../assets/images/rem-brands4.png';
import brand5Img from '../assets/images/rem-brands5.png';

import GoogleMapReact from 'google-map-react';

import Footer from '../components/footer';


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

    constructor(props) {
        super(props);
        this.state = {
            slideIndex :1,
        // myTimer :4000
        }

    }
// showSlides(slideIndex)

    plusSlides=(n)=>{
        console.log(n + " " + this.state.slideIndex + " " + this.state.myTimer);
        
        clearInterval(this.state.myTimer);
        this.showSlides(this.state.slideIndex += n);

        if (n = -1) {
            this.state.myTimer = setInterval(() => { this.plusSlides(n + 2); }, 4000);
        } else {
            this.state.myTimer = setInterval(() => { this.plusSlides(n + 1); }, 4000);
        }
    }

    componentDidMount=()=> {
        this.showSlides(this.state.slideIndex);
        this.state.myTimer = setInterval(() => { this.plusSlides(1); }, 4000);
    }

    currentSlide=(n)=>{
        clearInterval(this.state.myTimer);
        this.showSlides(this.state.slideIndex = n);

        if (n = -1) {
            this.state.myTimer = setInterval(() => { this.plusSlides(n + 2); }, 4000);
        } else {
            this.state.myTimer = setInterval(() => { this.plusSlides(n + 1); }, 4000);
        }
    }

    showSlides=(n)=>{
        var i;
        var slides = document.getElementsByClassName("rem-slide-img");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { this.state.slideIndex = 1 }
        if (n < 1) { this.state.slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.state.slideIndex - 1].style.display = "block";
        dots[this.state.slideIndex - 1].className += " active";
    }


    static defaultProps = {
        center: {
            lat: -1.948840,
            lng: 30.077600
        },
        zoom: 13
    };


    render() {

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
                            <img className="rem-icon-left1" style={{ backgroundColor: '#0080FF', objectFit: 'contain' }} src={minusIconWhite} />
                                    <img style={{ backgroundColor: '#D4AF37', objectFit: 'contain' }} src={minusIconWhite} />
                                    <img style={{ backgroundColor: '#DC143C', objectFit: 'contain' }} src={minusIconWhite} />
                                </div>
                                <div className='remB-desc-loc'>
                                    <img style={{ objectFit: 'contain' }} src={minusIcon} />

                                    Remera Street
                            <img className="rem-icon-left2" style={{ backgroundColor: '#696969', objectFit: 'contain' }} src={minusIconWhite} />
                                    <img style={{ backgroundColor: '#DC143C', objectFit: 'contain' }} src={minusIconWhite} />
                                </div>
                                <div className='remB-desc-loc'>
                                    <img style={{ objectFit: 'contain' }} src={minusIcon} />

                                    Remera Street
                            <img className="rem-icon-left2" style={{ backgroundColor: 'black', objectFit: 'contain' }} src={minusIconWhite} />
                                    <img style={{ backgroundColor: '#DC143C', objectFit: 'contain' }} src={minusIconWhite} />
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
                        <div className='slides-container'>
                            <div className='rem-slide-img'>
                                <img style={{ width: '100%', objectFit: 'contain' }} src={slide1} />
                            </div>
                            <div className='rem-slide-img fade'>
                                <img style={{ width: '100%', objectFit: 'contain' }} src={slide2} />
                            </div>
                            <div className='rem-slide-img fade'>
                                <img style={{ width: '100%', objectFit: 'contain' }} src={slide3} />
                            </div>
                            <div className='rem-slide-img fade'>
                            <img style={{ width: '100%', objectFit: 'contain' }} src={slide4} />
                            </div>
                            <div className='rem-slide-img fade'>
                                <img style={{ width: '100%', objectFit: 'contain' }} src={slide5} />
                            </div>
                            <div className='rem-slide-img fade '>
                                <img style={{ width: '100%', objectFit: 'contain' }} src={slide6} />
                            </div>
        <a className="prev" onClick={() => { this.plusSlides(-1) }}>
        {/* React.Fragments -> <>&#10094;</> */}
        {'<'}
        </a>
                            <a className="next" onClick={() => { this.plusSlides(1) }}>
                            {/* {'&#10095'} */}
                            {'>'}
                            </a>
                            <br />
                        </div>

                        <div className="rem-dot-container" >
                        <span className="dot" onClick={() => { this.currentSlide(1) }}></span>
                            <span className="dot" onClick={() => { this.currentSlide(2) }}></span>
                            <span className="dot" onClick={() => { this.currentSlide(3) }}></span>
                            <span className="dot" onClick={() => { this.currentSlide(4) }}></span>
                            <span className="dot" onClick={() => { this.currentSlide(5) }}></span>
                            <span className="dot" onClick={() => { this.currentSlide(6) }}></span>
                        </div>
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
