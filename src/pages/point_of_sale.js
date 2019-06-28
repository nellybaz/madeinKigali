import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/point_of_sale.css';

import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div className='map-pointer'>{text}</div>;
class PointOfSale extends Component {

    static defaultProps = {
        center: {
            lat: -1.948840,
            lng: 30.077600
        },
        zoom: 13
    };

    render() {
        return (
            <div className='PointOfSale'>
                <Header />

                

                <div className='point-wrapper'>
                    <div className='point-left'>
                        <div className=''>
                            <h6>MadeinKigali Ltd</h6>
                            <p>KG 7 Ave KIgali Heights</p>
                            <p>Tel: (+250) 784650455</p>
                        </div>
                        <div className=''>
                            <h6>MadeinKigali Ltd</h6>
                            <p>KG 7 Ave KIgali Heights</p>
                            <p>Tel: (+250) 784650455</p>
                        </div>
                        <div className=''>
                            <h6>MadeinKigali Ltd</h6>
                            <p>KG 7 Ave KIgali Heights</p>
                            <p>Tel: (+250) 784650455</p>
                        </div>
                        <div className=''>
                            <h6>MadeinKigali Ltd</h6>
                            <p>KG 7 Ave KIgali Heights</p>
                            <p>Tel: (+250) 784650455</p>
                        </div>


                    </div>


                    <div style={{ height: '500px', width: '100%', marginTop: '30px', border: '2px solid black' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyCMRJ7kiGqluy7WJRc43vd6LxyvOtt_6OE' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={-1.948840}
                                lng={30.077600}
                                text={'A'}
                            // marker = {<img src= {require('../assets/images/ab1.jpg')} />}
                            />

                            <AnyReactComponent
                                lat={-1.968840}
                                lng={30.097621}
                                text={'B'}
                            // marker = {<img src= {require('../assets/images/ab1.jpg')} />}
                            />
                        </GoogleMapReact>
                    </div> 


                </div>


                <Footer />

            </div>
        )
    }
}

export default PointOfSale;