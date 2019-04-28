import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import '../css/pages/refer_a_friend.scss';

class Refer extends Component {
    render() {
        return (
            <div className="Refer" style={{background: 'white'}}>
                <Header/>
                <div className="ref-container">
                    <h1 className="ref-header">SHARE 20% OFF WITH YOUR BFF</h1>
                    <div className="w3-row">
                        <div className="w3-col s12 m6 l6">
                            <div className="ref-col">
                                <p className="ref-p1">Be the best friend ever and give your friends 20% off their
                                    first Made in Kigali order.</p>
                                <p className="ref-p2">
                                    What’s more, we’ll give you 20% off your next order for every friend that goes on to
                                    shop.
                                </p>
                                <img className="ref-img" src={require('../assets/images/refer-friend.png')} alt=""/>
                            </div>
                        </div>
                        <div className="w3-col s12 m6 l6">
                            <div className="ref-col1">
                                <p className="ref-p3">Enter your details to get your sharing link and start sharing the
                                    love.</p>
                                <form className="ref-form" action="#">
                                    <input id="name" className="ref-input" type="text" placeholder="Your full name"
                                           required/>
                                    <input id="mail" className="ref-input" type="email"
                                           placeholder="Your email address" required/>
                                    <input type="checkbox" id="checkbox_1" required/>
                                    <label For="checkbox_1">I consent to receiving future marketing communications
                                        from Made in Kigali and
                                        understand that I can unsubscribe from these at any time.</label>
                                    <input className="ref-input ref-submit" type="submit" value="Start Sharing"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p className="ref-comments">20% applies to all orders, excludes sale and beauty purchases. Enter
                        code at checkout to redeem.
                        Offer valid to 23:59 31.05.2019 and cannot be used in conjunction with any other promotion or
                        code. No price adjustments on previous purchases. Made in Kigali reserve the right to cancel
                        or alter any promotion.</p>
                    <p className="ref-comments">
                        By participating in the promotion, you accept the Buyapowa Platform <Link to={''}>Terms &
                        Conditions </Link> and the<Link to={''}> Promotion Terms & Conditions.</Link>
                    </p><br/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Refer;