import React, {Component} from "react";
import '../css/fabric_home.css';
import Header from '../components/header';
import Footer from '../components/footer';
import fabric_jumbo from '../assets/images/fabric_home.jpg';
import fabric1 from '../assets/images/fabric1.jpg';
import fabric2 from '../assets/images/fabric2.jpg';
import fabric3 from '../assets/images/fabric3.jpg';

import {Link} from 'react-router-dom';

class Fabric extends Component{

    displayFabricDataSmallerBox = ()=>{
        const Holder = [];
        for (let x = 0; x < 4; x++) {
            Holder.push(
                <div className="fabric-cat-two-div-inner-1">
                <h4 className="fabric-cat-two-div-inner-1-h4">Fabric By Type</h4>
                <div className="fabric-cat-two-div-inner-2">
                    <div  className="fabric-cat-two-div-inner-2-wrapper">
                        <div className="fabric-cat-two-div-inner-2-img-div">
                            <img src={fabric1} />
                        </div>

                        <p className="fabric-cat-two-div-inner-2-wrapper-p">Cutton Fabrics</p>
                    </div>

                     <div  className="fabric-cat-two-div-inner-2-wrapper">
                        <div className="fabric-cat-two-div-inner-2-img-div">
                            <img src={fabric1} />
                        </div>

                        <p className="fabric-cat-two-div-inner-2-wrapper-p">Cutton Fabrics</p>
                    </div>


                     <div  className="fabric-cat-two-div-inner-2-wrapper">
                        <div className="fabric-cat-two-div-inner-2-img-div">
                            <img src={fabric1} />
                        </div>

                        <p className="fabric-cat-two-div-inner-2-wrapper-p">Cutton Fabrics</p>
                    </div>


                     <div className="fabric-cat-two-div-inner-2-wrapper">
                        <div className="fabric-cat-two-div-inner-2-img-div">
                            <img src={fabric1} />
                        </div>

                        <p className="fabric-cat-two-div-inner-2-wrapper-p">Cutton Fabrics</p>
                    </div>
                </div>
            </div>


            );
            
            return Holder;
        }
    }

    render(){
        return(
            <div className="Fabric_home" style={{background:'white'}}>
            <Header />
            <div className="fabric_image_jumbo">
                <img src={fabric_jumbo} />
            </div>
                <div className="fabric-wrapper">
                {/* left sidebar */}
                    <div className="fabric-sidebar">
                        <details open>
                            <summary>Fabrics By Type</summary>
                            <p>Cotton Fabric</p>
                            <p>Linen Fabric</p>
                            <p>Jersey Fabric</p>
                            <p>Silk Fabric</p>
                            <p>Canvas Fabric</p>
                            <p>Cotton Fabric</p>
                            <p>Linen Fabric</p>
                            <p>Jersey Fabric</p>
                            <p>Silk Fabric</p>
                            <p>Canvas Fabric</p>
                        </details>


                         <details>
                            <summary>Fabrics By Usage</summary>
                            <p>Cotton Fabric</p>
                            <p>Linen Fabric</p>
                            <p>Jersey Fabric</p>
                            <p>Silk Fabric</p>
                            <p>Canvas Fabric</p>
                            <p>Cotton Fabric</p>
                            <p>Linen Fabric</p>
                            <p>Jersey Fabric</p>
                            <p>Silk Fabric</p>
                            <p>Canvas Fabric</p>
                        </details>


                         <details>
                            <summary>Fabrics By Properties</summary>
                            <p>Cotton Fabric</p>
                            <p>Linen Fabric</p>
                            <p>Jersey Fabric</p>
                            <p>Silk Fabric</p>
                            <p>Canvas Fabric</p>
                            <p>Cotton Fabric</p>
                            <p>Linen Fabric</p>
                            <p>Jersey Fabric</p>
                            <p>Silk Fabric</p>
                            <p>Canvas Fabric</p>
                        </details>


                         <details>
                            <summary>Labels, Tags and Accessories</summary>
                            <p>Cotton Fabric</p>
                            <p>Linen Fabric</p>
                            <p>Jersey Fabric</p>
                            <p>Silk Fabric</p>
                            <p>Canvas Fabric</p>
                            <p>Cotton Fabric</p>
                            <p>Linen Fabric</p>
                            <p>Jersey Fabric</p>
                            <p>Silk Fabric</p>
                            <p>Canvas Fabric</p>
                        </details>
                    </div>

                    {/* content */}
                    <div className="fabric-content">

                    <h4 className="fabric-content-h4">Fabric Printing Your Own Designs, Made Easy</h4>
                    <p className="fabric-content-p">Get your custom fabric printed with your own design and create 
                        a unique fabric for your project. Print your art and patterns on over 108 fabrics with different properties, constructions and uses, all handmade in UK with no minimum and ready in 1-2 days</p>
                        

                        <div className="fabric-cat-one-div">
                            <div className="fabric-cat-one-div-inner">
                                <div>
                                <Link to={'/dev/fabric_search'} >
                                    <div className="fabric-cat-one-div-inner-img-div">
                                            <img src={fabric1} />
                                        </div>

                                        <p className="fabric-cat-one-div-inner-p">See all fabrics</p>
                                    </Link>
                                </div>
                                  
                                <div>
                                    <Link to={'/dev/fabric_search'} >
                                    <div className="fabric-cat-one-div-inner-img-div">
                                            <img src={fabric2} />
                                        </div>

                                        <p className="fabric-cat-one-div-inner-p">See all fabrics</p>
                                    </Link>
                                </div>
                                 <div>
                                 <Link to={'/dev/fabric_search'} >
                                    <div className="fabric-cat-one-div-inner-img-div">
                                            <img src={fabric3} />
                                        </div>

                                        <p className="fabric-cat-one-div-inner-p">See all fabrics</p>
                                    </Link>
                                </div>
                            </div>
                        </div>


                         <div className="fabric-cat-two-div">
                           <div>
                                {this.displayFabricDataSmallerBox()}
                           </div>

                            <div>
                                {this.displayFabricDataSmallerBox()}
                           </div>

                            <div>
                                {this.displayFabricDataSmallerBox()}
                           </div>

                        </div>

                        <div className="fabric-cat-three-div">
                            <div className="fabric-cat-three-div-h4-div">
                                <h4 className="fabric-cat-three-div-h4">Printing onto fabric</h4>
                            </div>

                            <p className="fabric-cat-three-div-p">If you're looking to get into digital printing onto 
                                fabric, then you've found the right fabric printing company. Your designs
                                 are in safe hands, our technicians have deep experience
                                 with digital fabric printing ensuring every piece is top quality. Our fabrics printers 
                                 print all week long, so you're able to print your own fabric fast, with no minimum order.</p>

                                 <p className="fabric-cat-three-div-p">Let us do the hard work so that you can focus purely on design. We are here to make everything as smooth 
                                      possible for you, so getting your hands on bespoke custom printed fabric is easy.</p>

                            <button>View Our Fabrics</button>          
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Fabric;