import React, { Component } from 'react';
import '../css/search.css';
import Header from '../components/header';
import Footer from '../components/footer';
import prd1 from '../assets/images/product1.jpeg';
import prd9 from '../assets/images/product9.jpg';
import arrow_down from '../assets/images/arrow-down.png';

class SearchSidebar extends Component {

    constructor(props) {
        super(props)

        this.state = {

            sidebar_class: '',
            has_reached_end: false,

        }

    }


    async componentDidMount() {
        //document.addEventListener('scroll', this.trackScrolling);



        setInterval(async () => {

            window.addEventListener('scroll', this.handleScroll());

        }, 10);

        setInterval(async () => {

            window.addEventListener('scroll', this.trackScrolling());

        }, 10);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
        document.removeEventListener('scroll', this.handleScroll());
    }


    handleScroll = (event) => {

        if (!this.state.has_reached_end) {
            if (Math.round(window.scrollY) >= 420 && !this.state.has_reached_end) {


                this.setState({
                    sidebar_class: 'sidebar-fixed',
                    has_reached_end: false,
                })

            }


            else {
                this.setState({
                    sidebar_class: '',
                    has_reached_end: false,
                })

            }

        }


    }



    isBottom(el) {
        if (el != null) {
            return el.getBoundingClientRect().bottom <= window.innerHeight;
        }

    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('end');
        if (this.isBottom(wrappedElement)) {
            // alert('reached')
            this.setState({
                has_reached_end: true,
                sidebar_class: 'sidebar-small'
            });
            document.removeEventListener('scroll', this.trackScrolling);
        }

        else {
            this.setState({

                has_reached_end: false,
            })
        }
    };

    render() {





        return (

            <div id="SearchSidebar" className={`SearchSidebar ${this.state.sidebar_class}`} >
                <div className="sidebar-item">
                    <p>Price</p>
                    <label className="container">
                        <input type="checkbox" /> &nbsp;$10 to $50
                                <span className="checkmark search-checkmark"></span>
                    </label>

                    <label className="container">
                        <input type="checkbox" /> &nbsp;$50 to $100
                                <span className="checkmark search-checkmark"></span>
                    </label>

                    <label className="container">
                        <input type="checkbox" /> &nbsp;$100 to $200
                                <span className="checkmark search-checkmark"></span>
                    </label>

                    <label className="container">
                        <input type="checkbox" /> &nbsp;$200 to $500
                                <span className="checkmark search-checkmark"></span>
                    </label>


                    <label className="container">
                        <input type="checkbox" /> &nbsp;More than $500
                                <span className="checkmark search-checkmark"></span>
                    </label>

                </div>


                {/* gender */}
                <div className="sidebar-item">
                    <p>Gender</p>
                    <label className="container">
                        <input type="checkbox" /> &nbsp;Female
                                <span className="checkmark search-checkmark-circle"></span>
                    </label>

                    <label className="container">
                        <input type="checkbox" /> &nbsp;Male
                                <span className="checkmark search-checkmark-circle"></span>
                    </label>

                    <label className="container">
                        <input type="checkbox" /> &nbsp;Kids
                                <span className="checkmark search-checkmark-circle"></span>
                    </label>

                </div>


                {/* size */}
                <div className="sidebar-item">
                    <p>Size</p>
                    <div className="sidebar-size">


                        <label className="container">
                            <input type="checkbox" /> &nbsp;XL
                                <span className="checkmark search-checkmark-circle"></span>
                        </label>

                        <label className="container">
                            <input type="checkbox" /> &nbsp;L
                                <span className="checkmark search-checkmark-circle"></span>
                        </label>

                        <label className="container">
                            <input type="checkbox" /> &nbsp;S
                                <span className="checkmark search-checkmark-circle"></span>
                        </label>

                    </div>

                </div>


            </div>
        );
    }
}

export default SearchSidebar;
