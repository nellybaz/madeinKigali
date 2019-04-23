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
                <Header />
                <section className="sitemap-section">

                    <p className="sitemap-title">SITE MAP</p>
                    <hr />

                    {/* Categories starts here */}
                    <div className="sitemap-container">
                        <div className="sitemap-col">


                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    NEW IN
                    </h1>
                                <li><Link to={'/dev/#'}>New In Fashion</Link></li>
                                <li><Link to={'/dev/#'}>New In Dresses</Link></li>
                                <li><Link to={'/dev/#'}>New In Lingerie & Swim</Link></li>
                                <li><Link to={'/dev/#'}>New In Shoes</Link></li>
                                <li><Link to={'/dev/#'}>New In Bags & Accessories</Link></li>
                                <li><Link to={'/dev/#'}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={'/dev/#'}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    DENIM
                    </h1>
                                <li><Link to={'/dev/#'}>All Denim</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Denim Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Tops</Link></li>
                                <li><Link to={'/dev/#'}>Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Denim Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    SHORTS
                    </h1>
                                <li><Link to={'/dev/#'}>All Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Tops</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    LINGERIE
                    </h1>
                                <li><Link to={'/dev/#'}>All Lingerie</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Tops</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Lingerie Jackets</Link></li>

                            </div>



                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    GOING OUT
                    </h1>
                                <li><Link to={'/dev/#'}>Going Out Tops</Link></li>
                                <li><Link to={'/dev/#'}> All Going Out Clothes</Link></li>
                                <li><Link to={'/dev/#'}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}> Going Out Skirts</Link></li>
                            </div>

                        </div>

                        <div className="sitemap-col">


                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    NEW IN
</h1>
                                <li><Link to={'/dev/#'}>New In Fashion</Link></li>
                                <li><Link to={'/dev/#'}>New In Dresses</Link></li>
                                <li><Link to={'/dev/#'}>New In Lingerie & Swim</Link></li>
                                <li><Link to={'/dev/#'}>New In Shoes</Link></li>
                                <li><Link to={'/dev/#'}>New In Bags & Accessories</Link></li>
                                <li><Link to={'/dev/#'}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={'/dev/#'}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    DENIM
</h1>
                                <li><Link to={'/dev/#'}>All Denim</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Denim Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Tops</Link></li>
                                <li><Link to={'/dev/#'}>Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Denim Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    SHORTS
</h1>
                                <li><Link to={'/dev/#'}>All Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Tops</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    LINGERIE
</h1>
                                <li><Link to={'/dev/#'}>All Lingerie</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Tops</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Lingerie Jackets</Link></li>

                            </div>



                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    GOING OUT
</h1>
                                <li><Link to={'/dev/#'}>Going Out Tops</Link></li>
                                <li><Link to={'/dev/#'}> All Going Out Clothes</Link></li>
                                <li><Link to={'/dev/#'}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}> Going Out Skirts</Link></li>
                            </div>

                        </div>

                        <div className="sitemap-col">


                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    NEW IN
</h1>
                                <li><Link to={'/dev/#'}>New In Fashion</Link></li>
                                <li><Link to={'/dev/#'}>New In Dresses</Link></li>
                                <li><Link to={'/dev/#'}>New In Lingerie & Swim</Link></li>
                                <li><Link to={'/dev/#'}>New In Shoes</Link></li>
                                <li><Link to={'/dev/#'}>New In Bags & Accessories</Link></li>
                                <li><Link to={'/dev/#'}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={'/dev/#'}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    DENIM
</h1>
                                <li><Link to={'/dev/#'}>All Denim</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Denim Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Tops</Link></li>
                                <li><Link to={'/dev/#'}>Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Denim Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    SHORTS
</h1>
                                <li><Link to={'/dev/#'}>All Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Tops</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    LINGERIE
</h1>
                                <li><Link to={'/dev/#'}>All Lingerie</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Tops</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Lingerie Jackets</Link></li>

                            </div>



                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    GOING OUT
</h1>
                                <li><Link to={'/dev/#'}>Going Out Tops</Link></li>
                                <li><Link to={'/dev/#'}> All Going Out Clothes</Link></li>
                                <li><Link to={'/dev/#'}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}> Going Out Skirts</Link></li>
                            </div>








                        </div>
                        <div className="sitemap-col">


                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    NEW IN
                    </h1>
                                <li><Link to={'/dev/#'}>New In Fashion</Link></li>
                                <li><Link to={'/dev/#'}>New In Dresses</Link></li>
                                <li><Link to={'/dev/#'}>New In Lingerie & Swim</Link></li>
                                <li><Link to={'/dev/#'}>New In Shoes</Link></li>
                                <li><Link to={'/dev/#'}>New In Bags & Accessories</Link></li>
                                <li><Link to={'/dev/#'}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={'/dev/#'}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    DENIM
                    </h1>
                                <li><Link to={'/dev/#'}>All Denim</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Denim Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Tops</Link></li>
                                <li><Link to={'/dev/#'}>Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Denim Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    SHORTS
                    </h1>
                                <li><Link to={'/dev/#'}>All Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Tops</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    LINGERIE
                    </h1>
                                <li><Link to={'/dev/#'}>All Lingerie</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Tops</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Lingerie Jackets</Link></li>

                            </div>
                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    GOING OUT
                    </h1>
                                <li><Link to={'/dev/#'}>Going Out Tops</Link></li>
                                <li><Link to={'/dev/#'}> All Going Out Clothes</Link></li>
                                <li><Link to={'/dev/#'}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}> Going Out Skirts</Link></li>
                            </div>

                        </div>
                        <div className="sitemap-col">

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    NEW IN
</h1>
                                <li><Link to={'/dev/#'}>New In Fashion</Link></li>
                                <li><Link to={'/dev/#'}>New In Dresses</Link></li>
                                <li><Link to={'/dev/#'}>New In Lingerie & Swim</Link></li>
                                <li><Link to={'/dev/#'}>New In Shoes</Link></li>
                                <li><Link to={'/dev/#'}>New In Bags & Accessories</Link></li>
                                <li><Link to={'/dev/#'}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={'/dev/#'}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    DENIM
</h1>
                                <li><Link to={'/dev/#'}>All Denim</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Denim Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Tops</Link></li>
                                <li><Link to={'/dev/#'}>Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Denim Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Denim Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Denim Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    SHORTS
</h1>
                                <li><Link to={'/dev/#'}>All Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Tops</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Shorts Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Shorts Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    LINGERIE
</h1>
                                <li><Link to={'/dev/#'}>All Lingerie</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dungarees</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Skirts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Tops</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Shorts</Link></li>
                                <li><Link to={'/dev/#'}>Lingerie Dresses</Link></li>
                                <li><Link to={'/dev/#'}>Black Lingerie Jackets</Link></li>
                                <li><Link to={'/dev/#'}>Blue Lingerie Jackets</Link></li>

                            </div>
                            {/* ################################## */}
                            <div className="sitemap-categ1">
                                <h1 className="sitemap-category-name">
                                    GOING OUT
</h1>
                                <li><Link to={'/dev/#'}>Going Out Tops</Link></li>
                                <li><Link to={'/dev/#'}> All Going Out Clothes</Link></li>
                                <li><Link to={'/dev/#'}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={'/dev/#'}> Going Out Skirts</Link></li>
                            </div>
                        </div>

                    </div>
                </section>

                <Footer />

            </div>

        );
    }
}

export default withRouter(SiteMap);
