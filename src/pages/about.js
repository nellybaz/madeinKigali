import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import '../css/pages/about.css';

class About extends Component{


    componentDidMount(){
        window.scrollTo(0,0);
    }

    displayBoards = () =>{
        const holder = [];
        let img = require('../assets/images/ab5.jpg');

        

        for (let x = 1; x <= 6; x++) {
            holder.push(
                <div>
                    <img src={img} />
                    <div>
                        <h5>Arty inspiration</h5>
                        <p>With these key concepts in mind, the designers travel and explore their proposal for the collection and put it onto paper. Each one of them using a different art technique: painting or collage.</p>
                    </div>
                </div>
            );
            
        }
        return holder;
    }
    render(){
        return(
            <div className="about">
                <Header />
                    <div className="about-wrapper">
                        {/* <section className='one'>
                            <div>
                                 <img src={require('../assets/images/5.png')} />
                            </div>

                            <div>
                                <h5>MADE WITH LOVE</h5>
                                <p>Our DNA is made of emotions and of 90% water. This is why we like so much to play, to joke, to have fun, imperfections, kisses and doing <b>(everything)</b> with love.</p>
                            </div>

                        </section> */}

                        <section className='two'>
                            <div className='two-one'>
                                <h5>WHAT WE DO</h5>
                                <p>At MadeinKigali we create unique garments that inspire people and invite them to celebrate their authenticity in any moment and situation. We design clothes that can really change the mood of the people who wear them. Unique, colourful, upbeat and original garments.</p>
                            </div>
                            <div className='two-two'>
                                <img src={require('../assets/images/5.png')} />
                            </div>
                            <div className='two-one'>
                                <img src={require('../assets/images/ab2.jpg')} />
                            </div>
                            <div id="how-we-do-it" className='two-two-2'>
                                <h5>HOW WE DO IT</h5>
                                <p>We do it with love, and with responsibility towards people and the planet, because we believe that with clothes we can make a statement and they are a great way to tell our story. In addition, we do what we do without taking into account dominating beauty standards. At MadeinKigali, we embrace inclusive fashion and inspire everyone to dress freely, always with a positive attitude.

</p>
                                <p>Our daily challenge is turning an idea, a dream, a message into a collection that makes people feel good. We do it with love, with great attention to detail, without leaving anything to chance. All our processes are based on the Made with Love concept, a direct consequence of people’s creativity, work and talent. Our collections and each one of our garments are based on a process composed of a precise number of steps.</p>
                            </div>

                        </section>


                        {/* <section className='three'>
                            <div className='one'>
                                <h5>OUR CREATIVE PROCESS</h5>
                                <p>Doing everything with love impacts on our deep creative and artistic essence. At MadeinKigali we want our garments to ‘infect’ the people who wear them, or buy them for someone else, with this same attitude. This is why our design process is composed of six, distinctive steps.</p>
                            </div>
                            <div className='boards'>
                                {this.displayBoards()}
                            </div>

                        </section> */}

{/* 
                        <section className='four'>

                            <div>
                                <img src={require('../assets/images/ab6.jpg')} />
                            </div>
                            <div>
                                <h5>OUR GOAL</h5>
                                <p>We want to make the world a better place where people can be themselves, expressing their authenticity through unique creations.</p>

                            </div>
                            <div>
                                <img className='img-fit' src={require('../assets/images/5.png')} />
                            </div>

                        </section> */}



<section className='two'>
                            <div className='two-one'>
                                <h5>OUR GOAL</h5>
                                <p>At MadeinKigali we create unique garments that inspire people and invite them to celebrate their authenticity in any moment and situation. We design clothes that can really change the mood of the people who wear them. Unique, colourful, upbeat and original garments.</p>
                            </div>
                            <div className='two-two'>
                                <img src={require('../assets/images/5.png')} />
                            </div>
                            <div className='two-one'>
                                <img src={require('../assets/images/ab2.jpg')} />
                            </div>
                            <div id="how-we-do-it" className='two-two-2'>
                                <h5>OUR PRODUCTS</h5>
                                <p>We do it with love, and with responsibility towards people and the planet, because we believe that with clothes we can make a statement and they are a great way to tell our story. In addition, we do what we do without taking into account dominating beauty standards. At MadeinKigali, we embrace inclusive fashion and inspire everyone to dress freely, always with a positive attitude.

</p>
                                <p>Our daily challenge is turning an idea, a dream, a message into a collection that makes people feel good. We do it with love, with great attention to detail, without leaving anything to chance. All our processes are based on the Made with Love concept, a direct consequence of people’s creativity, work and talent. Our collections and each one of our garments are based on a process composed of a precise number of steps.</p>
                            </div>

                        </section>


                        <section className='five'>
                            <div className='five-left'>
                                <div className='five-left-top'>
                                    <h4>LOVE CANNOT BE POLLUTED</h4>
                                    <button>DOWNLOAD THE CERTIFICATE</button>
                                    <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s,</p>

                                    <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s,</p>
                                
                                </div>

                                <div className='five-left-bottom'>
                                    <img src={require('../assets/images/5.png')} />
                                    
                                </div>

                            </div>

                            <div className='five-right'>
                                <div className='five-right-top'>
                                <h5>OUR MAIN PROJECTS IN THE THREE AREAS WE WORK IN:</h5>
                                <div className='inner'>
                                    <img src={require('../assets/images/icons/worldwide.png')} />

                                    <div className='text-div'>
                                        <h5><b>Carbon footprint</b></h5>                                    
                                        <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s,</p>
                                    </div>  

                                                                                                   
                                </div>   

                                <div className='inner'>
                                    <img src={require('../assets/images/icons/worldwide.png')} />

                                    <div className='text-div'>
                                        <h5><b>Carbon footprint</b></h5>                                    
                                        <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s,
                                            The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s,
                                        </p>
                                    </div>  

                                                                                                   
                                </div>   


                                
                                </div>

                                <div className='five-right-bottom'>
                                <h5>FACTORY OF EMOTIONS</h5>
                                <p>
                                    The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and, more recently, by its inclusion in text layout applications, such as Aldus PageMaker.
                                </p>
                                
                                </div>
                            
                            </div>

                        </section>


                        <section className='six'>
                            <div className='left'>
                            <h3>OUR CODE OF <br></br>CONDUCT</h3>
                            <img src={require('../assets/images/background_front.jpg')} />
                            
                            </div>

                            <div className='right'>
                                <p>
                                    The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, 
                                </p>
                                <p>
                                    The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s,
                                </p>

                                <div className='inner'>
                                    <img src={require('../assets/images/icons/worldwide.png')} />

                                    <div className='text-div'>
                                                                         
                                        <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing.</p>                                </div>  
                                </div>

                                <div className='inner'>
                                    <img src={require('../assets/images/icons/worldwide.png')} />

                                    <div className='text-div'>
                                                                         
                                        <p>The Lorem Ipsum is simply dummy text of the composition</p>                               
                                    </div>  
                                </div>

                                <div className='inner'>
                                    <img src={require('../assets/images/icons/worldwide.png')} />

                                    <div className='text-div'>
                                                                         
                                        <p>The Lorem Ipsum is simply dummy text of the composition </p>                                
                                    </div>  
                                </div>

                                <div className='inner'>
                                    <img src={require('../assets/images/icons/worldwide.png')} />

                                    <div className='text-div'>
                                                                         
                                        <p>The Lorem Ipsum is simply dummy text of the composition </p>                                
                                    </div>  
                                </div>

                                <div className='inner'>
                                    <img src={require('../assets/images/icons/worldwide.png')} />

                                    <div className='text-div'>
                                                                         
                                        <p>The Lorem Ipsum is simply dummy text of the composition </p>                                
                                    </div>  
                                </div>

                                <div className='inner'>
                                    <img src={require('../assets/images/icons/worldwide.png')} />

                                    <div className='text-div'>
                                                                         
                                        <p>The Lorem Ipsum is simply dummy text of the composition </p>                                
                                    </div>  
                                </div>

                                <div className='btn-div'>
                                
                                    <button>DOWNLOAD CODE OF CONDUCT</button>
                                </div>
                                
                                 

                                
                            
                            </div>

                            
                        </section>

                        <div className='final_btn'>
                        <button>WANT TO KNOW MORE ABOUT OUR ENVIROMENTAL POLICY? REQUEST ALL INFORMATION WRITING TO info@madeinkigali.com</button>

                        </div>

                    </div>

                <Footer />
            </div>
        );
    }
}


export default About;




