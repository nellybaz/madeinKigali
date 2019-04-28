import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import '../css/pages/social_responsibility.css';


class SocialResponsibility extends Component {
    render() {
        // let imgUrl = '../assets/images/careers.jpg';
        return (
            <div className="Social" style={{background: 'white'}}>
                <Header/>
                <div className="container-social">
                    <div className="top-social">
                        <div className="test-social">
                            < h1 className="h1-text-social header-label"> Sustainability is at the heart of all that we
                                do— </h1>
                            <p className="p-text-social header-label"><em>you could say it’s in our nature to go
                                green. </em></p>
                        </div>

                    </div>

                    <div className="issue-social">
                        <h1 className="h1-text-social normal">Here's the issue</h1>
                        <p className="p-text-social">The textile industry is rife with sustainability problems: from the
                            use of toxic inks and
                            wasteful practices for materials and water, to a race to utilize the cheapest materials such
                            as vinyl—no matter the environmental impact.</p>
                    </div>

                    <div className="solution-social">
                        <div className="solution-social-child">
                            <h1 className="h1-text-social normal">Made In Kigali is working hard to reverse this
                                direction.</h1>
                            <p className="p-text-social">Our print-on-demand process is designed to minimize fabric and
                                ink waste. We began with a
                                holistic approach that addresses three key issues:</p>
                        </div>
                        <div className="row-social">
                            <div className="column-social">
                                <img className="img-social" src={require('../assets/images/careers.jpg')} alt=""/>
                                <p className="row-text-social">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur assumenda
                                    aut corporis, deserunt dolorem est laboriosam maiores numquam quam reiciendis
                                    saepe unde vel veniam. Cumque ea earum optio sunt veritatis?</p>
                            </div>
                            <div className="column-social">
                                <img className="img-social" src={require('../assets/images/careers.jpg')} alt=""/>
                                <p className="row-text-social">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Deleniti doloribus est
                                    libero maxime necessitatibus nostrum numquam rerum ullam. Alias aliquam
                                    consequatur cumque labore mollitia quidem quisquam rem suscipit tenetur,
                                    vel?</p>
                            </div>
                            <div className="column-social">
                                <img className="img-social" src={require('../assets/images/careers.jpg')} alt=""/>
                                <p className="row-text-social">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus adipisci
                                    delectus deleniti exercitationem facilis fugiat modi molestiae, nemo nostrum,
                                    saepe ut voluptate! Consequatur exercitationem expedita molestiae nobis
                                    perferendis sint, veritatis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="below-solution-social">
                        <p className="p-text below-solution">Since you have the ability to print the exact quantities
                            you want, just the way you want
                            them, there are no leftover materials.</p>
                    </div>

                    <div className="approach-social">
                        <h1 className="h1-text-social h1-approach">A Cleaner Approach</h1>
                        <p className="p-text-social p-approach">Here are some areas where we strive to make a difference
                            in the textile industry.</p>
                    </div>

                    <div className="solution1">
                        <h1 className="h1-text-social h1-solution1">The textile industry is the #2 polluter of
                            freshwater in the world.</h1>
                        <p className="p-text-social p-solution1">How many 2-liter bottles of water does it take to
                            produce 5 yards of conventional fabric?</p>
                        <p>Answer:100</p>
                        <img className="img-solution1" src={require('../assets/images/bottles.png')} alt=""/>
                    </div>
                    <div className="our-difference">
                        <h1 className="h1-our-difference1">How are we different? </h1>
                        <p className="p-our-difference1">Our process uses <strong><em>less than a thimble </em></strong>full
                            of water to print the same amount of fabric.</p>
                        <div className="our-difference-row">
                            <div className="our-difference-column">
                                <img src={require('../assets/images/water.jpg')}
                                     alt=""/>
                                <h1 className="h1-our-difference">Environment Conservation</h1>
                                <p className="p-our-difference">Made in Kigali’s pigment printing process consumes very
                                    little water to begin with,
                                    making it an eco-friendly solution in the textile printing industry. Our pigment
                                    inks meet the Oeko-Tex 100 requirements to be free of restricted chemicals and are
                                    mixed from 4-8 basic colors as your fabric is printed, so unlike screen printing,
                                    there’s no mixing of colors in advance.</p>
                            </div>
                            <div className="our-difference-column">
                                <img src={require('../assets/images/green.jpg')}
                                     alt=""/>
                                <h1 className="h1-our-difference">Clean Raw Materials</h1>
                                <p className="p-our-difference">To ensure products are safe, we select the best-in-class
                                    fabrics, inks and dyes. All
                                    of our wallcoverings and gift wrap are printed with water-based latex inks that
                                    carry the GREENGUARD Gold certification. We avoid fabrics with any flame-retardant
                                    applications, and our fabrics pass tests ruling out harmful chemicals such as
                                    formaldehyde and lead.</p>
                            </div>
                        </div>
                    </div>
                    <div className="our-difference2">
                        <img src={require('../assets/images/organic.jpg')} alt=""/>
                        <h1 className="h1-our-difference2">Organic and Earth-Friendly Fabrics</h1>
                        <div className="our-difference2-inner">
                            <div className="our-difference2-inner-row">
                                <div className="our-difference2-inner-column">
                                    <img className="our-difference-img"
                                         src={require('../assets/images/organic-cotton.jpg')} alt=""/>
                                </div>
                                <div className="our-difference2-inner-column">
                                    <img className="our-difference-img"
                                         src={require('../assets/images/organic-cotton-knit.jpg')} alt=""/>
                                </div>
                                <div className="our-difference2-inner-column">
                                    <img className="our-difference-img"
                                         src={require('../assets/images/organic-sweet.jpg')} alt=""/>
                                </div>
                                <div className="our-difference2-inner-column">
                                    <img className="our-difference-img" src={require('../assets/images/eco-canvas.jpg')}
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eco-conscious">
                        <img src={require('../assets/images/eco-paper.jpg')} alt=""/>
                        <h1 className="h1-eco-conscious">Eco-Conscious Papers</h1>
                        <div className="eco-conscious-inner">
                            <div className="eco-conscious-row">
                                <div className="eco-conscious-column">
                                    <img src={require('../assets/images/smooth-wallpaper.jpg')} alt=""/>
                                </div>
                                <div className="eco-conscious-column">
                                    <img src={require('../assets/images/woven-wallpaper.jpg')} alt=""/>
                                </div>
                                <div className="eco-conscious-column">
                                    <img src={require('../assets/images/roostery-wallpaper.jpg')} alt=""/>
                                </div>

                            </div>
                            <div className="eco-conscious-row2">
                                <div className="eco-conscious-column2">
                                    <img src={require('../assets/images/recycle.jpg')} alt=""/>
                                    <h1 className="h1-recycle">Recycling and Reusing</h1>
                                    <p className="p-recycle">Marketplace fabric that is returned to the factory is
                                        donated (designers still earn their commissions!) to programs such as the RARE
                                        Bear sew-in, a grassroots outreach initiative for kids with rare diseases.
                                        Unprinted fabric remnants are available to local artists and makers in the
                                        Spoonflower community. Fabric that doesn’t meet our high standards never makes
                                        it to the landfill in the U.S., as it is shredded for industrial applications
                                        like car upholstery and furniture stuffing, bedding and flooring.</p>
                                </div>
                                <div className="eco-conscious-column2">
                                    <img className="eco-conscious-img" src={require('../assets/images/rare-bear.jpg')}
                                         alt=""/>
                                </div>
                            </div>
                            <img className="img-cutting-down" src={require('../assets/images/tree.jpg')} alt=""/>
                            <h1 className="h1-cutting-down">Cutting Down on Carbon</h1>
                            <p className="p-cutting-down">Made in Kigali invests in sustaining a healthy environment by
                                working to reduce our
                                ecological impact in everything we do, from recycling and composting in our office to
                                printing packing slips on recycled-content paper. We have two factories—one in Durham,
                                N.C. and one in Berlin, Germany—to reduce shipping transit to consumers, thus cutting
                                our carbon footprint. </p>

                            <img className="eco-conscious-stats" src={require('../assets/images/stats.jpg')} alt=""/>

                            <div className="conscious-testimonials">

                                <div className="conscious-testimonials-row1">
                                    <div className="s3-row">
                                        <div className="w3-col s12 m6 l6">
                                            <div className="conscious-testimonials-column1">
                                                <img className="img-testimonials"
                                                     src={require('../assets/images/careers.jpg')}
                                                     alt=""/>
                                                <p className="p-testimonials">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Delectus est ex illo
                                                    qui voluptatem. Aut ducimus harum, illum in ipsa ipsam labore,
                                                    laboriosam
                                                    molestiae necessitatibus officia provident repellendus, repudiandae
                                                    voluptate!</p>
                                                <h1 className="h1-testimonials">-Ashley Alexis McFarlane, <em>Omi
                                                    Woods</em><br/>Toronto, Canada</h1>
                                            </div>
                                        </div>
                                        <div className="w3-col s12 m6 l6">
                                            <div className="conscious-testimonials-column1">
                                                <img className="img-testimonials"
                                                     src={require('../assets/images/careers.jpg')}
                                                     alt=""/>
                                                <p className="p-testimonials">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Delectus est ex illo
                                                    qui voluptatem. Aut ducimus harum, illum in ipsa ipsam labore,
                                                    laboriosam
                                                    molestiae necessitatibus officia provident repellendus, repudiandae
                                                    voluptate!</p>
                                                <h1 className="h1-testimonials">-Ashley Alexis McFarlane, <em>Omi
                                                    Woods</em><br/>Toronto, Canada</h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="conscious-testimonials-row2">
                                    <div className="s3-row">
                                        <div className="w3-col s12 m6 l6">
                                            <div className="conscious-testimonials-column2">
                                                <img className="img-testimonials"
                                                     src={require('../assets/images/careers.jpg')}
                                                     alt=""/>
                                                <p className="p-testimonials">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Delectus est ex illo
                                                    qui voluptatem. Aut ducimus harum, illum in ipsa ipsam labore,
                                                    laboriosam
                                                    molestiae necessitatibus officia provident repellendus, repudiandae
                                                    voluptate!</p>
                                                <h1 className="h1-testimonials">-Ashley Alexis McFarlane, <em>Omi
                                                    Woods</em><br/>Toronto, Canada</h1>
                                            </div>
                                        </div>
                                        <div className="w3-col s12 m6 l6">
                                            <div className="conscious-testimonials-column2">
                                                <img className="img-testimonials"
                                                     src={require('../assets/images/careers.jpg')}
                                                     alt=""/>
                                                <p className="p-testimonials">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Delectus est ex illo
                                                    qui voluptatem. Aut ducimus harum, illum in ipsa ipsam labore,
                                                    laboriosam
                                                    molestiae necessitatibus officia provident repellendus, repudiandae
                                                    voluptate!</p>
                                                <h1 className="h1-testimonials">-Ashley Alexis McFarlane, <em>Omi
                                                    Woods</em><br/>Toronto, Canada</h1>
                                            </div>
                                        </div>
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

export default SocialResponsibility;