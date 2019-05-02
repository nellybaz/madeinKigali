import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/size_guide.css';

// import '../css/pages/size_guide.scss';

class SizeGuide extends Component {
    // SlidingSection: ;
    constructor(props) {
        super(props);
        this.state = {
            sliderOpen: false,
            brandsOpen: false,
            brandsOpenClothing: false,
            // slidingSection: document.getElementsByClassName("slidingSection"),
            // sticky: this.state.slidingSection.offsetTop,
        }
    }


    myFunction = (y) => {
        // alert(this.state.slidingSection.toString());
        if (y == 1) {
            this.setState({
                brandsOpen: !this.state.brandsOpen,
            })
        } else if (y == 0 && this.state.brandsOpen) {
            this.setState({
                brandsOpen: !this.state.brandsOpen,
            })
        }
    };
    myFunction2 = (z) => {
        if (z == 1) {
            this.setState({
                brandsOpenClothing: !this.state.brandsOpenClothing,
            })
        } else if (z == 0 && this.state.brandsOpenClothing) {
            this.setState({
                brandsOpenClothing: !this.state.brandsOpenClothing,
            })
        }
    };
    handleSlider = (x) => {
        // alert(this.state.sliderOpen);
        if (x == 1) {
            this.setState({
                sliderOpen: !this.state.sliderOpen,
            })
        } else if (x == 0 && this.state.sliderOpen) {
            this.setState({
                sliderOpen: !this.state.sliderOpen,
            })
        }
    };

