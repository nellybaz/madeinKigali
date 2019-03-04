import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import {Link} from 'react-router-dom';
import '../css/pages/about.css';
import '../css/utils/screen.css';

class About extends Component{
    constructor(props){
        super(props)
        this.state={
            large_screen_class:''
        }
    }
 
 
    componentDidMount(){
        if(window.innerWidth > 1400){
          this.setState({
            large_screen_class: "large_screen",
          });
        }
      }
    
    render(){
        return(
            <div className={`Company-about ${this.state.large_screen_class}`}>
                <Header />

                <div className='content-wrapper'>
                    <section className='about-section1'>
                        <div className='about-section1-left'>
                            <div className='about-section1-left-top'>
                                <h4>
                                'The Africa we Want'
                                </h4>
                                <p>
                                Support the movement
                                </p>

                                <Link to={'/dev/company/about2'}>
                                    MORE ABOUT US
                                </Link>
                            
                            </div>

                            <div className='about-section1-left-bottom'>
                                <h4>WHAT WE DO</h4>

                                <p>

                                At MIK, we are passionate about community collaboration and are proud to nurture partnerships with cooperatives and upcoming designers in Africa to bring our customers authentic and beautiful pieces to value. They focus on the details to ensure that each piece is perfect for your look and comfort. Our flattering styles always fit with no fuss. As always, MIK products are made to get it right!
                                </p>

                                <p style={{fontWeight:'bold'}}>
                                    Our Priorities:  
                                </p>

                                <ul>
                                <li>We uphold and celebrate authenticity.</li>
                                <li>We believe in empowering the dedicated women and men that work with us.</li>
                                <li>We are committed to rebranding the pan-African design narrative.</li>
                                </ul>

                                <h4 >HOW WE DO IT</h4>


                                <p>
                                With a deliberate focus on creativity, we have set up MIK handmade centre in partnership with Gorilla Guardians Village. We mentor them to meet the dynamic demands and current trends of the fashion industry across the world by equipping them with the necessary resources to produce the products that MIK is currently offering to you our customers.
                                </p>
                            
                            </div>
                        </div>

                        <div className='about-section1-right'>
                            <img src={require('../assets/images/modelmadeinkigali09.png')}  />
                        
                        </div>

                    </section>

                    <section className="about-section2">
                         <div className='section2-left'>
                            <div className='section2-left-top'>
 
                                <img src={require('../assets/images/madeinkigali11.1.jpg')}  alt="madeinkigali09.1"/>
                            
                            </div>

                            <div className='section2-left-bottom'>
                            <h4 className='section2-left-bottom-h4'>
                                THE MIK EXPERIENCE
                            </h4>

                            <p className='section2-left-bottom-p'>We spare no effort in making your experience with us as smooth as the wind that gusts the thousand hills of Rwanda. We’re not happy until you are. Our ever-caring customer advisors work to solve your queries (on Facebook, whatsApp, live chat, email, and Instagram).
And lastly, not forgeting our future leaders; being a student can mean living on a budget that is why we offer 10% off all the way through to graduation.

                                </p>

                            
                            </div>
                        
                        </div>

                        <div className='section2-right'>
                            <div className='section2-right-top'>
                            <h4>OUR PRODUCTS</h4>

                            <p>
                            Our products are made with a deep passion to contribute to the actualisation of the “Africa we want” vision been pioneered by African leaders. The products you buy from MIK shelf are testament to what a united front of Africans can achieve with the support of a willing government. We have added more products to our offerings and pride ourselves as leading providers of unique and quality clothing, footwear, homeware, bags, decor,  and accessories.
                            </p>
                            <p>
                            Beyond getting it right, our products are handmade from the best of quality materials we could source. We prioritize local suppliers over any other and sustain strict policies for our quality-control department. Every MIK product comes with a story that can be traced back to the women in various cooperatives that put materials together before the design stage.
                            </p>
                            </div>

                            <div className='section2-right-bottom'>
                            <h4>FACTORY OF EMOTIONS</h4>

                            <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s,</p>
                            <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and, more recently, by its inclusion in text layout applications, such as Aldus PageMaker.</p>

                            
                            <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and, more recently, by its inclusion in text layout applications, such as Aldus PageMaker.</p>
                            </div>
                        </div>

                    </section>

                    <section className='about-section3'>
                    <div className='about-section3-left'>

                        <img src={require('../assets/images/madeinkigali11.1.png')} />
                    
                    </div>

                    <div className='about-section3-right'>
                        <h4 style={{fontSize:'1.5rem'}}>THE MIK BRANDS</h4>

                        <p>
                        
We don't do fashion like anyone else does fashion. Our ASOS Brands, created by our London design team, look between the lines to bring you the freshest clothing, shoes, accessories and gifts. When it comes to our curation of brands at ASOS, we select the best of those to give you the biggest variety, amazing exclusives and coolest collaborations. And in case that wasn't enough, we've also got a range of first-rate Face + Body products you can express yourself with, too. There are no rules – just endless ways to be you.
                        </p>
                    

                    <h4>MIK DESIGN</h4>
                    <p>
                    
Giving you the confidence to express your individuality, ASOS DESIGN interprets major trends, adding that next-level ASOS spin. Representing in our size ranges (ASOS Curve, Tall, Petite and Maternity), we've got all the stuff you need to invent a style that’s all yours… making every day, night and everything in-between as extraordinary as you are.
                    </p>

                   <h4>MIK EDITION</h4>
                   <p>                   
ASOS EDITION is designed for the most memorable moments of your life so you can turn up and stand out in occasionwear that’s as unique as you. In our size ranges and including our beautiful ASOS EDITION Wedding Collection, we'll have you dancing before the party's even begun.
                   </p>
                    

                    <h4>MIK 1950</h4>
                    <p>
Backing oversized fits with a minimal, clean aesthetic, ASOS WHITE is here to elevate your every day. Believing investment pieces don’t have to compromise on individuality, it creates understated staples with a modern twist that you’ll be proud to wear – not to mention look damn cool in.
                    </p>


                    <h4>MIK COLLABS</h4>
<p>No longer a choice between conscience and self-expression, we believe fashion has the power to build futures. That’s why our exclusive ASOS MADE IN KENYA collection works with SOKO Kenya to improve the lives of local communities by offering skills and support to drive sustainable development. Does good, looks good.</p>


{/* <h4>MIK collabs</h4>
<p>We collaborate with some of the world's biggest names like Crayola, The Simpsons, LaQuan Smith, GLAAD and VFILES to design cool collections you won't find anywhere else. We do the hard work, you look amazing… deal?</p>
                     */}
                    
                   <div className='div-action-right-bottom'>
                        <h5>Made to get it right</h5>
                        <Link to={'/dev/company/about2'}>DISCOVER THE MIK STORY ></Link>
                   </div>
                    </div>

                   
                   
                    </section> 
                
                </div>

                <Footer />
            </div>
        )
    }
}

export default About;