import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/mik_remera_corner.css';
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
                <section className="remContainer">

                    {/* External big container */}
                    <section className="remA">
                        <div className='remA1'>
                            This is A img
                </div>
                        <div className='remA2'>
                            This is A desc
                </div>
                        <div className='remA3'>
                            This is A desc
                </div>
                        <div className='remA4'>
                            This is A desc
                </div>
                        <div className='remA5'>
                            This is A desc
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
