import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import '../css/pages/company2.css';

import img1 from '../assets/images/madeinkigali02.png';

import {Link} from 'react-router-dom';
import CountTo from 'react-count-to';

class Company2 extends Component{
  
 
    constructor(props){
        super(props)
        this.state={
            show_store_count:false,
            turn_over_count:false,
            markets_count:false,
            large_screen_class: '',
        }
    }



    handleScroll = (event) => {
        if (Math.round(window.scrollY) >= 320) {
            //  alert('yes')

            this.setState({
                show_store_count: true,
            })

        }

        if (Math.round(window.scrollY) >= 320) {

            this.setState({
                turn_over_count: true,
            })

        }

        if (Math.round(window.scrollY) >= 720) {

            this.setState({
                markets_count: true,
            })

        }

        else {
            this.setState({
                show_store_count: false,
                turn_over_count: false,
                markets_count: false,
            })

        }
    }


    componentDidMount() {
        // componentDidMount(){
            // if(window.innerWidth > 2200){
            //   this.setState({
            //     large_screen_class: "large_screen",
            //   });
            // }
        //   }


        window.scrollTo(0,0);




        setInterval(async () => {

            window.addEventListener('scroll', this.handleScroll());

        }, 10);
    } 
    render(){

        const fn = value => <p id="c2-c1" className='c2-counter c2-counter2'>{value}%</p>;
        const fn2 = value => <p id="c2-c2" className='c2-counter c2-counter1'>{value}</p>;
        const fn2_plus = value => <p id="c2-c3" className='c2-counter c2-counter2'><span>+</span> <br></br>{value}</p>; 
        const fn3 = value => <p id="c2-c4" className='c2-counter c2-counter2'>{value}</p>;
        const fn3_plus = value => <p id="c2-c5" className='c2-counter c2-counter2'>+{value}</p>;
        return(
            <div className='Company2'>
                <Header />

                <div className='c2-content-section1'>

                <div className='c2-section1-title-div'>
                            <h5 className='c2-section1-h5'>MOULDED <br></br><span className='c2-section1-span'>SINCE 2013</span></h5>
                            <p>
                            MIK is an authentic, multi-platform experience that aims at resonating with the people who use it, because it’s built by them. 
It’s a place made to get it right to shop and be inspired to develop your own style. 
                             </p>
                            {/* <Link to={'/stash/company/about2'}><button>ABOUT US</button></Link> */}
                        </div>
                        <div className='c2-section1-img-div'>
                            <img src={img1} />
                        </div>
                
                </div>


                <div className='c2-content-section2'>
                <div>
                             <h5><b>About Us</b></h5>
                            <p>
                            We are selflessly committed to providing the most authentic handmade fashion products that Rwanda has to offer while ensuring that the hundreds of women that we work with in producing the products are the priority beneficiaries to the proceeds.
                            </p>

                            <a href="/company/about2" className='c2-section2-btn'>WHO WE ARE</a>
                        </div>
                        <div>
                            <h5><b>Our Products</b></h5>
                            <p>
                            From clothes and footwear to homeware, our local but highly talented designers focus on the details to ensure that each piece is perfect for your look and comfort. Our flattering styles always fit with no fuss. We do not stop until each product is made to perfectly fit you. 
                            </p>
 
                            <a href="/company/about#what-we-do" className='c2-section2-btn'>WHAT WE DO</a>
                        </div>
                        <div>
                            <h5><b>The MIK Experience</b></h5>
                            <p>
                            we are on a never ending journey. We are constantly improving to make it all just that bit better every day. From inspiring to contributing, if it hasn’t been done before, we find our way to make it happen.
                            </p>

                            <a href="/company/about#mik-experience" className='c2-section2-btn'>WHAT WE GUARANTEE</a>
                        </div>
                        <div>
                            <h5><b>The MIK Brands</b></h5>
                            <p>
                            The Made in Kigali concept is not to make you look good only, your comfort is as much a priority. 
                            </p>

                            <a href="/company/about#mik-brands" className='c2-section2-btn'>OUR PROJECTS</a>
                        </div>
                        <div>
                            <h5><b>Code of Conduct</b></h5>
                            <p>
                            Our commitment to responsibility lives in the materials we choose, the ethical partners we work with, our employee benefits, community involvement and so much more. 
                            </p>

                            <a href="/company/about#code-of-conduct" className='c2-section2-btn'>CODE OF CONDUCT</a>
                        </div>
                </div>

                <div className='company2-wrapper'>

                    <img className='c2-long-img' src={require('../assets/images/madeinkigalimodel01.png')} />

                    <div className='company2-long-right'>
                    <div className='company2-inner company2-inner0'>
                    <h4>LIFE AND FACTS</h4>
                    <p>
                    We are a pan-African and multi-cultural fashion house. With a specific focus on footwear, clothing, bags and homeware, we offer our   
                                                            products through in-store purchase, e-commerce and order services.
                    </p>
                    </div>
                    <div className='company2-inner company2-inner1'>
                        <div className='c2-left'>
                            <div className='c2-left-left'>
                                <img src={require('../assets/images/madeinkigali11.png')} />
                            </div>
                            <div className='c2-left-right'>
                            {
                                this.state.markets_count ? <CountTo to={8} speed={2000}>{fn2}</CountTo> :  <h4 className='c2-counter c2-counter1'>8</h4>
                            }
                               
                                <p className='c2-counter-p'>PRODUCT CATEGORIES</p>
                            </div>
                        
                        </div>

                        <div className=''>

                        {
                                this.state.markets_count ? <CountTo to={13} speed={2000}>{fn2}</CountTo> :   <h4 className='c2-counter c2-counter1'>13</h4>
                            }
                           
                            <p className='c2-counter-p'>DISTRIBUTION CHANNELS</p>
                        
                        </div>
                    
                    </div>

                    <div className='company2-inner company2-inner2'>
                    <div className='c2-left'>
                    
                    {
                                this.state.markets_count ? <CountTo to={5} speed={2000}>{fn3_plus}</CountTo> :  <h4 className='c2-counter c2-counter2'>+5</h4>
                            }
                            
                            <p style={{textDecoration:'none'}} className='c2-counter-p'>MILLION DOLLARS INVESTMENT<br></br> IN RWANDA</p>
                        
                        </div>

                        <div className=''>

                        {
                                this.state.markets_count ? <CountTo to={7} speed={2000}>{fn3}</CountTo> :  <h4 className='c2-counter c2-counter2'>7</h4>
                            }
                            
                            <p style={{textDecoration:'none'}} className='c2-counter-p'>NUMBER OF COUNTRIES OUR PRODUCTS ARE SOURCED FROM</p>
                        
                        </div>
                    </div>

                    <div className='company2-inner company2-inner3'>
                    <div className='c2-left'>

                    {
                                this.state.markets_count ? <CountTo to={70} speed={2000}>{fn}</CountTo> :   <h4 className='c2-counter c2-counter2'>70%</h4>
                            }
                           
                            <p style={{width:'80%', textDecoration:'none'}} className='c2-counter-p'>MORE SUSTAINABLE COTON SOURCE SINCE 2016</p>
                        
                        </div>

                        <div className=''>
{
    this.state.markets_count ? <CountTo to={1200} speed={2000}>{fn2_plus}</CountTo> : <h4 className='c2-counter c2-counter2'><span>+</span><br></br>1200</h4>
}
                            
                            <p style={{textDecoration:'none'}} className='c2-counter-p'>
                                ARTISANS</p>
                        
                        </div>
                    </div>

                    <div className='company2-inner company2-inner4'>
                    <div className='map-div c2-left'>
                        <img src={require('../assets/images/company-map.jpg')} />
                        
                        </div>

                        <div className=''>
                        {
                                this.state.markets_count ? <CountTo to={5} speed={2000}>{fn2}</CountTo> :   <h4 className='c2-counter c2-counter1'>5</h4>
                            }
                           
                            <p style={{textDecoration:'none'}} className='c2-counter-p'>MARKETS</p>
                        
                        </div>
                    </div>
                    
                    </div>

                
                </div>


                <section className='c2-newsroom'>
                        <div className=''>
                            <p><span>THE EDIT</span> <br></br>
                            Get your fix from the trends you need to know from MIK.    
                            </p>
                            <Link to={'/stash/blog/home'} ><button className='access-btn'>ACCESS THE EDIT</button></Link>
                        </div>
                    </section> 


                <Footer />
            </div>
        )
    }
}

export default Company2;