    render() {
        return (
            <div className='SizeGuide'>
                <Header/>

                <div className={this.state.sliderOpen ? 'slidingSection' : 'sqw-hide-slider'} onClick={this.myFunction}>
                    <h2>Size Guide</h2>

                    <h3>JEANS</h3>

                    <h5>ALL SIZES ON THIS SITE ARE UK SIZES</h5>

                    <p>Find Your Size</p>

                    <p>
                        Check your measurements to find out your size.
                    </p>

                    <p>
                        Remember to follow the 'How to Measure' guide to make sure you have the correct measurements.
                        Our Jeans are designed to fit to the following body measurements.
                    </p>
                </div>

                <div className="first_wrapper">
                    <div className="first_wrapper-row1">
                        <div className={!this.state.sliderOpen ? 'size-guide-wrapper' : 'size-guide-wrapper1'}
                             onClick={() => this.handleSlider(0)}>
                            <div className='sgw-inner-top'>
                                <div className='sgw-top-one'>
                                    <h3 className="mik-size-guide">MADE IN KIGALI</h3>
                                    <h3 className="size-guide-head">Size Guide</h3>
                                    <img src={require('../assets/images/size_icon.jpeg')} alt=""/>

                                    <p className="p-size-guide-head">
                                        Here you can check your own measurements against our clothing guide to find
                                        out what size should fit you best, or we'll do it for you with our
                                        size calculator.
                                    </p>
                                </div>

                                <div className='sgw-top-two'>
                                    <h2 className="sgw-top-two-h2">CLOTHING</h2>
                                    <div
                                        className={!this.state.brandsOpenClothing ? 'size-guide-icons-clothing' : 'size-guide-icons-clothing-alt'}
                                        onClick={() => this.myFunction2(1)}>
                                        <div className="icon-down-clothing">
                                            <i className="fas fa-chevron-down" onClick={() => this.myFunction2(1)}/>
                                        </div>
                                        <div className="icon-up-clothing">
                                            <i className="fas fa-chevron-up" onClick={() => this.myFunction2(1)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className={!this.state.brandsOpenClothing ? 'sgw-top-three' : 'sgw-top-three-alt'}
                                     onClick={() => this.myFunction2(1)}>
                                    <ul>
                                        <li className="sgw-top-three-li" onClick={() => this.handleSlider(1)}>
                                            JEANS
                                        </li>
                                        <li className="sgw-top-three-li">
                                            DRESSES
                                        </li>
                                        <li className="sgw-top-three-li">
                                            TROUSERS, LEGGINGS, SHORTS & SKIRTS
                                        </li>
                                        <li className="sgw-top-three-li">
                                            TOPS, JACKETS & COATS
                                        </li>
                                        <li className="sgw-top-three-li">
                                            JUMPSUITS & PLAYSUITS
                                        </li>
                                        <li className="sgw-top-three-li">
                                            SWIMWEAR
                                        </li>
                                        <li className="sgw-top-three-li">
                                            NIGHTWEAR
                                        </li>

                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="hello">
                        <div className={!this.state.sliderOpen ? 'first_wrapper-row3' : 'first_wrapper-row3-alt'}
                             onClick={() => this.handleSlider(0)}>
                            <div className="second-row-size-guide">
                                <div className="row2-size-guide-content1">
                                    <h2 className="row2-size-guide-h2">Lingerie</h2>
                                </div>
                                <div className="row2-size-guide-content2">
                                    <h2 className="row2-size-guide-h2">Shoes</h2>
                                </div>
                                <div className="row2-size-guide-content3">
                                    <h2 className="row2-size-guide-h2">Accessories</h2>
                                </div>
                            </div>

                            <div className="third-row-size-guide">
                                <div className="row3-size-guide-content1">
                                    <h2 className="row3-size-guide-h2">Maternity</h2>
                                </div>
                                <div className="row3-size-guide-content2">
                                    <h2 className="row3-size-guide-h2">Petite</h2>
                                </div>
                                <div className="row3-size-guide-content3">
                                    <h2 className="row3-size-guide-h2">Tall</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hello">
                        <div className={!this.state.sliderOpen ? 'first_wrapper-row4' : 'first_wrapper-row4-alt'}
                             onClick={() => this.handleSlider(0)}>
                            <div className="size-guide-last-row">
                                <div className="lastrow-size-guide-content1">
                                    <h2 className="lastrow-size-guide-h2">Brands</h2>
                                    <div
                                        className={!this.state.brandsOpen ? 'size-guide-icons' : 'size-guide-icons-alt'}
                                        onClick={() => this.myFunction(1)}>
                                        <div className="icon-down">
                                            <i className="fas fa-chevron-down" onClick={() => this.myFunction(1)}/>
                                        </div>
                                        <div className="icon-up">
                                            <i className="fas fa-chevron-up" onClick={() => this.myFunction(1)}/>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={!this.state.brandsOpen ? 'lastrow-size-guide-content2' : 'lastrow-size-guide-content2-alt'}
                                    onClick={() => this.myFunction(0)}>
                                    <div className='lastrow-sgw-top-three'>
                                        <ul>
                                            <li className="lastrow-sgw-top-three-li"
                                                onClick={() => this.handleSlider(1)}>
                                                ADIDAS ORIGINALS
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                CALVIN KLEIN
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                CARVELA
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                CLUB PETANQUE
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                FLYNN SKYE BRIDAL
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                GLAMOROUS
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                GLAMOROUS PETITES
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                GLAMOROUS TALL
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                GUESS
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className={!this.state.brandsOpen ? 'lastrow-size-guide-content3' : 'lastrow-size-guide-content3-alt'}
                                    onClick={() => this.myFunction(0)}>
                                    <div className='lastrow-sgw-top-three'>
                                        <ul>
                                            <li className="lastrow-sgw-top-three-li"
                                                onClick={() => this.handleSlider(1)}>
                                                LOVE
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                MOTEL
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                OH MY LOVE
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                RARE
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                TFNC
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                THE RAGGED PRIEST
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                TOMMY HILFIGER
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                WYLDR
                                            </li>
                                            <li className="lastrow-sgw-top-three-li">
                                                MADE IN KIGALI
                                            </li>

                                        </ul>
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

const styles = {};

export default SizeGuide;
