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
        if(window.innerWidth > 2200){
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
                                'The Africa we want'
                                </h4>
                                <p>
                                Support the movement
                                </p>

                                <Link to={'/dev/company/about2'}>
                                    MORE ABOUT US
                                </Link>


                                {
                          window.innerWidth < 900 ?   <div className='first-image-mobile-div'>
                          <img src={require('../assets/images/modelmadeinkigali09.1.png')}  />
                      
                      </div>: <span></span>
                      }
                            
                            </div>

                            <div id="what-we-do" className='about-section1-left-bottom'>
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
  
                      {
                          window.innerWidth > 900 ?   <div className='about-section1-right'>
                          <img src={require('../assets/images/modelmadeinkigali09.1.png')}  />
                      
                      </div>: <span></span>
                      }

                    </section>

                     <section className="about-section2">
                         <div className='section2-left'>
                            <div className='section2-left-top'>
 
                                <img src={require('../assets/images/madeinkigali11.3.png')}  alt="madeinkigali09.1"/>
                            
                            </div>

                         {
                             window.innerWidth > 900 ?
                             <div id="mik-experience" className='section2-left-bottom'>
                             <h4 className='section2-left-bottom-h4'>
                                 THE MIK EXPERIENCE
                             </h4>
 
                             <p className='section2-left-bottom-p'>We spare no effort in making your experience with us as smooth as the wind that gusts the thousand hills of Rwanda. We’re not happy until you are. Our ever-caring customer advisors work to solve your queries (on Facebook, whatsApp, live chat, email, and Instagram).
 And lastly, not forgeting our future leaders; being a student can mean living on a budget that is why we offer 10% off all the way through to graduation.
 
                                 </p>
 
                             
                             </div>:
                             <p></p>
                         }
                        
                        </div>

                        <div className='section2-right'>
                            <div id="our-product" className='section2-right-top'>
                            <h4>OUR PRODUCTS</h4>

                            <p>
                            Our products are made with a deep passion to contribute to the actualisation of the “Africa we want” vision been pioneered by African leaders. The products you buy from MIK shelf are testament to what a united front of Africans can achieve with the support of a willing government. We have added more products to our offerings and pride ourselves as leading providers of unique and quality clothing, footwear, homeware, bags, decor,  and acces
                            Beyond getting it right, our products are handmade from the best of quality materials we could source. We prioritize local suppliers over any other and sustain strict policies for our quality-control department. Every MIK product comes with a story that can be traced back to the women in various cooperatives that put materials together before the design stage.
                            </p>


                            <h4 style={{fontSize: '1.7vw'}}>Made to get it right</h4>

<p style={{position:'relative', bottom:'10px'}}>
Whoever associates or engages with made in Kigali is left with a story to tell. From employees and partners to customers, our service is unmatched and is ever improving. When you buy and/or work for Made in Kigali, you have a relationship with us that we will nurture and you will undoubtedly appreciate. Our employees are more than workers, they are our partners.  We encourage a work environment in which creativity can thrive and that is why our products are usually unique and incredibly attractive. Just as it is known, It feels good to do good, so responsibility is at the core of everything we do. We are dramatically passionate about quality.
If you ever doubt our sober mission, find out how we source our raw-materials, the caring partners we work with, our employee conditions, community engagement and so much more. All of this is to satisfy our responsibility to you.
</p>
                            </div>

                            <div id="code-of-conduct" className='section2-right-bottom'>
                            <h4>CODE OF CONDUCT</h4>

                          

<p>
All our suppliers and/or partners are subject to the same non-compromisable MIK Code of Conduct (CoC). We are expressly non-tolerant to discrimination, abuse, unlawful labour and . The New Labour Code (law n° 66/2018 of 30/08/2018 regulating labour in Rwanda) of the Republic of Rwanda guides our organisation’s by-laws while we strive to remain compliant to all of the other laws and regulations we are expected to follow. 

Very notable from our Code of Conduct is also our unwavering commitment to ensuring that we source materials that are not hazardous to the environment and/or can be recycled for reuse. Animal welfare is also at the core of what we protect and we are intensifying our efforts in this regard day after another.

To ensure seamless compliance with our Code of Conduct by our suppliers and partners, we have out in place various programs and activities that include:

</p>
<ul>
<li>Outsourcing audit firms</li>
    <li>Onboarding new suppliers/partners</li>
    <li>Regular Quality Evaluation programs</li>
    <li>Partnerships with Conservation organisations</li>
    <li>Annual re-training for staff</li>

    </ul>



    <h4 style={{fontSize: '1.7vw'}}>Eco-Fashion</h4>
<p>
Made in Kigali believes in adding value to the environment without robbing it; that been the reason we make the environment greener for every sale we are privileged to make. In compliance with the government of Rwanda’s vision, we operate under a “Green Growth” goal that aims at making our entity the number ONE echo friendly fashion house in Africa by 2030. 
Our products are packaged and made out of materials that are either 100% echo friendly or can be recycled after use. It would amaze you to know that we are 100% pure plastic intolerant and will continue to operate like that in the foreseeable future.

</p>

<p><b>
Consistent carbon footprint reduction efforts
</b>
</p>

<p>
Every business year, we engage our organisation in discussions with environmental specialists on ways in which we could further reduce our carbon-footprint against our performance in that area for the previous year.
</p>

 <p><b>
 Pioneering the Conservation Agenda
 </b></p>

 <p>
 Our impact goes beyond the products we sell or the women we empower, we have actualised plans to lead the conservation business.

  </p>

                            </div>
                        </div>

                    </section>


                    <section className='about-section3'>


                   
                    <div className='about-section3-left'>

                    {
                             window.innerWidth < 900 ?
                             <div id="mik-experience" className='section2-left-bottom experience-2'>
                             <h4 className='section2-left-bottom-h4'>
                                 THE MIK EXPERIENCE
                             </h4>
 
                             <p className='section2-left-bottom-p'>We spare no effort in making your experience with us as smooth as the wind that gusts the thousand hills of Rwanda. We’re not happy until you are. Our ever-caring customer advisors work to solve your queries (on Facebook, whatsApp, live chat, email, and Instagram).
 And lastly, not forgeting our future leaders; being a student can mean living on a budget that is why we offer 10% off all the way through to graduation.
 
                                 </p>
 
                             
                             </div>:
                             <p></p>
                         }

                        <img src={require('../assets/images/madeinkigali11.1.png')} />
                    
                    </div>

                    <div id="mik-brands" className='about-section3-right'>
                        <h4 style={{position:'relative',}} className='sub-h4-1'>THE MIK BRANDS</h4>
                            <br></br>
                        <p>
                        
                        Our fashion sense is like no other. MIK Brands are produced with accurate attention to detail to bring you the best of clothing, shoes, accessories and homeware you can possibly get. When it comes to sourcing external brands at MIK, we ensure to retain quality, authenticity and exclusivity. Offering you the best you can get is not an extra service for us, it is standard practice
                        </p>
                    

                    <h4 className='sub-h4'>MIK DESIGN</h4>
                    <p>
                    
                    Expression and Identity are at the core of what we create. MIK DESIGNS illuminates major trends, according every one of our customers the chance to express themselves without speaking.  Piece after another, our designs are just a representation of you, the unmatched customers that we serve. 
                    </p>

                   <h4 className='sub-h4'>MIK EDITION</h4>
                   <p>                   
                   The MIK EDITION is curated to ensure that the wardrobe choices you make for the irreplaceable moments and events fit without compromising style. In our size ranges and including our beautiful MIK EDITION Wedding Collection, we'll have you dancing before the party's even begun.
                   </p>
                    

                    <h4 className='sub-h4'>MIK 1950</h4>
                     <p>
                     Our designs are heavily influenced by the pop art movement that sprout in the mid 1950. This collection  adopts the bold expressionism to the Pop Art aesthetic while mixing with existing African prints to democratise fashion for the trendy clientele. 
                    </p>
                    <h4 className='sub-h4'>
                        MIK COLLABS</h4>
                     <p>
                     You do not have worry about choosing between comfort and style, we believe that the two define fashion. Beyond that, we understand that it is in that of ours and your best interest to do good, that is why our exclusive MIK & Co collection works with Gorilla Guardians Village to improve the lives of local communities by offering skills and support to drive sustainable development.
                    </p>


                    
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