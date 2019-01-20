import React, {Component} from 'react';
import '../css/pages/fabric_upload.css';

import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';

class Fabric_Upload extends Component{
    render(){
        return(
            <div className="fabric_upload" style={{background:'white'}}>
                <Header />
                    <section className="upload-wrapper">
                        <div className="fabric-upload-carousel">
                            <h4>Upload Your Designs</h4>
                            <p>Get started with an original design, photo or your kid’s artwork</p>
                        </div>

                        <div className="fabric-upload-content">
                            <div>
                                <h5>1. Select Your File</h5>
                                <p>Acceptable formats: <b>JPEG, JPG, PNG, GIF</b></p>
                                <p>Files must be less than 40MB (150 DPI recommended) </p>

                                <input type="file" />


                                {/* horizontal line */}
                                <div className="horizontal-line"></div>

                                <h5>2. Comfirm Copyright</h5>
                                <p><b>Help Us Respect the Rights of Artists</b></p>
                                <p>Please do not upload a design that you did not create unless 
                                you have permission to do so. Reproducing copyrighted, trademarked or
                                otherwise protected material is a violation of Spoonflower’s Terms of Service.</p>

                                <span><input type="checkbox" /> I own the rights or have permission to use these designs, and I agree to the Spoonflower Terms of Service.</span>
                            

                                {/* horizontal line */}
                                <div className="horizontal-line"></div>


                                <h5>3. Upload Your FIles</h5>
                                <Link to={'/dev/fabric/upload/select/1'} ><button className="btn-upload-fabric">Upload</button></Link>
                            </div>

                            
                            <div className="fabric-upload-right">
                                <h5>At MadeinKigali you can...</h5>

                                <h6>Design Fabric</h6>
                                <ul>
                                    <li>Design quilting, apparel and upholstery fabrics</li>
                                    <li>Choose from silks, organics, a linen blend and more</li>
                                    <li>Instant online preview and layout tool</li>
                                    <li>Browse fabric marketplace</li>
                                </ul>

                                 <h6>Design Wallpaper</h6>
                                <ul>
                                    <li>Design quilting, apparel and upholstery fabrics</li>
                                    <li>Choose from silks, organics, a linen blend and more</li>
                                    <li>Instant online preview and layout tool</li>
                                    <li>Browse fabric marketplace</li>
                                </ul>

                                 <h6>Design Gift Wrap</h6>
                                <ul>
                                    <li>Design quilting, apparel and upholstery fabrics</li>
                                    <li>Choose from silks, organics, a linen blend and more</li>
                                    <li>Instant online preview and layout tool</li>
                                    <li>Browse fabric marketplace</li>
                                </ul>

                                <p>Check out design resources on our blog.</p>
                            </div>
                        </div>
                        
                    </section>


                  



                <Footer/>
            </div>
        );
    }
}

export default Fabric_Upload;