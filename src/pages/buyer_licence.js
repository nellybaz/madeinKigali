import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/licences.css';
import Header from '../components/header';
import Footer from '../components/footer';

class BuyerLicence extends Component {


    render() {

        return (
            <div style={{ background: 'white' }}>
                <Header />
                <section className="licences-section">

                    <div className="licences-top-bar">

                        <Link className="_active" to={'#'}>Buyer Licence Agreement</Link>
                        <Link to={'/dev/seller_licence'}>Seller Licence Agreement</Link>

                    </div>

                    <div className="licences-terms">
                    <h1 className="licences-h1">Standard License (Non-exclusive)</h1>
                        <p className="licences-p">
                        Our Standard License allows you to use the design for digital and physical reproduction such as websites, ebooks, apps, software, books, magazines, posters, packaging and and other promotional/marketing media that is not for resale. The supplied downloadable file is a hi-resolution flat JPG file. Choosing an Extended or Premium License allows you do even more with the designs.
                        </p>

                        <h1 className="licences-h1">Extended License Options (Non-exclusive)</h1>
                        <p className="licences-p">
                            Our Extended License allows you to tailor the license to your requirements, choose from Items for Resale up to 500 units and Items for Resale + Unlimited Reproduction. The supplied downloadable file is a hi-resolution layered Photoshop PSD or Illustrator AI or EPS file (only on new and upgraded designs).
                        </p>

                        <p className="licences-p">
                        <i class="fas fa-shopping-cart"></i>
                       <strong> Items for Resale up to 500 units – </strong>physical products for sale including clothing, t-shirts, homeware, stationery, accessories, posters, postcards and commercial merchandise up to 500 units / items / metres
                        </p><p className="licences-p">
                        <i class="fas fa-boxes"></i>
                        <strong>Items for Resale + Unlimited Reproduction - </strong>allows over 500 units / items /meters for resale
</p>
<h1 className="licences-h1" > Premium License (Exclusive)</h1>
<p className="licences-p">
If you are looking for exclusive designs that only you and your company/brand has use of, head to our Premium area. The supplied downloadable file is a hi-resolution layered Photoshop PSD or Illustrator AI or EPS file. To access Premium simply create a free account here.
</p>
<p>

<p className="licences-p">
<i class="fas fa-star"></i>
<strong>Exclusive Rights </strong>- you get all the benefits of our Standard and Exclusive License plus you get exclusive rights to the design and it’s instantly removed from the site once purchased.
</p>
</p>                   
                    </div>
                </section>


                <Footer />

            </div>

        );
    }
}

export default withRouter(BuyerLicence);
