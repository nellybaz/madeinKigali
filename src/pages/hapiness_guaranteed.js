import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import '../css/pages/happiness_guaranteed.css'

class Happiness extends Component {


    render() {
        return (
            <div className="Happiness" style={{background: 'white'}}>
                <Header/>
                <div className="happiness-container">
                    <img className="happiness-header-img" src={require("../assets/images/happiness.png")} alt=""/>
                    <div className="happiness-header">
                        <h1 className="happiness-h1-header">Happiness Guarantee<br/><h5><em className="happiness-em">When
                            you love it, we love it</em></h5></h1>
                    </div>

                    <div className="happiness-text">
                        <p className="p-happiness-text">
                            <strong>Your order is custom printed just for you, and we want you love it</strong>.
                            Spoonflower is all about
                            making your dreams a reality, but delivering dreams can sometimes be a bit tricky. If you
                            think that your order has a flaw or it is not what you expected, we want to make it right.
                            Start by <Link to={'/dev/contact'}>contacting us</Link> to let us know your situation, and
                            your order will either be
                            reprinted or reimbursed — just like that! Our community comes first: your happiness makes us
                            merrier than cuddling kittens.
                        </p>
                    </div>

                    <hr/>

                    <div className="happiness-tips-header"><h5>Here are some important tips:</h5></div>

                    <div className="happiness-tips">
                        <ul className="ul-happiness">
                            <li className="li-happiness"><Link to={'/dev/contact'}>Contact us</Link> to start a return
                                or reimbursement request
                                before mailing your package to us.
                                Please include all relevant information along with order number if applicable.
                            </li>
                            <li className="li-happiness">If there is a problem with the fabric or paper, please email a
                                photo of the issue along
                                with your request to <Link to={''}>info@mik.com</Link> for quicker processing.
                            </li>
                            <li className="li-happiness">We do not offer prepaid return labels, so once you hear back
                                from us with instructions,
                                simply choose the shipping service that’s most affordable or convenient for you.
                            </li>
                            <li className="li-happiness">Please note that Spoonflower.com cannot accommodate reprint or
                                refund requests for
                                orders placed on Etsy, Amazon or eBay; or on our site Roostery.com. You must follow the
                                procedures of the site where you purchased the goods so that your reprint or return can
                                be processed accurately.
                            </li>
                            <li className="li-happiness">You have 60 days to let us know if there’s an issue. Check your
                                order promptly after you
                                receive it to avoid missing the window.
                            </li>
                        </ul>
                    </div>

                    <div className="happiness-fun-fact">
                        <p className="p-fun-fact"><strong>Fun Fact:</strong><em>Since we cannot restock or resell any
                            fabric or paper that is
                            returned to us, we donate returns to programs like the <Link to={''}>RARE Bear</Link> sew-in
                            or local nonprofits
                            like <Link to={''}>The Scrap Exchange</Link>. Fabric that doesn’t meet our standards never
                            makes it to the
                            landfill, as it is shredded for industrial applications such as car upholstery and furniture
                            stuffing.</em></p>
                    </div>
                    <hr/>

                    <div className="happiness-contact-us">
                        <h3>Contact Us <br/><h5>Need more help? Reach out to us <Link to={'/dev/contact'}>here</Link>.
                        </h5></h3>
                    </div>

                    <hr/>

                    <div className="happiness-row">
                        <div className="w3-row">
                            <div className="w3-col s12 m12 l4">
                                <div className="happiness-column1">
                                    <img className="happiness-column-img"
                                         src={require("../assets/images/happiness.png")} alt=""/>
                                    <p>"Made in Kigali customer service is seriously the BEST. They care about our
                                        customers
                                        and their success as much as we do. Whether a customer buys a swatch or 200
                                        yards,
                                        we know that they will be thrilled when they receive their order."</p>
                                    <h6><em><strong>- Judy & Ralph Quintero, of shopcabin</strong></em></h6>

                                </div>
                            </div>
                            <div className="w3-col s12 m12 l4">
                                <div className="happiness-column2">
                                    <img className="happiness-column-img"
                                         src={require("../assets/images/happiness.png")} alt=""/>
                                    <p>"Made in Kigali means quality fabrics, printing and friendly service. I love the
                                        handwritten thank-you notes on the purchase orders. It’s a nice personal
                                        touch."</p>
                                    <h6><em><strong>- Edward Miller, of edward_elementary</strong></em></h6>

                                </div>
                            </div>
                            <div className="w3-col s12 m12 l4">
                                <div className="happiness-column3">
                                    <img className="happiness-column-img"
                                         src={require("../assets/images/happiness.png")} alt=""/>
                                    <p>"Made in Kigali has the best customer service around: it can’t be beat."</p>
                                    <h6><em><strong>- Marla Cannon, of olive•me</strong></em></h6>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Happiness;