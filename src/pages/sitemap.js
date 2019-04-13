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
                <section>

                    <p className="sitemap-title">SITE MAP</p>
                    <hr />

                    {/* Categories starts here */}
                    <div className="container">
                        <div className="col">


                            <div className="categ1">
                                <h1 className="category-name">
                                    NEW IN
                    </h1>
                                <li><Link to={"#"}>New In Fashion</Link></li>
                                <li><Link to={"#"}>New In Dresses</Link></li>
                                <li><Link to={"#"}>New In Lingerie & Swim</Link></li>
                                <li><Link to={"#"}>New In Shoes</Link></li>
                                <li><Link to={"#"}>New In Bags & Accessories</Link></li>
                                <li><Link to={"#"}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={"#"}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    DENIM
                    </h1>
                                <li><Link to={"#"}>All Denim</Link></li>
                                <li><Link to={"#"}>Denim Dungarees</Link></li>
                                <li><Link to={"#"}>Denim Midi Skirts</Link></li>
                                <li><Link to={"#"}>Denim Mini Skirts</Link></li>
                                <li><Link to={"#"}>Denim Skirts</Link></li>
                                <li><Link to={"#"}>Denim Tops</Link></li>
                                <li><Link to={"#"}>Denim Jackets</Link></li>
                                <li><Link to={"#"}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Denim Shorts</Link></li>
                                <li><Link to={"#"}>Denim Dresses</Link></li>
                                <li><Link to={"#"}>Black Denim Jackets</Link></li>
                                <li><Link to={"#"}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    SHORTS
                    </h1>
                                <li><Link to={"#"}>All Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dungarees</Link></li>
                                <li><Link to={"#"}>Shorts Midi Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Mini Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Tops</Link></li>
                                <li><Link to={"#"}>Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Shorts Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dresses</Link></li>
                                <li><Link to={"#"}>Black Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    LINGERIE
                    </h1>
                                <li><Link to={"#"}>All Lingerie</Link></li>
                                <li><Link to={"#"}>Lingerie Dungarees</Link></li>
                                <li><Link to={"#"}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Tops</Link></li>
                                <li><Link to={"#"}>Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Lingerie Shorts</Link></li>
                                <li><Link to={"#"}>Lingerie Dresses</Link></li>
                                <li><Link to={"#"}>Black Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Blue Lingerie Jackets</Link></li>

                            </div>



                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    GOING OUT
                    </h1>
                                <li><Link to={"#"}>Going Out Tops</Link></li>
                                <li><Link to={"#"}> All Going Out Clothes</Link></li>
                                <li><Link to={"#"}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}> Going Out Skirts</Link></li>
                            </div>

                        </div>

                        <div className="col">


                            <div className="categ1">
                                <h1 className="category-name">
                                    NEW IN
</h1>
                                <li><Link to={"#"}>New In Fashion</Link></li>
                                <li><Link to={"#"}>New In Dresses</Link></li>
                                <li><Link to={"#"}>New In Lingerie & Swim</Link></li>
                                <li><Link to={"#"}>New In Shoes</Link></li>
                                <li><Link to={"#"}>New In Bags & Accessories</Link></li>
                                <li><Link to={"#"}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={"#"}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    DENIM
</h1>
                                <li><Link to={"#"}>All Denim</Link></li>
                                <li><Link to={"#"}>Denim Dungarees</Link></li>
                                <li><Link to={"#"}>Denim Midi Skirts</Link></li>
                                <li><Link to={"#"}>Denim Mini Skirts</Link></li>
                                <li><Link to={"#"}>Denim Skirts</Link></li>
                                <li><Link to={"#"}>Denim Tops</Link></li>
                                <li><Link to={"#"}>Denim Jackets</Link></li>
                                <li><Link to={"#"}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Denim Shorts</Link></li>
                                <li><Link to={"#"}>Denim Dresses</Link></li>
                                <li><Link to={"#"}>Black Denim Jackets</Link></li>
                                <li><Link to={"#"}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    SHORTS
</h1>
                                <li><Link to={"#"}>All Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dungarees</Link></li>
                                <li><Link to={"#"}>Shorts Midi Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Mini Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Tops</Link></li>
                                <li><Link to={"#"}>Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Shorts Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dresses</Link></li>
                                <li><Link to={"#"}>Black Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    LINGERIE
