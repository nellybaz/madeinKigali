import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/company.css';
import '../css/utils/screen.css';
import {Link} from 'react-router-dom';

import CountTo from 'react-count-to';
import img1 from '../assets/images/madeinkigali02.jpg';

import img1_1 from '../assets/images/madeinkigali05.jpg';

import img2 from '../assets/images/banner-2-about.jpg';
import img3 from '../assets/images/banner-3-about.jpg';
import img4 from '../assets/images/banner-4-about.jpg';
import store from '../assets/images/store.jpg';

import company_bag_display from '../assets/images/madeinkigali11.png';

class About extends Component {

    constructor(props){
        super(props)
        this.state={
            show_store_count:false,
            turn_over_count:false,
            markets_count:false,
            large_screen_class: '',
        }
    }


    handleScroll=(event)=> {
        if (Math.round(window.scrollY) >= 320) {
                //  alert('yes')
  
                 this.setState({
                     show_store_count: true,
                 })
                 
                 }

        if(Math.round(window.scrollY) >= 320){

                 this.setState({
                    turn_over_count: true,
                })
                
                  }

        if(Math.round(window.scrollY) >= 720){

        this.setState({
            markets_count: true,
        })
        
            }
  
        else{
            this.setState({
                show_store_count: false,
                turn_over_count:false,
                markets_count: false,
            })
            
        }
                }

        
    componentDidMount() {
        // componentDidMount(){
            if(window.innerWidth > 1400){
              this.setState({
                large_screen_class: "large_screen",
              });
            }
        //   }


        window.scrollTo(0,0);




        setInterval(async () => {

            window.addEventListener('scroll', this.handleScroll());

        }, 10);
    } 

    
    render() {

        const fn = value => <p className='product-counter3'>{value}%</p>;
        const fn2 = value => <p className='product-counter'>{value}</p>;
        const fn2_plus = value => <p className='product-counter'><span className='product-counter' style={{position: 'relative', top: '45px'}}>+</span> <br></br>{value}</p>; 
        const fn3 = value => <p className='product-counter3'>{value}</p>;
        const fn3_plus = value => <p className='product-counter3'>+{value}</p>;
        return (
            <div className={`About ${this.state.large_screen_class}`}>
                <Header />
                <div className='about-wrapper'>
                    <div className='div about-wrapper-div1'>
                        <div className='div-title-div'>
                            <h5>MOULDED <br></br><span>SINCE 2013</span></h5>
                            <p>
                            MIK is an authentic, multi-platform experience that aims at resonating with the people who use it, because it’s built by them. 
It’s a place made to get it right to shop and be inspired to develop your own style. 
                            </p>
                            {/* <Link to={'/dev/company/about2'}><button>ABOUT US</button></Link> */}
                        </div>
                        <div className='div-image-div'>
                            <img src={img1} />
                        </div>
                    </div>
 
{/* 
                     <div className='div about-wrapper-div3'>

                        <div className='div-image-div'>
                            <img src={img1_1} />
                        </div>

                        <div className='div-title-div'>
                           
                        
                        <h5>The Africa We Want</h5>
                        <p>Support the Movement</p>
                       
                        </div>

                    </div> */}



                    <div className='box-wrapper'>
                        <div>
                            <h5><b>About Us</b></h5>
                            <p>
                            We are selflessly committed to providing the most authentic handmade fashion products that Rwanda has to offer while ensuring that the hundreds of women that we work with in producing the products are the priority beneficiaries to the proceeds.
                            </p>

                            <button className='btn-company'>WHO WE ARE</button>
                        </div>
                        <div>
                            <h5><b>Our Products</b></h5>
                            <p>
                            From clothes and footwear to homeware, our local but highly talented designers focus on the details to ensure that each piece is perfect for your look and comfort. Our flattering styles always fit with no fuss. We do not stop until each product is made to perfectly fit you. 
                            </p>

                            <button className='btn-company'>WHAT WE DO</button>
                        </div>
                        <div>
                            <h5><b>The MIK Experience</b></h5>
                            <p>
                            we are on a never ending journey. We are constantly improving to make it all just that bit better every day. From inspiring to contributing, if it hasn’t been done before, we find our way to make it happen.
                            </p>

                            <button className='btn-company'>WHAT WE GUARANTEE</button>
                        </div>
                        <div>
                            <h5><b>The MIK Brands</b></h5>
                            <p>
                            The Made in Kigali concept is not to make you look good only, your comfort is as much a priority. 
                            </p>

                            <button className='btn-company'>OUR PROJECTS</button>
                        </div>
                        <div>
                            <h5><b>Code of Conduct</b></h5>
                            <p>
                            Our commitment to responsibility lives in the materials we choose, the ethical partners we work with, our employee benefits, community involvement and so much more. For MIK, we are beyond commercial criteria, we have ethical trading, sustainable sourcing and animal welfare at the heart of how we work.
                            </p>

                            <button className='btn-company'>CODE OF CONDUCT</button>
                        </div>
                    </div>


                    <section className='long'>
                    
 
                   

                    <div className='large-image'>
                        
                    </div>

                    <div className='right-content'>

                        <div className='facts'>
                        
                            <h5>LIFE & FACTS</h5>
                            <p>
                            We are a pan-African and multi-cultural fashion house. With a specific focus on footwear, clothing, bags and homeware, we offer our   
                                                            products through in-store purchase, e-commerce and order services.
                            </p>
                        </div>
                         <div className='products'>
                            <div className='prdt'>                                
                                <img src={company_bag_display} />
                                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginLeft: '-40px' }}>
                    { this.state.show_store_count && <CountTo to={8} speed={2000}>{fn2}</CountTo> }
                    {
                                     !this.state.show_store_count && <p className='product-counter'>8</p>
                                 }
                                <p className="company-para counters-p">Product Category</p>
                                </div>
                            </div>

