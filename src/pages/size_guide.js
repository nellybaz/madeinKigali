import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/size_guide.css';

class SizeGuide extends Component{
    constructor(props){
        super(props)
        this.state = {
            sliderOpen: false,
        }
    }


    handleSlider=(x)=>{
        // alert("hi")
       if(x == 1){
        this.setState({
            sliderOpen: !this.state.sliderOpen,
    })
       }

       else if(x == 0 && this.state.sliderOpen){
        this.setState({
            sliderOpen: !this.state.sliderOpen,
    })
       }
    }
    render(){
        return(
            <div className='SizeGuide'>
                <Header /> 

                <div className={ this.state.sliderOpen ? 'slidingSetion': 'sqw-hide-slider'}>
                    <h2>Size Guide</h2>

                    <h3>JEANS</h3>

                    <h5>ALL SIZES ON THIS SITE ARE UK SIZES</h5>

                    <p>Find Your Size</p>

                    <p>
                    Check your measurements to find out your size.
                    </p>

                    <p>
                    Remember to follow the 'How to Measure' guide to make sure you have the correct measurements. Our Jeans are designed to fit to the following body measurements.
                    </p>

                   
                </div>

                <div className='size-guide-wrapper' onClick={()=> this.handleSlider(0)}>
                    <div className='sgw-inner-top'>
                        <div className='sgw-top-one'>
                            <h3>Size Guide</h3>

                            <p>
                                Here you can check your own measurements against our clothing guide to find 
                                out what size should fit you best, or we'll do it for you with our 
                                size calculator.
                            </p>
                        </div>

                        <div className='sgw-top-two'>
                        <h2>CLOTHING</h2>
                        </div>

                        <div className='sgw-top-three'>
                            <ul>
                                <li onClick={() => this.handleSlider(1)}>
                                    JEANS
                                </li>
                                <li>
                                    DRESSES
                                </li> 
                                <li>
                                    TROUSERS, LEGGINGS, SHORTS & SKIRTS
                                </li>
                                <li>
                                    TOPS, JACKETS & COATS
                                </li>
                                <li>
                                    JUMPSUITS & PLAYSUITS
                                </li>
                                <li>
                                    SWIMWEAR
                                </li>
                                <li>
                                    NIGHTWEAR
                                </li>
                                
                            </ul>
                        </div>
                    
                    </div>

                    <div className='sgw-inner-top'>
                        <div className='sgw-top-one'>
                            <h3>Size Guide</h3>

                            <p>
                                Here you can check your own measurements against our clothing guide to find 
                                out what size should fit you best, or we'll do it for you with our 
                                size calculator.
                            </p>
                        </div>

                        <div className='sgw-top-two'>
                        <h2>CLOTHING</h2>
                        </div>

                        <div className='sgw-top-three'>
                            <ul>
                                <li onClick={() => this.handleSlider(1)}>
                                    JEANS
                                </li>
                                <li>
                                    DRESSES
                                </li> 
                                <li>
                                    TROUSERS, LEGGINGS, SHORTS & SKIRTS
                                </li>
                                <li>
                                    TOPS, JACKETS & COATS
                                </li>
                                <li>
                                    JUMPSUITS & PLAYSUITS
                                </li>
                                <li>
                                    SWIMWEAR
                                </li>
                                <li>
                                    NIGHTWEAR
                                </li>
                                
                            </ul>
                        </div>
                    
                    </div>


                    {/* <div className='sgw-inner-bottom'>
                    
                    </div> */}
                
                </div>


                <Footer />
            </div>
        )
    }
}

const styles = {

}

export default SizeGuide;