</h1>
                                <li><Link to={"#"}>All Lingerie</Link></li>
                                <li><Link to={"#"}>Lingerie Dungarees</Link></li>
                                <li><Link to={"#"}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Tops</Link></li>
                                <li><Link to={"#"}>Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Lingerie Shorts</Link></li>
                                <li><Link to={"#"}>Lingerie Dresses</Link></li>
                                <li><Link to={"#"}>Black Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Blue Lingerie Jackets</Link></li>

                            </div>



                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    GOING OUT
</h1>
                                <li><Link to={"#"}>Going Out Tops</Link></li>
                                <li><Link to={"#"}> All Going Out Clothes</Link></li>
                                <li><Link to={"#"}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}> Going Out Skirts</Link></li>
                            </div>

                        </div>

                        <div className="col">


                            <div className="categ1">
                                <h1 className="category-name">
                                    NEW IN
</h1>
                                <li><Link to={"#"}>New In Fashion</Link></li>
                                <li><Link to={"#"}>New In Dresses</Link></li>
                                <li><Link to={"#"}>New In Lingerie & Swim</Link></li>
                                <li><Link to={"#"}>New In Shoes</Link></li>
                                <li><Link to={"#"}>New In Bags & Accessories</Link></li>
                                <li><Link to={"#"}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={"#"}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    DENIM
</h1>
                                <li><Link to={"#"}>All Denim</Link></li>
                                <li><Link to={"#"}>Denim Dungarees</Link></li>
                                <li><Link to={"#"}>Denim Midi Skirts</Link></li>
                                <li><Link to={"#"}>Denim Mini Skirts</Link></li>
                                <li><Link to={"#"}>Denim Skirts</Link></li>
                                <li><Link to={"#"}>Denim Tops</Link></li>
                                <li><Link to={"#"}>Denim Jackets</Link></li>
                                <li><Link to={"#"}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Denim Shorts</Link></li>
                                <li><Link to={"#"}>Denim Dresses</Link></li>
                                <li><Link to={"#"}>Black Denim Jackets</Link></li>
                                <li><Link to={"#"}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    SHORTS
</h1>
                                <li><Link to={"#"}>All Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dungarees</Link></li>
                                <li><Link to={"#"}>Shorts Midi Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Mini Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Tops</Link></li>
                                <li><Link to={"#"}>Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Shorts Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dresses</Link></li>
                                <li><Link to={"#"}>Black Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    LINGERIE
</h1>
                                <li><Link to={"#"}>All Lingerie</Link></li>
                                <li><Link to={"#"}>Lingerie Dungarees</Link></li>
                                <li><Link to={"#"}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Tops</Link></li>
                                <li><Link to={"#"}>Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Lingerie Shorts</Link></li>
                                <li><Link to={"#"}>Lingerie Dresses</Link></li>
                                <li><Link to={"#"}>Black Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Blue Lingerie Jackets</Link></li>

                            </div>



                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    GOING OUT
</h1>
                                <li><Link to={"#"}>Going Out Tops</Link></li>
                                <li><Link to={"#"}> All Going Out Clothes</Link></li>
                                <li><Link to={"#"}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}> Going Out Skirts</Link></li>
                            </div>








                        </div>
                        <div className="col">


                            <div className="categ1">
                                <h1 className="category-name">
                                    NEW IN
                    </h1>
                                <li><Link to={"#"}>New In Fashion</Link></li>
                                <li><Link to={"#"}>New In Dresses</Link></li>
                                <li><Link to={"#"}>New In Lingerie & Swim</Link></li>
                                <li><Link to={"#"}>New In Shoes</Link></li>
                                <li><Link to={"#"}>New In Bags & Accessories</Link></li>
                                <li><Link to={"#"}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={"#"}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    DENIM
                    </h1>
                                <li><Link to={"#"}>All Denim</Link></li>
                                <li><Link to={"#"}>Denim Dungarees</Link></li>
                                <li><Link to={"#"}>Denim Midi Skirts</Link></li>
                                <li><Link to={"#"}>Denim Mini Skirts</Link></li>
                                <li><Link to={"#"}>Denim Skirts</Link></li>
                                <li><Link to={"#"}>Denim Tops</Link></li>
                                <li><Link to={"#"}>Denim Jackets</Link></li>
                                <li><Link to={"#"}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Denim Shorts</Link></li>
                                <li><Link to={"#"}>Denim Dresses</Link></li>
                                <li><Link to={"#"}>Black Denim Jackets</Link></li>
                                <li><Link to={"#"}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    SHORTS
                    </h1>
                                <li><Link to={"#"}>All Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dungarees</Link></li>
                                <li><Link to={"#"}>Shorts Midi Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Mini Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Tops</Link></li>
                                <li><Link to={"#"}>Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Shorts Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dresses</Link></li>
                                <li><Link to={"#"}>Black Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    LINGERIE
                    </h1>
                                <li><Link to={"#"}>All Lingerie</Link></li>
                                <li><Link to={"#"}>Lingerie Dungarees</Link></li>
                                <li><Link to={"#"}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Tops</Link></li>
                                <li><Link to={"#"}>Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Lingerie Shorts</Link></li>
                                <li><Link to={"#"}>Lingerie Dresses</Link></li>
                                <li><Link to={"#"}>Black Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Blue Lingerie Jackets</Link></li>

                            </div>
                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    GOING OUT
                    </h1>
                                <li><Link to={"#"}>Going Out Tops</Link></li>
                                <li><Link to={"#"}> All Going Out Clothes</Link></li>
                                <li><Link to={"#"}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}> Going Out Skirts</Link></li>
                            </div>

                        </div>
                        <div className="col">


                            <div className="categ1">
                                <h1 className="category-name">
                                    NEW IN
