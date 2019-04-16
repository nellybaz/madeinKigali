import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/mik_remera_corner.css';
import Header from '../components/header';
import rem from '../assets/images/about/remera_corner.png';
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

  constructor(props){
    super(props);
    this.state={
        
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

        return (
            <div style={{ background: 'white' }}>
                <Header />
                <section className="remContainer">

                    {/* External big container */}
                    <section className="remA">
                        <div className='remA1'>
                            <img style={{ width: '100%', objectFit: 'contain' }} src={rem} />

                        </div>
                        <div className='remA2'>
                            <h1 className='remA2title'>
                                TOPSHOP AT OXFORD CIRCUS
                        </h1>
                            <p className='remA2text'>
                                214 OXFORD STREET, <br />
                                LONDON, W1C 1DA <br /><br />
                                03448 487487
                        </p>

                        </div>
                        <div className='remA3'>
                            <h2 className='remAsub'>
                                OPENING HOURS
                            </h2>
                            <p className='remAdesc'>
                                Mon - Fri: 09.30 - 22.00 <br />
                                Sat: 09.00 - 22.00 <br />
                                Sun: 11.30 - 18.00 <br />
                            </p>
                        </div>


                        <div className='remA4'>
                        <h2 className='remAsub'>
                        MAP AND DIRECTIONS 
                            </h2>
                            <p className='remAdesc'>
                                Remera Street <br />
                                Remera Street<br />
                                Remera Street <br />
                            </p>
                            <button>GET DIRECTIONS</button>
                </div>
                        <div className='remA5'>
                        <div style={{ height: '300px', width: '50%', marginLeft:'30px', marginTop:'30px', border: '2px solid black' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCMRJ7kiGqluy7WJRc43vd6LxyvOtt_6OE'}}
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
                        <div className='remA6'>
                            This is A desc
                </div>
                        <div className='remA7'>
                            This is A desc
                </div>
                    </section>




                    <section className="remB">
                        <div className='remBBox'>
                            <div className='remBimg'>
                                {/* Image */}
                            </div>
                            <div className='remBdesc'>
                                <h5>HERSHESONS</h5>
                                <h7>Blow Dry Bar</h7> <br />
                                0207 927 7888
                            </div>
                        </div>
                        <div className='remBBox'>
                            <div className='remBimg'>
                                {/* Image */}
                            </div>
                            <div className='remBdesc'>
                                <h5>HERSHESONS</h5>
                                <h7>Blow Dry Bar</h7> <br />
                                0207 927 7888
                            </div>
                        </div>
                        <div className='remBBox'>
                            <div className='remBimg'>
                                {/* Image */}
                            </div>
                            <div className='remBdesc'>
                                <h5>HERSHESONS</h5>
                                <h7>Blow Dry Bar</h7> <br />
                                0207 927 7888
                            </div>
                        </div>
                        <div className='remBBox'>
                            <div className='remBimg'>
                                {/* Image */}
                            </div>
                            <div className='remBdesc'>
                                <h5>HERSHESONS</h5>
                                <h7>Blow Dry Bar</h7> <br />
                                0207 927 7888
                            </div>
                        </div>
                        <div className='remBBox'>
                            <div className='remBimg'>
                                {/* Image */}
                            </div>
                            <div className='remBdesc'>
                                <h5>HERSHESONS</h5>
                                <h7>Blow Dry Bar</h7> <br />
                                0207 927 7888
                            </div>
                        </div>
                        <div className='remBBox'>
                            <div className='remBimg'>
                                {/* Image */}
                            </div>
                            <div className='remBdesc'>
                                <h5>HERSHESONS</h5>
                                <h7>Blow Dry Bar</h7> <br />
                                0207 927 7888
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
