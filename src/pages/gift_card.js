import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import img from '../assets/images/gift-card.gif';

import img2 from '../assets/images/gift2.jpg';

import img3 from '../assets/images/gift1.jpg';

import '../css/pages/gift_card.css';

class GiftCard extends Component{
    render(){
        return(
            <div className='GiftCard' style={{background:'white'}}>
                <Header />
                <div className="gift-card-wrapper">
                <img className='gift-img-gif' src={img} />
                    <div className='gift-upper-writings'>
                        <h4 className='gift-title'><b>GIFT CARD</b></h4>  
                            <p className='gift-p1'>After the perfect gift idea? Go for a Topshop gift card -

        you can send it in the post or via email. Easy.</p>

                       
                   </div>

                

                <div className='gift-card-wrapper-inner'>
                    <div className='gift-left gift-card-wrapper-inner-div'>

                        <h6><b>GIFT CARD</b></h6>
                    <p className='gift-card-wrapper-inner-div-p'>Want to send a physical gift card?

Buy online or in store and we’ll post it for you.*</p>
                    </div>
    
                    <div className='gift-right gift-card-wrapper-inner-div'>
                        <h6><b>DIGITAL GIFT CARD</b></h6>

                        <p className='gift-card-wrapper-inner-div-p'>Prefer to keep things digital?

Buy online and we’ll send via email.*</p>
                    </div>
                    
                </div>

                <div className='img-split-gift-div'>
                    <img className='img-split-gift' src={img2} />
                </div>


                <div className='gift-card-wrapper-inner gift-card-wrapper-inner-2'>
                    <div className='gift-left gift-card-wrapper-inner-div'>

                        <button className='gift-card-wrapper-inner-div-btn'>BUY NOW</button>
                    </div>
    
                    <div className='gift-right gift-card-wrapper-inner-div'>
                       <button className='gift-card-wrapper-inner-div-btn'>BUY NOW</button>
                    </div>
                    
                </div>

                <div className='gift-has-card-div'>
                    <h5><b>ALREADY HAVE A CARD?</b></h5>
                    <p className='gift-has-card-div-p'>Already purchased a card or just been given one?

Check how much money is on your gift card here.</p>

                <button className='gift-has-card-div-btn'>CHECK BALANCE</button>
                    
                </div>
                

                    
                </div>
                <Footer />
            </div>
        )
        }
    }
export default GiftCard;