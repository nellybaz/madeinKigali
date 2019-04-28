import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import '../css/pages/careers_opportunities.css'

class Careers extends Component {
    render() {
        return (
            <div className="Careers" style={{background: 'white'}}>
                <Header/>
                <div className="careers-container">
                    <img className="careers-img" src={require('../assets/images/careers.jpg')} alt=""/>
                    <div>
                        <h1 className="h1-main">Working at Made in Kigali Ltd</h1>
                        <p className="p-main">Attracting and retaining the best people for our business is very
                            important to us. We are
                            passionate about providing a creative, innovative and entrepreneurial working environment
                            throughout the business, giving all employees the opportunity to develop and progress. If
                            you would love to work for an engaging and exciting brand, please see our latest career
                            opportunities below.</p>
                    </div>

                    <div className="careers-vacancies">
                        <h1 className="h1-vacancies">Vacancies</h1>
                        <div className="careers-row">
                            <div className="w3-row">
                                <div className="w3-col s12 m6 l6">
                                    <div className="careers-column">
                                        <h1 className="h1-column">Assistant Fabric Buyer</h1>
                                        <p className="p-column">To support the VVB team in the day to day running and
                                            organisation of the Fabric
                                            department.</p>
                                    </div>
                                </div>
                                <div className="w3-col s12 m6 l6">
                                    <div className="careers-column1">
                                        <Link to={''}><h2 className="h2-details">More Details</h2></Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="careers-row">
                            <div className="w3-row">
                                <div className="w3-col s12 m6 l6">
                                    <div className="careers-column">
                                        <h1 className="h1-column">Fabric Intern</h1>
                                        <p className="p-column">To support the fabric team in the day to day running and
                                            organisation of the
                                            department.</p>
                                    </div>
                                </div>
                                <div className="w3-col s12 m6 l6">
                                    <div className="careers-column1">
                                        <Link to={''}><h2 className="h2-details">More Details</h2></Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="careers-row">
                            <div className="w3-row">
                                <div className="w3-col s12 m6 l6">
                                    <div className="careers-column">
                                        <h1 className="h1-column">Press Officer</h1>
                                        <p className="p-column">A product and community focused role, that uses creative and
                                            strategic thinking, as
                                            well as Press Office tools to drive forward brand initiatives, goals and areas of
                                            focus.</p>
                                    </div>
                                </div>
                                <div className="w3-col s12 m6 l6">
                                    <div className="careers-column1">
                                        <Link to={''}><h2 className="h2-details">More Details</h2></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="careers-row">
                            <div className="w3-row">
                                <div className="w3-col s12 m6 l6">
                                    <div className="careers-column">
                                        <h1 className="h1-column">Wholesale Assistant</h1>
                                        <p className="p-column">The role of Wholesale Assistant is an integral entry-level
                                            position assisting and
                                            supporting the London-based Sales Team. Key elements include achieving sales goals
                                            through excellent customer service and effective management of sales campaigns,
                                            merchandising, sample coordination and market reporting. The candidate in this role
                                            must possess and demonstrate strong independent reasoning and problem solving
                                            skills, in addition to being detail oriented and extremely organised.</p>
                                    </div>
                                </div>
                                <div className="w3-col s12 m6 l6">
                                    <div className="careers-column1">
                                        <Link to={''}><h2 className="h2-details">More Details</h2></Link>
                                    </div>
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

export default Careers;