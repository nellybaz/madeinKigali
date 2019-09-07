import React, { Component } from 'react';
import '../css/header.css';

import Cookies from 'universal-cookie';
import '../css/components/header.css';
import logo from '../assets/images/logo.png';
import heart from '../assets/images/heart2.png';
import heart_mobile from '../assets/images/heart-mobile.png';
import bag from '../assets/images/shopping-bag.png';
import bag_mobile from '../assets/images/bag-mobile.png';
import search from '../assets/images/search.png';
import search_mobile from '../assets/images/search-mobile.png';
import profile from '../assets/images/profile.png';
import menu_grid_sub_img from '../assets/images/banner1.jpg';
import { Link } from 'react-router-dom';
import play from '../assets/images/play.gif';
import pause from '../assets/images/pause.png';


// import music from '../assets/music/music.mp3';

import little_banner from '../assets/images/1Y.jpg';

import mobile_menu from '../assets/images/menu.png';

class Header2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mobile_search: 'hide',
            searchclass: 'hide',
            search_query: 'jeans',
            nav_class: '',
            music_icon: play,
            mobile_drawer: '',
        }
    }


    handleDrawer = (x) => {
        if (x == 1 && this.state.mobile_drawer == "") {
            this.setState({
                mobile_drawer: 'mobile-drawer-active',
            });
        }

        else {
            this.setState({
                mobile_drawer: '',
            });
        }
    }


    async componentDidMount() {



        setInterval(async () => {

            window.addEventListener('scroll', this.handleScroll());

        }, 10);
    }


    handleTunePause = () => {
        var myAudio = this.mytune;
        if (myAudio.paused) {
            myAudio.play();
            // this.setState({
            //     music_icon: play
            // })
        } else {
            myAudio.pause();
            // this.setState({
            //     music_icon: pause,
            // })
        }
    }

    handleScroll = (event) => {
        if (Math.round(window.scrollY) >= 420) {
            // alert('yes')

            this.setState({
                nav_class: 'nav-fixed'
            })

        }

        else {
            this.setState({
                nav_class: ''
            })

        }
    }


    handleSearchHighlight = () => {

        const search_input = this.refs.search_input;
        search_input.focus();
    }


    disableCookies = () => {
        const cookies = new Cookies();
        if (cookies.get('email') != undefined) {
            cookies.remove('email', { path: '/' });

        }

        if (cookies.get('userID') != undefined) {
            cookies.remove('userID');
        }

        window.location.href = "/12hdgsikdhlmsdne";

    }

    searchBoxHandler = () => {
        // alert('Searching....');
        window.location.href = `/search/${this.state.search_query}/category/1`;

        //call search api
    }


    handleMobileSearch = () => {
        //    alert('cliceked')
        if (this.state.mobile_search == 'hide') {
            this.setState({
                mobile_search: 'search-show-mobile'
            })
        }
        else {
            this.setState({
                mobile_search: 'hide'
            })
        }
    }
    render() {
        return (
            <div className="Header">
                <header className="header">
                    <div className='topbar-nav'>
                        <div className='topbar-nav-left'>
                            {/* <Link className='student-text' to={'/student_discount'} >Student? check our student discount</Link> */}
                        </div>

                         <div className='topbar-nav-right'>
                            <input title="SEARCH" style={{ fontSize: '0.8rem' }} ref="search_input" className="search-input" onChange={(e) => this.setState({ search_query: e.target.value })} onKeyPress={(ev) => {
                                if (ev.key === 'Enter') {
                                    // Do code here

                                    this.searchBoxHandler();
                                    ev.preventDefault();
                                }
                            }} type="text" placeholder="Search" />
                            <a href="#" onClick={() => this.handleSearchHighlight()} title="SEARCH"><img src={search}></img></a>
                            <a href="#" title="SIGN IN"><img src={profile}></img></a>
                            <a href="#" title="WISHLIST"><img src={require('../assets/images/heart2.png')}></img></a>
                            <a href="#" title="BASKET"><img src={bag}></img></a>

                        </div>

                    </div>
                </header>

                {/* mobile navigation */}

                <div className={`mobile-nav`}>

                    <a onClick={() => this.handleDrawer(1)}
                        style={{ fontSize: '0.8rem' }} className="btn btn-open-nav mobile-nav-item"><img src={mobile_menu} alt="mik" /><br></br>MENU</a>
                    <Link to={'/12hdgsikdhlmsdne'} className="mobile-nav-item" ><img className="mobile-logo" src={logo} /></Link>


                    <div className="mobile-nav-item right-icons-mobile">
                        <a style={{ fontSize: '0.8rem' }} onClick={() => this.handleMobileSearch()} className="btn btn-search mobile-nav-item-b"><img src={search_mobile}></img><br></br>SEARCH</a>
                        <a style={{ fontSize: '0.8rem' }} className="btn mobile-nav-item-b"><img src={heart_mobile}></img> <br></br>WISHLIST</a>
                        <a style={{ fontSize: '0.8rem' }} className="btn btn-bag mobile-nav-item-b"><img src={bag_mobile}></img> <br></br>BAG</a>
                    </div>

                </div>
                <div className={`${this.state.mobile_search}`}>
                    <input type="search" className="form-control btn-search-mobile" placeholder="What are you shopping for?"
                        onChange={(e) => this.setState({ search_query: e.target.value })} onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                // Do code here

                                this.searchBoxHandler();
                                ev.preventDefault();
                            }
                        }}

                    />
                </div>

                {/* mobile navigation ends */}


                {/* mobile drawer starts */}

                <div className={`mobile-drawer ${this.state.mobile_drawer}`}>
                    <div className='mobile-drawer-content'>
                        <details>
                            <summary>NEW IN</summary>
                            <Link to={''}>New in Fashion</Link>
                            <Link to={''}>New in Fabric Designs</Link>
                            <Link to={''}>New in Bag & Accessories</Link>
                            <Link to={''}>New in Wholesale</Link>
                        </details>

                        {/* <details>
                            <summary>FABRIC</summary>
                            <Link to={''}>Create</Link>
                            <Link to={''}>Upload</Link>
                            <Link to={''}>Design Tools</Link>
                            <Link to={''}>Design FAQS</Link>
                        </details> */}

                        {/* <details>
                            <summary>MADE TO MEASURE</summary>
                            <Link to={''}>MIK Boutique</Link>
                            <Link to={''}>The Men’s guide</Link>
                            <Link to={''}>The Women’s guide</Link>
                            <Link to={''}>Wardrobe essentials</Link>
                        </details> */}

                        <details>
                            <summary>WHOLESALE</summary>
                            <Link to={''}>Women’s Clothing</Link>
                            <Link to={''}>Men’s Clothing</Link>
                            <Link to={''}>Bag & Accessories</Link>
                            <Link to={''}>Sportswears</Link>
                        </details>

                        {/* <details>
                            <summary>BRANDS</summary>
                            <Link to={''}>Brands A-Z</Link>
                            <Link to={''}>Clothing Brands</Link>
                            <Link to={''}>Accessories Brands</Link>
                            <Link to={''}>Shoe Brands</Link>
                        </details> */}

                        {/* <details>
                            <summary>SALES</summary>
                            <Link to={''}>Shop all Sales</Link>
                            <Link to={''}>SALE Fabric</Link>
                            <Link to={''}>Bag & Accessories</Link>
                            <Link to={''}>Sale M2M</Link>
                        </details> */}

                        <details>
                            <summary>#VISIT RWANDA</summary>
                            <Link to={'/visit_rwanda'}>#Visitrwanda</Link>
                            <Link to={''}>Baskets</Link>
                            <Link to={''}>Atrs</Link>
                            <Link to={''}>Clothing</Link>
                        </details>

                        <details>
                            <summary>FASHION STORIES</summary>
                            <Link to={'/blog/home'}>Fashion Stories</Link>
                            <Link to={''}>Competition</Link>
                            <Link to={''}>Art Stories</Link>
                            <Link to={''}>Blog Stories</Link>
                        </details>

                    </div>

                    <div className='mobile-drawer-close'
                        onClick={() => this.handleDrawer(0)}
                    >
                        X
                </div>


                </div>




                {/* mobile drawer ends */}

                <div className={`navigation ${this.state.nav_class}`}>

                    <div className='logo-div-nav'>
                        <Link to={'/'} ><img src={logo} alt="madeinkigali fashion shop logo" /></Link>
                    </div>

                    <div className='header-nav-links-div'>

                    <div className="new-in" ><a href="#" >NEW IN </a>
                        <div className="new-in-dropdown dropdowns">
                            <div className="new-in-dropdown-content">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>


                                    <h5 style={{}}>SHOP BY CATEGORY</h5>

                                    <Link to={"#"} >New in Fashion</Link>
                                    <Link to={"#"} >New in Fabric Design</Link>
                                    <Link to={"#"} >New in Bags & Accessories</Link>
                                    <Link to={"#"} >New in Petite, Tall & Maternity </Link>
                                    <Link to={"#"} >New in Wholesale</Link>
                                    <Link to={"#"} >New in Brands</Link>
                                    <Link to={"#"} >New in Made to Measure</Link>
                                    <Link to={"#"} >Swim Shop</Link>
                                </div>
                            </div>


                            <div className="new-in-dropdown-content">
                                <img src={require('../assets/images/menus/new_in.png')} />
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                    <div className="wholesale"><Link to={'#'}>WHOLESALE</Link>
                        <div className="wholesale-dropdown dropdowns">
                            <div className="wholesale-dropdown-content">
                                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', }}>


                                    <h5 style={{}}>SHOP BY CATEGORY</h5>

                                    <Link to={"/visit_rwanda"} >#VisitRwanda</Link>
                                    <Link to={"#"} >Women’s Clothing</Link>
                                    <Link to={"#"} >Men’s Clothing</Link>
                                    <Link to={"#"} >Sportswears</Link>
                                    <Link to={"#"} >Bag & Accessories </Link>
                                    <Link to={"#"} >Children</Link>
                                    <Link to={"#"} >Infant & Toodlers</Link>
                                    <Link to={"#"} >Garment Accessories</Link>
                                    <Link to={"#"} >Novelty & Special use</Link>
                                    <Link to={"#"} >Special Occassions</Link>
                                    <Link to={"#"} >Shoes</Link>



                                </div>
                            </div>

                            <div className="wholesale-dropdown-content">




                                <div style={{ display: 'flex', flexDirection: 'column' }}>


                                    <Link style={{ fontWeight: '400' }} to={"#"} >Home Decor</Link>
                                    <Link to={"#"} >Rwanda Beverages</Link>

                                    <Link to={"#"} >Rwanda Honey</Link>

                                    {/* <h5 style={{ }}>SHOP BY CATEGORY</h5> */}

                                    <Link to={"#"} >Source from Turkey</Link>
                                    <Link to={"#"} >Source from China</Link>
                                    <Link to={"#"} >Source from Italy</Link>
                                    <Link to={"#"} >Source from USA</Link>
                                    <h5 style={{}}>SHOP BY USAGE</h5>

                                    <Link to={"#"} >School Uniforms</Link>
                                    <Link to={"#"} >Hospitality</Link>


                                </div>

                            </div>

                            <div className="wholesale-dropdown-content">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>



                                    <Link style={{ fontWeight: '400' }} to={"#"} >Security</Link>
                                    <Link to={"#"} >Polos </Link>
                                    <Link to={"#"} >T-shirts & Vest</Link>

                                    <Link to={"#"} >Bags & Accessories </Link>
                                    <Link to={"#"} >Swimwear</Link>

                                    <Link to={"#"} >Lingeries & Nightwear </Link>
                                    <Link to={"#"} >Kitenge Fabrics</Link>
                                    <h5 style={{}}>SHOP BY COLLECTION</h5>

                                    <Link to={"#"} >Cut & Sew</Link>
                                    <Link to={"#"} >Underwears</Link>


                                </div>


                            </div>

                            <div className="wholesale-dropdown-content">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>


                                    <Link style={{ fontWeight: '400' }} to={"#"} >Industrial </Link>
                                    <Link to={"#"} >School Uniforms </Link>
                                    <Link to={"#"} >Hospitality</Link>
                                    <Link to={"#"} >Security</Link>
                                    <Link to={"#"} >Polos</Link>
                                    <Link to={"#"} >T-shirts and Vest </Link>
                                    <Link to={"#"} >Bags & Accessories</Link>
                                    <Link to={"#"} >Swimwear</Link>
                                    <Link to={"#"} >Lingeries & Nightwear</Link>
                                    <Link to={"#"} >Kitenge Fabric</Link>


                                </div>
                            </div>

                            <div className="m2m-dropdown-content">
                                <img width="100%" height="90%" src={require('../assets/images/menus/4wholesale.png')} />
                            </div>
                        </div>


                    </div>

                    <div className='fashion-stories'><Link to={'#'}>THE EDIT</Link>
                        <div className="fashion-stories-dropdown dropdowns">


                            <div className="fashion-stories-dropdown-content">
                                <img src={require('../assets/images/menus/8.1.png')} />
                                <p>Spring awakening</p>
                            </div>

                            <div className="fashion-stories-dropdown-content">
                                <img src={require('../assets/images/menus/8.2.png')} />
                                <p>Casual Party</p>
                            </div>


                            <div className="fashion-stories-dropdown-content">
                                <img src={require('../assets/images/menus/8.3.png')} />
                                <p>Gorilla Trekking</p>
                            </div>
                            <div className="fashion-stories-dropdown-content">
                                <div className='div-inner' style={{ display: 'flex', flexDirection: 'column' }}>


                                    <h5 style={{}}>THE EDIT</h5>

                                    <Link to={"#"} >  <i className="fas fa-crosshairs"></i> Competition</Link>
                                    <Link to={"#"} > <i className="fas fa-atom"></i> Art Stories</Link>
                                    <Link to={"#"} > <i className="fas fa-box-open"></i> Blog Stories</Link>
                                    <Link to={"#"} > <i className="fas fa-gift"> </i> #Visit Rwanda Blog </Link>
                                    <Link to={"#"} ><i className="fas fa-hand-holding-heart"> </i> #MadeinKigaliRW</Link>
                                    <Link to={"#"} >  <i className="fas fa-hands"> </i> MIK Supports</Link>

                                </div>
                            </div>



                        </div>
                    </div>


                    <div className="sale" ><a href="#">ABOUT US </a>

                    </div>


                    
                    </div>

                 




                </div>
            </div>
        );
    }
}

export default Header2;
