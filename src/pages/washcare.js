import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/washcare.css';
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

class WashCare extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         counter : 0,
    //     }
    // }

    // increase= ()=>{
    //     // alert("called");
    //     this.setState({
    //         counter : this.state.counter +1,
    //     });
    // }

    render() {

        return (
            <div style={{ background: 'white' }}>
                <Header />
                <section>

                    <h1 className="title">Wash Guide & After Care</h1>
                    <h1 className="sub-title">CLOTHING</h1>
                    <h1 className="topic"> WASHING</h1>
                    <div className="washing">

                        <div className="left">
                            We test all our garments to make sure they stay looking as good as new after washing. To keep garments looking their best, always follow the instructions on the care label.
                    {/* <Image>`</Image> */}
                            <div className="imgg">Icons</div>
                            <div className=''></div>

                        </div>
                        <div className="middle">
                            <div className="imgg">Icons</div>
                        </div>
                        <div className="right">
                            Separate your wash into whites, darks, and colours to reduce the risk of colours running. <br />
                            Wash garments with contrast trims or panels separately, the fabrics have been designed to be washed together but may absorb dye from other garments – especially important for black and white clothing.<br />
                            Wash denim and coated fabrics inside out to protect the surface and prolong colour.<br />
                            Fringing can get tangled in the washing machine – hand wash where possible.<br />
                        </div>

                    </div>

                    {/* <p> You pressed this number of times: {this.state.counter}</p>
                    <button onClick={()=>this.increase()} >Hit me</button> */}

                    <h1 className="topic"> DRYING</h1>
                    <div className="drying">

                        <div className="left">
                            DRY CLEANING
                        <br /><br />

                            The dry clean symbol is a circle with a letter inside, the letter indicates the chemical which can be used, and your dry cleaner will refer to this and know what to do. A cross means do not dry clean. <br />
                            <div className="imgg">
                            Icons
                            </div>
                        </div>
                        <div className="middle">
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
                        <div className="right">
                            IRONING
                        <br /><br />

                            For the perfect press without damage, the dot inside the iron indicates the temperature to set your iron to, the more dots there are, the hotter the iron you can use. You can burn or even melt your clothes if you use the wrong setting, so make sure you check.
<br />   <div className="imgg">Icons</div></div>

                    </div>

                    <h1 className="topic"> SHOES</h1>
                    <div className="shoes">

                        <div className="left">
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
                        <div className="right">
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
