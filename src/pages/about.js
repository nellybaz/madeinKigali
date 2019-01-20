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
                        <section className='one'>
                            <div>
                                 <img src={require('../assets/images/banner-2-about.jpg')} />
                            </div>

                            <div>
                                <h5>MADE WITH LOVE</h5>
                                <p>Our DNA is made of emotions and of 90% water. This is why we like so much to play, to joke, to have fun, imperfections, kisses and doing <b>(everything)</b> with love.</p>
                            </div>

                        </section>

                        <section className='two'>
                            <div className='two-one'>
                                <h5>WHAT WE DO</h5>
                                <p>At MadeinKigali we create unique garments that inspire people and invite them to celebrate their authenticity in any moment and situation. We design clothes that can really change the mood of the people who wear them. Unique, colourful, upbeat and original garments.</p>
                            </div>
                            <div className='two-two'>
                                <img src={require('../assets/images/ab10.png')} />
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


                        <section className='three'>
                            <div className='one'>
                                <h5>OUR CREATIVE PROCESS</h5>
                                <p>Doing everything with love impacts on our deep creative and artistic essence. At MadeinKigali we want our garments to ‘infect’ the people who wear them, or buy them for someone else, with this same attitude. This is why our design process is composed of six, distinctive steps.</p>
                            </div>
                            <div className='boards'>
                                {this.displayBoards()}
                            </div>

                        </section>


                        <section className='four'>

                            <div>
                                <img src={require('../assets/images/ab6.jpg')} />
                            </div>
                            <div>
                                <h5>OUR GOAL</h5>
                                <p>We want to make the world a better place where people can be themselves, expressing their authenticity through unique creations.</p>

                            </div>
                            <div>
                                <img className='img-fit' src={require('../assets/images/ab7.jpg')} />
                            </div>

                        </section>

                    </div>

                <Footer />
            </div>
        );
    }
}


export default About;




