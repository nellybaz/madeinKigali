import React, { Component } from 'react';
import '../css/search.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/search_sidebar';
import { Link } from 'react-router-dom';
import trending_icon from '../assets/images/trending_search_display.png';

import prd1 from '../assets/images/model_view1.jpg';
import prd9 from '../assets/images/product9.jpg';
import ads from '../assets/images/search_ads.jpg';

import like from '../assets/images/heart3.png';

class Search extends Component {

    constructor(props) {
        super(props) 

        this.state = {

        }

    }
    displaySearchtopNav = () => {
        const holder = [];
        let text = "category";
        let active_class = "search-top-nav-active";

        let active_no = this.props.match.params.category_no;

        for (let x = 1; x <= 12; x++) {
            if (x === 1) {
                text = "All"
            }

            else {
                text = "category";
            }


            if(x === parseInt(active_no)){
                active_class = "search-top-nav-active";
            }
            else{
                active_class = "";
            }
            holder.push(
                <div className={active_class}>
                    {text}
                </div>
            )

        }
        return holder;
    }



    searchDisplay = () => {
        let searchDisplayHolder = [];
        let img = '';
        let ads_class = '';
        let trending_details = '';
        for (let x = 0; x < 15; x++) {
            if (x % 2 === 0 && x != 4) {
                img = prd9;

                trending_details = <div className="color-change-image">
                    <div></div>
                    <div></div>
                </div>;
            }

            else if (x === 4) {
                img = ads;
                ads_class = 'ads_class';
                trending_details = "";
            }
            else {
                img = prd1;
                ads_class = '';
                trending_details = <div className="search-trending-product-div" title="Currently trending">
                    Trending Product
                <img src={trending_icon} />
                </div>;

            }
            searchDisplayHolder.push(
                <div className="search-prd-item-div" key={x}>
                    <Link to={'/dev/product/jean/2'} ><img className={ads_class} src={img} alt="mik" /> </Link>
                    {
                        x != 4 &&
                        <p><b>Check Velvet Wide Leg Trousers </b><br></br><span>$112.99</span> <span style={{ float: 'right', marginRight: "20%", width: "16px", display: 'flex', position: 'relative', bottom: '370px', left: '10px', cursor: 'pointer' }} title="Likes"><img src={like} /><span className="prd-search-likes">112</span></span></p>
                    }

                    {
                        trending_details
                    }

                </div>
            )

        }

        return searchDisplayHolder;
    }


    componentDidMount(){
        //let data = this.props.location.search.split("=")
        //console.log(this.props.match.params.category_no);
        
    }




    render() {
        return (

            <div className="Search" style={{ background: 'white' }}>
                <Header />

                <div className="search-inner-main">
                    <div className="search-bar-top"></div>
                    <div className="search-top-nav">
                       
                        {this.displaySearchtopNav()}
                       
                    </div>

                    <div className="search-content">
                        <div className="search-sidebar">
                            <Sidebar />
                        </div>
                        <div className="search-display-div-outer">
                            <div className="search-display-middel-nav"></div>

                            <div className="search-display-div">
                                {this.searchDisplay()}
                            </div>

                        </div>


                    </div>


                </div>

                <Footer />
                <div id="end"></div>
            </div>
        );
    }
}

export default Search;
