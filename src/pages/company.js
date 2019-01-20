import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/company.css';
import {Link} from 'react-router-dom';

import CountTo from 'react-count-to';

import img1 from '../assets/images/banner-1-about.jpg';
import img2 from '../assets/images/banner-2-about.jpg';
import img3 from '../assets/images/banner-3-about.jpg';
import img4 from '../assets/images/banner-4-about.jpg';
import store from '../assets/images/store.jpg';

import company_bag_display from '../assets/images/company-bag-display.png';


class About extends Component {

    constructor(props){
        super(props)
        this.state={
            show_store_count:false,
        }
    }


    handleScroll=(event)=> {
        if (Math.round(window.scrollY) >= 2520) {
                 //alert('yes')
  
                 this.setState({
                     show_store_count: true,
                 })
                 
                 }
  
        else{
            this.setState({
                show_store_count: false,
            })
            
        }
                }

        
    componentDidMount() {
        window.scrollTo(0,0);




        setInterval(async () => {

            window.addEventListener('scroll', this.handleScroll());

        }, 10);
    } 

    
    render() {

        const fn = value => <span className='counter'>{value}</span>;
        const fn2 = value => <span className='product-counter'>{value}</span>;
        return (
            <div className='About'>
                <Header />
                <div className='about-wrapper'>
                    <div className='div div1'>
                        <div className='div-title-div'>
                            <h5>ATYPICAL SINCE 2018</h5>
                            <p>We are a global brand with over 4,500 employees of 100 different nationalities. We invite people to express their authenticity through unique clothing.</p>
                            <button>ABOUT US</button>
                        </div>
                        <div className='div-image-div'>
                            <img src={img1} />
                        </div>
                    </div>


                    <div className='div div2'>
                        <div className='div-image-div'>
                            <img src={img2} />
                        </div>

                        <div className='div-title-div'>
                            <h5>MADE WITH LOVE</h5>
                            <span><button><Link to={'/dev/company/about'} >WHAT WE DO</Link></button><button><Link to={'/dev/company/about#how-we-do-it'} >HOW WE DO IT</Link></button><button><Link to={'/dev/company/about'} >OUR GOAL</Link></button></span>
                        </div>

                    </div>


                    <div className='div div3'>

                        <div className='div-title-div'>
                            <h5>LOVE THE WORLD</h5>
                            <p>This is not an overstatement: we put a lot of love into everything we do. We pay great attention to details, we carefully fine-tune each one of our garments. This is the way we like to do our job.</p>
                        </div>


                        <div className='div-image-div'>
                            <img src={img3} />
                        </div>

                    </div>


                    <div className='box-wrapper'>
                        <div>
                            <h5><b>At MadeInKigali we believe...</b></h5>
                            <p>in inclusive fashion that celebrates diversity, in creating clothes that help people tell their own story...</p>

                            <button className='btn-company'>WHAT WE DO</button>
                        </div>
                        <div>
                            <h5><b>At MadeInKigali we believe...</b></h5>
                            <p>in inclusive fashion that celebrates diversity, in creating clothes that help people tell their own story...</p>

                            <button className='btn-company'>WHAT WE DO</button>
                        </div>
                        <div>
                            <h5><b>At MadeInKigali we believe...</b></h5>
                            <p>in inclusive fashion that celebrates diversity, in creating clothes that help people tell their own story...</p>

                            <button className='btn-company'>WHAT WE DO</button>
                        </div>
                        <div>
                            <h5><b>At MadeInKigali we believe...</b></h5>
                            <p>in inclusive fashion that celebrates diversity, in creating clothes that help people tell their own story...</p>

                            <button className='btn-company'>WHAT WE DO</button>
                        </div>
                        <div>
                            <h5><b>At MadeInKigali we believe...</b></h5>
                            <p>in inclusive fashion that celebrates diversity, in creating clothes that help people tell their own story...</p>

                            <button className='btn-company'>WHAT WE DO</button>
                        </div>
                    </div>



                    <div className='div div4'>

                        <div className='div-title-div'>
                            <h5><b>PEOPLE FIRST</b></h5>
                            <p>This is not an overstatement: we put a lot of love into everything we do. We pay great attention to details, we carefully fine-tune each one of our garments. This is the way we like to do our job.</p>

                            <div className='div4-inner'>
                                <div>
                                    <p><span><b>What are we looking for?</b></span><br></br>
                                    Authentic, original, talented people. In other words, we are looking for you.</p>

                                    <button className='btn-company'>PEOPLE</button>
                                </div>
                                <div>
                                    <p><span><b>Express your talent</b></span><br></br>
                                    Come and create a better world with us! And more positive! From Barcelona, in our logistic centers or in our stores.</p>

                                    <button className='btn-company'>CAREERS</button>
                                </div>
                                
                            </div>
                        </div>


                        <div className='div-image-div'>
                            <img src={img4} />
                        </div>

                    </div>


                    <section className='long'>
                    
 
                   

                    <div className='large-image'>
                        
                    </div>

                    <div className='right-content'>

                        <div className='facts'>
                        
                            <h5>LIFE & FACTS</h5>
                            <p>We are a multi-category and multi-channel company. We design, distribute and sell 8 product categories through 13 channels in about 100 countries. Check this out</p>
                        </div>


                        <div className='stores'>
                            <div className='counting'>
                                 +{
                                     this.state.show_store_count && <CountTo to={167} speed={2000}>{fn}</CountTo>
                                 }

                                 {
                                     !this.state.show_store_count && <p className='counter'>167</p>
                                 }
                                 {/* <br></br> */}
                                 <span style={{fontSize: '1rem', fontWeight:'bold'}}>STORES</span>
                            </div>

                            <div className='store-img'>
                                <img src={store} />
                            </div>
                            
                        </div>



                         <div className='products'>
                            <div className='prdt'>                                
                                <img src={company_bag_display} />
                                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                <CountTo to={8} speed={2000}>{fn2}</CountTo>
                                <p>Product Category</p>
                                </div>
                            </div>

                            <div className='distribution'>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                <CountTo to={9} speed={2000}>{fn2}</CountTo>
                                <p>Ditribution Channels</p>
                                </div>
                            </div>
                            
                        </div>


                        <div className='products'>
                            <div className='prdt'>                          
                                
                                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                <CountTo to={800} speed={2000}>{fn}</CountTo>
                                <p>MILLION DOLLARS IN TURN OVER</p>
                                </div>

                                <img src={require('../assets/images/company-girl.png')} style={{height: '320px', maxWidth: '150px', position:'relative', bottom:'100px'}} />
                            </div>

                            <div className='distribution'>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                <CountTo to={120} speed={2000}>{fn2}</CountTo>
                                <p>Employees</p>
                                </div>
                            </div>
                            
                        </div>



                        <div className="products map-section">
                                 <div>
                                     <img src={require('../assets/images/company-map.jpg')} />
                                 </div>

                                 <div>
                                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                                    <CountTo to={120} speed={2000}>{fn2}</CountTo>
                                    <p><b>Markets</b></p>
                                    </div>
                                     
                                 </div>

                        </div>
                        
                    </div>
                    </section>


                    <section>
                        <div className='newsroom'>
                            <p><span>NEWSROOM</span> <br></br>
                                Access the latest corporate news from MadeinKigali.
                            </p>


                            <Link to={'/dev/blog/home'} ><button className='btn-company'>ACCESS THE NEWSROOM</button></Link>
                        </div>
                    </section>

                </div>

                <Footer />
            </div>
        )
    }
}
export default About;