</h1>
                                <li><Link to={"#"}>New In Fashion</Link></li>
                                <li><Link to={"#"}>New In Dresses</Link></li>
                                <li><Link to={"#"}>New In Lingerie & Swim</Link></li>
                                <li><Link to={"#"}>New In Shoes</Link></li>
                                <li><Link to={"#"}>New In Bags & Accessories</Link></li>
                                <li><Link to={"#"}>New In Petite, Tal & Maternity</Link></li>
                                <li><Link to={"#"}>New In Brands</Link></li>
                            </div>

                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    DENIM
</h1>
                                <li><Link to={"#"}>All Denim</Link></li>
                                <li><Link to={"#"}>Denim Dungarees</Link></li>
                                <li><Link to={"#"}>Denim Midi Skirts</Link></li>
                                <li><Link to={"#"}>Denim Mini Skirts</Link></li>
                                <li><Link to={"#"}>Denim Skirts</Link></li>
                                <li><Link to={"#"}>Denim Tops</Link></li>
                                <li><Link to={"#"}>Denim Jackets</Link></li>
                                <li><Link to={"#"}>Denim Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Denim Shorts</Link></li>
                                <li><Link to={"#"}>Denim Dresses</Link></li>
                                <li><Link to={"#"}>Black Denim Jackets</Link></li>
                                <li><Link to={"#"}>Blue Denim Jackets</Link></li>

                            </div>


                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    SHORTS
</h1>
                                <li><Link to={"#"}>All Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dungarees</Link></li>
                                <li><Link to={"#"}>Shorts Midi Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Mini Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Skirts</Link></li>
                                <li><Link to={"#"}>Shorts Tops</Link></li>
                                <li><Link to={"#"}>Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Shorts Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Shorts Shorts</Link></li>
                                <li><Link to={"#"}>Shorts Dresses</Link></li>
                                <li><Link to={"#"}>Black Shorts Jackets</Link></li>
                                <li><Link to={"#"}>Blue Shorts Jackets</Link></li>

                            </div>
                            {/* ################################## */}

                            <div className="categ1">
                                <h1 className="category-name">
                                    LINGERIE
</h1>
                                <li><Link to={"#"}>All Lingerie</Link></li>
                                <li><Link to={"#"}>Lingerie Dungarees</Link></li>
                                <li><Link to={"#"}>Lingerie Midi Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Mini Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Skirts</Link></li>
                                <li><Link to={"#"}>Lingerie Tops</Link></li>
                                <li><Link to={"#"}>Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Lingerie Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}>Lingerie Shorts</Link></li>
                                <li><Link to={"#"}>Lingerie Dresses</Link></li>
                                <li><Link to={"#"}>Black Lingerie Jackets</Link></li>
                                <li><Link to={"#"}>Blue Lingerie Jackets</Link></li>

                            </div>
                            {/* ################################## */}
                            <div className="categ1">
                                <h1 className="category-name">
                                    GOING OUT
</h1>
                                <li><Link to={"#"}>Going Out Tops</Link></li>
                                <li><Link to={"#"}> All Going Out Clothes</Link></li>
                                <li><Link to={"#"}>Going Out Playsuits & Jumpsuits</Link></li>
                                <li><Link to={"#"}> Going Out Skirts</Link></li>
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
