import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import {Link} from 'react-router-dom';

import '../css/pages/pre_fabric_upload.css';

class PreFabricUpload extends Component{
    render(){
        return(
            <div className='PreFabricUpload'>
            <Header />

            <div className='pre-fabric-upload-wrapper'>
                <div className='inner-header'>
                    Design Your Own
                </div>


                <section className='fabric-design'>
                <div className='img-div'>
                    <img src={require('../assets/images/fab.jpg')} alt="made in kigali design fabric"/>
                </div>


                <div className='fabric-design-info'>
                    <h5 className='l-title'>Design Fabric</h5>

                    <ul>
                        <li>Design quilting, apparel and upholstery fabrics</li>
                        <li>A variety of fabrics including silks, organics and a linen blend</li>
                        <li>Instant online preview and layout tool lets you see your fabric before you order</li>
                        <li>Fabric starts at $15.75 per yard</li>
                        <li>Non-toxic inks, eco-friendly printing</li>
                        <li>Custom swatches are only $5</li>
                        <li>Browse existing fabric designs</li>
                    </ul>


                    <Link to={'/fabric/upload'} >
                        <button>Upload Fabric Display</button>
                    </Link>
                </div>

                </section>


                <section className='fabric-wallpaper-wrap'>

                    <div className='one'>
                        <h5>Design Wallpaper</h5>

                        <img src={require('../assets/images/fab2.jpg')}  alt="made in kigali design wallpaper"/>

                        <ul>
                            <li>Print your own custom wallpaper</li>
                            <li>PVC-free paper, durable and eco-friendly</li>
                            <li>Choose from self-adhesive or adhesive backing</li>
                            <li>Fully removable: perfect for apartments & rentals</li>
                            <li>24in x 12ft (61cm x 3.6m) rolls for $60/$90</li>
                            <li>Starts at $5 per linear foot for custom lengths</li>
                        </ul>

                        <Link to={'/fabric/upload'} >
                            <button>Upload Wallpaper Design</button>
                        </Link>
                    </div>


                    <div className='one'>
                        <h5>Design Wallpaper</h5>

                        <img src={require('../assets/images/fab3.jpg')}  alt="made in kigali design wallpaper"/>

                        <ul>
                            <li>Print your own custom wallpaper</li>
                            <li>PVC-free paper, durable and eco-friendly</li>
                            <li>Choose from self-adhesive or adhesive backing</li>
                            <li>Fully removable: perfect for apartments & rentals</li>
                            <li>24in x 12ft (61cm x 3.6m) rolls for $60/$90</li>
                            <li>Starts at $5 per linear foot for custom lengths</li>
                        </ul>

                        <Link to={'/fabric/upload'} >
                            <button>Upload Gift Wrap Design</button>
                        </Link>
                    </div>

                </section>

            
            </div>

            






            <Footer />
            </div>
        )
    }
}

export default PreFabricUpload;