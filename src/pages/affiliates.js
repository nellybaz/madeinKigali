import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import '../css/pages/affiliates.scss'

class Affiliates extends Component {


    render() {
        return (
            <div className="Affiliates" style={{background: 'white'}}>
                <Header/>
                <div className="affiliates-row">
                    <div className="affiliates-column">
                        <img className="affiliates-img" src={require('../assets/images/affiliates.jpg')} alt=""/>
                    </div>
                    <div className="affiliates-column1">
                        <h1><strong>affiliates</strong></h1>
                        <h5 className="affiliates-h5">become an affiliate – it’s quick and easy with huge benefits!
                        </h5>

                        <p>Missguided is a fresh and vibrant online store that aims to stay on top of the latest trends
                            in order to provide our customers with the best that the fashion world has to offer. We have
                            fast established ourselves as a reputable and reliable company that is able to stand
                            toe-to-toe with some of the most well-known online fashion retailers.</p>
                        <h5 className="affiliates-h5">how does it work?</h5>
                        <p>Simple! All you need to do is follow the 4 basic steps to get started as a Missguided
                            affiliate:</p>
                        <ol>
                            <li>
                                Join the affiliate program on our partner network Awin here. Or if you are already
                                registered with Awin, click here
                            </li>
                            <li>Set up your affiliate links</li>
                            <li>Drive targeted traffic to the Missguided site</li>
                            <li>Generate sales and get rewarded up to 6% commission per sale!
                                Please ensure you read the program terms and conditions to ensure your affiliate
                                activity is in line with Missguided’s brand guidelines.
                            </li>
                        </ol>
                        <h5 className="affiliates-h5">so why join us?</h5>
                        <p>Other than being an awesome brand, joining the Missguided program has its perks.
                            Particularly:</p>

                        <ol>
                            <li>Earn up to 6% commission per sale generated.</li>
                            <li>Opportunities to run exclusive partnerships with Missguided.</li>
                            <li>Regularly updated feeds with a variety of brand new, on-trend products.</li>
                            <li>A range of fresh and exciting banners, updated regularly.</li>
                            <li>Regular affiliate communication updates with trends, tips, news and the latest offers.
                            </li>
                            <li>Excellent AOV and on site conversion rate.</li>
                            <li>Cookie length 30 days.</li>
                        </ol>
                        <h5 className="affiliates-h5">join the programme</h5>
                        <p>To ensure you have all of the information you need to get started and to check that you are a
                            suitable affiliate read our terms & conditions.</p>
                        <p>Once you have been successfully accepted as a Missguided affiliate you can start earning
                            commission straightaway.</p>
                        <p>Sign up straight away!</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Affiliates;