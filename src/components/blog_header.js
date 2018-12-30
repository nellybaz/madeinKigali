import React, { Component } from 'react';
import '../css/blog.css';
import header1 from '../assets/images/blog-header1.jpg';
import bh2 from '../assets/images/b-h2.jpg';
import bh3 from '../assets/images/bh3.jpg';
import bh4 from '../assets/images/bh4.jpg';
import bh5 from '../assets/images/bh5.jpg';
import bh6 from '../assets/images/bh6.jpg';
import bh7 from '../assets/images/bh7.jpg';
import bh8 from '../assets/images/bh8.jpg';

import logo from '../assets/images/logo.png';

import { Link } from 'react-router-dom';

class BlogHeader extends Component {

    constructor(props) {
        super(props)

        this.state = {

            data_display_limit: 8,
            time_to_add: true,
            fixed_scroll_class: 'hide',
            blog_body_data: [
                {
                    id: 1,
                    img: header1,
                    title: 'Blog Title One',
                },

                {
                    id: 2,
                    img: bh2,
                    title: 'Blog Title Two',
                },
                {
                    id: 3,
                    img: bh3,
                    title: 'Blog Title Three',
                },
                {
                    id: 4,
                    img: bh4,
                    title: 'Blog Title Four',
                },
                {
                    id: 5,
                    img: bh5,
                    title: 'Blog Title Five',
                },
                {
                    id: 6,
                    img: bh6,
                    title: 'Blog Title Six',
                },
                {
                    id: 7,
                    img: bh7,
                    title: 'Blog Title Seven',
                },
                {
                    id: 8,
                    img: bh8,
                    title: 'Blog Title Eight',
                },
                {
                    id: 9,
                    img: header1,
                    title: 'Blog Title One',
                },

                {
                    id: 10,
                    img: bh2,
                    title: 'Blog Title Two',
                },
                {
                    id: 11,
                    img: bh3,
                    title: 'Blog Title Three',
                },
                {
                    id: 12,
                    img: bh4,
                    title: 'Blog Title Four',
                },
                {
                    id: 13,
                    img: bh5,
                    title: 'Blog Title Five',
                },
                {
                    id: 14,
                    img: bh6,
                    title: 'Blog Title Six',
                },
                {
                    id: 15,
                    img: bh7,
                    title: 'Blog Title Seven',
                },
                {
                    id: 16,
                    img: bh8,
                    title: 'Blog Title Eight',
                },



            ]
        }
    }


    async componentDidMount() {
        try {

            setInterval(async () => {

                window.addEventListener('scroll', this.handleScroll());

            }, 10);
        } catch (e) {
            //   console.log(e);
        }
    }




    handleScroll = (event) => {
        if (Math.round(window.scrollY) >= 200) {
            this.setState({
                fixed_scroll_class: 'header-fixed'
            })

        }

        else {

            this.setState({
                fixed_scroll_class: 'hide'
            })
        }

    }



    render() {





        return (
            <div className="BlogHeader">
                <div className="header-container">

                    <div className={this.state.fixed_scroll_class}>
                        <div className="blog-header-fixed-navlinks">
                            <div className="blog-header-navlinks">
                                <Link className='blog-logo-link' to={'/dev'}><img className="blog-header-logo" alt="mik" src={logo} /></Link>
                            </div>
                            <div className="header-links-fixed">
                                <p>HOME</p>
                            </div>

                            <div className="header-links-fixed">
                                <p>STYLE</p>
                            </div>
                            <div className="header-links-fixed">
                                <p>BEAUTY</p>
                            </div>
                            <div className="header-links-fixed">
                                <p>NEWS</p>
                            </div>

                             <div className="header-links-fixed">
                                <p>#VISITRWANDA</p>
                            </div>


                        </div>

                    </div>

                    <div className="blog-header">
                        <div className="blog-header-item">
                            <img alt="mikigali" src={bh8} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mikigali" src={bh7} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mikigali" src={bh6} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mikigali" src={bh5} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mikigali" src={bh4} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mikigali" src={bh3} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mikigali" src={bh2} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mikigali" src={header1} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mikigali" src={bh6} />
                        </div>


                    </div>





                    <div className="blog-header-nav ">

                        <div className="blog-header-navlinks">
                            <Link to={'/dev'}><img className="blog-header-logo" alt="mik" src={logo} /></Link>
                        </div>

                        <div className="blog-header-navlinks">
                            <Link to={'/dev/blog'} ><p>HOME</p></Link>
                        </div>
                        <div className="blog-header-navlinks">
                            <p>STYLE</p>
                        </div>
                        <div className="blog-header-navlinks">
                            <p>BEAUTY</p>
                        </div>
                        <div className="blog-header-navlinks">
                            <p>NEWS</p>
                        </div>

                        <div className="blog-header-navlinks">
                            <p>#VISITRWANDA</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default BlogHeader;