                            <div className='distribution'>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                { this.state.show_store_count &&  <CountTo to={5} speed={2000}>{fn2}</CountTo> }
                                {
                                     !this.state.show_store_count && <p className='product-counter'>5</p>
                                 }
                                <p style={{textDecoration: 'underline'}} className='counters-p'>Ditribution Channels</p>
                                </div>
                            </div>
                            
                        </div>


                        <div className='products products2' style={{borderBottom:'none'}}>
                            <div className='prdt'>                          
                                
                                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                { this.state.turn_over_count &&  <CountTo to={5} speed={2000}>{fn3_plus}</CountTo> }
                                {
                                     !this.state.show_store_count && <p className='product-counter3'>+5</p>
                                 }
                               
                                <p className='investment-p counters-p'>MILLION DOLLARS INVESTMENT IN RWANDA</p>
                                </div>
                            </div>

                            

                            <div className='distribution'>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end' }}>
                                { this.state.turn_over_count && <CountTo to={7} speed={2000}>{fn3}</CountTo> }
                                {
                                     !this.state.show_store_count && <p className='product-counter3'>7</p>
                                 }
                               
                                
                                <p style={{paddingLeft:'10px'}} className='counters-p'>NUMBER OF COUNTRIES OUR PRODUCTS ARE SOURCED FROM</p>
                                </div>
                            </div>
                            
                        </div>


                        <div className='products products3 distribution2' style={{borderBottom:'none'}}>
                            <div className='prdt'>                          
                                
                                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                { this.state.turn_over_count &&  <CountTo to={70} speed={2000}>{fn}</CountTo> }
                                {
                                !this.state.show_store_count && <p className='product-counter3'>70%</p>
                                 }
                                
                                <p className='counters-p'>MORE SUSTAINABLE COTON SOURCE SINCE 2016</p>
                                </div>
                            </div>

                            

                            <div className='distribution'>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end' }}>
                                { this.state.turn_over_count && <CountTo to={1200} speed={2000}>{fn2_plus}</CountTo> }
                                {
                                !this.state.show_store_count && <p className='product-counter'><span className='product-counter' style={{position: 'relative', top: '45px'}}>+</span><br></br>1200</p>
                                 }
                                <p className='counters-p'>ARTISANS</p>
                                </div>
                            </div>
                            
                        </div>



                        <div className="products map-section" style={{borderBottom:'none'}}>
                                 <div>
                                     <img src={require('../assets/images/company-map.jpg')} />
                                 </div>

                                 <div>
                                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                { this.state.markets_count &&  <CountTo to={120} speed={2000}>{fn2}</CountTo> }
                                    <p style={{fontSize:'12px'}} className='' style={{position:'relative', bottom:'25px', fontSize:'0.7rem'}}><b>MARKETS</b></p>
                                    </div>
                                     
                                 </div>

                        </div>
                        
                    </div>
                    </section>



                    <section>
                        <div className='newsroom'>
                            <p><span>THE EDIT</span> <br></br>
                            Get your fix from the trends you need to know from MIK.    
                            </p>
                            <Link to={'/dev/blog/home'} ><button className='btn-company'>ACCESS THE EDIT</button></Link>
                        </div>
                    </section> 

                </div>

                <Footer />
            </div>
        )
    }
}
export default About;