import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/washcare.css';
import Header from '../components/header';
import wash1 from '../assets/images/wash-mid-1.png';
import wash2 from '../assets/images/wash-mid-2.png';
import wash3 from '../assets/images/wash-mid-3.png';
import dryl1 from '../assets/images/dry-left-1.png';
import dryl2 from '../assets/images/dry-left-2.png';
import dryr1 from '../assets/images/dry-right-1.png';
import dryr2 from '../assets/images/dry-right-2.png';
import washcare from '../assets/images/washcare.jpeg';
import Footer from '../components/footer';


class WashCare extends Component {
    render() {

        return (
            <div style={{ background: 'white' }}>
                <Header />
                <section className="washcare-section">

                    <h1 className="washcare-title">Wash Guide & After Care</h1>
                    <h1 className="washcare-sub-title">CLOTHING</h1>
                    <h1 className="washcare-topic"> WASHING</h1>
                    <div className="washcare-washing">

                        <div className="washcare-left">
                            We test all our garments to make sure they stay looking as good as new after washing. To keep garments looking their best, always follow the instructions on the care label.
                    {/* <Image>`</Image> */}

                            <div className="washcare-imgg">
                                {/* Icons */}
                                <img style={{ objectFit: 'contain' }} src={washcare} />

                            </div>
                        </div>

                        <div className="washcare-middle">
                        <div className="washcare-imgg">
                            <img style={{ objectFit: 'contain' }} src={wash1} />
                            <img style={{ objectFit: 'contain' }} src={wash2} />
                            <img style={{ objectFit: 'contain' }} src={wash3} />

                            {/* <div className="imgg">Icons</div> */}
                            </div>
                        </div>
                        <div className="washcare-right">
                            Separate your wash into whites, darks, and colours to reduce the risk of colours running. <br />
                            Wash garments with contrast trims or panels separately, the fabrics have been designed to be washed together but may absorb dye from other garments – especially important for black and white clothing.<br />
                            Wash denim and coated fabrics inside out to protect the surface and prolong colour.<br />
                            Fringing can get tangled in the washing machine – hand wash where possible.<br />
                        </div>

                    </div>

                    <h1 className="washcare-topic"> DRYING</h1>
                    <div className="washcare-drying">

                        <div className="washcare-left">
                            DRY CLEANING
                        <br /><br />

                            The dry clean symbol is a circle with a letter inside, the letter indicates the chemical which can be used, and your dry cleaner will refer to this and know what to do. A cross means do not dry clean. <br />
                            <div className="washcare-imgg">
                                <img style={{ objectFit: 'contain' }} src={dryl1} />
                                <img style={{ objectFit: 'contain' }} src={dryl2} />

                                {/* Icons */}
                            </div>
                        </div>
                        <div className="washcare-middle">
                            NATURAL DRYING
                        <br /><br />

                            To get the most longevity out of your clothes, we recommend drying naturally.
<br />
                            Make sure you follow the instructions on the care labels.
<br />
                            Fringing can get tangled in the dryer – lay flat to dry where possible.
<br />
                            Dry knitwear flat as it can stretch when you hang it.
<br />
                            Feathers are a natural product and care should be taken with them to prolong their life. If they get wet allow to dry naturally.
<br />        </div>
                        <div className="washcare-right">
                            IRONING
                        <br /><br />

                            For the perfect press without damage, the dot inside the iron indicates the temperature to set your iron to, the more dots there are, the hotter the iron you can use. You can burn or even melt your clothes if you use the wrong setting, so make sure you check.
<br />   <div className="washcare-imgg">
                                <img style={{ objectFit: 'contain' }} src={dryr1} />
                                <img style={{ objectFit: 'contain' }} src={dryr2} />

                            </div></div>

                    </div>

                    <h1 className="washcare-topic"> SHOES</h1>
                    <div className="washcare-shoes">

                        <div className="washcare-left">
                            Our trainers and canvas products, unless we advise you,
    are not designed to go in a washing machine. If they get
    dirty let them dry naturally and remove excess dirt with
    a brush or cloth. Then use cleaner specifically for fabric.
<br />

                            If you get caught in the rain, allow your leather product
                            to dry naturally. You run the risk of the leather warping if
                            direct heat is used. Stuff with newspaper to help speed
                            up the process and maintain shape.
<br />
                            Espadrilles are traditional beach shoes and are not
                            designed for prolonged wear or wet weather.
<br />
                            Insoles on sandals may lift due to heat and perspiration.
                            Though we use strong adhesive, this is sometimes
                            unavoidable in normal wear
<br />
                        </div>
                        <div className="washcare-right">
                            The plastic or leather pieces at the base of the heel
    are designed to protect the heel and need to be
    replaced with wear. Replacement heel tips pieces are
    supplied with most of our shoes and are easily fitted
by a local cobbler.<br />

                            Repair is not always possible if your heel tips pieces
                            wear down to the point that the heel becomes
damaged.<br />

                            Scuffing can damage and remove beading and gems on
                            embellished products.
<br />

                            Suede and nubuck are delicate materials and don't take
                            kindly to oils and creams. Use in a suede brush to keep
the texture raised and looking fresh. <br />
                        </div>

                    </div>

                </section>


                <Footer />

            </div>

        );
    }
}

export default withRouter(WashCare);
