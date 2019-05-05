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
import BlogHeader from "../components/blog_header";

import { Link } from 'react-router-dom';

import spinner from '../assets/images/blog-spinner.gif';



import fb from '../assets/images/facebook-logo.png';
import insta from '../assets/images/instagram-logo.png';
import twitter from '../assets/images/twitter-logo.png';
import linkedin from '../assets/images/linkedin-logo.png';
import pinterest from '../assets/images/pinterest.png';
import g_plus from '../assets/images/g_plus.png';
import wiebo from '../assets/images/weibo.png';
import youtube from '../assets/images/youtube.png';
import tumblr from '../assets/images/tumblr.png';



import Divider from '../components/divider';

class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {

            data_display_limit: 8,
            time_to_add: true,
            blog_body_data: [
                // {
                //     id: 1,
                //     img: header1,
                //     title: 'Blog Title One',
                // },

                // {
                //     id: 2,
                //     img: bh2,
                //     title: 'Blog Title Two',
                // },
                // {
                //     id: 3,
                //     img: bh3,
                //     title: 'Blog Title Three',
                // },
                // {
                //     id: 4,
                //     img: bh4,
                //     title: 'Blog Title Four',
                // },
                // {
                //     id: 5,
                //     img: bh5,
                //     title: 'Blog Title Five',
                // },
                // {
                //     id: 6,
                //     img: bh6,
                //     title: 'Blog Title Six',
                // },
                // {
                //     id: 7,
                //     img: bh7,
                //     title: 'Blog Title Seven',
                // },
                // {
                //     id: 8,
                //     img: bh8,
                //     title: 'Blog Title Eight',
                // },
                // {
                //     id: 9,
                //     img: header1,
                //     title: 'Blog Title One',
                // },

                // {
                //     id: 10,
                //     img: bh2,
                //     title: 'Blog Title Two',
                // },
                // {
                //     id: 11,
                //     img: bh3,
                //     title: 'Blog Title Three',
                // },
                // {
                //     id: 12,
                //     img: bh4,
                //     title: 'Blog Title Four',
                // },
                // {
                //     id: 13,
                //     img: bh5,
                //     title: 'Blog Title Five',
                // },
                // {
                //     id: 14,
                //     img: bh6,
                //     title: 'Blog Title Six',
                // },
                // {
                //     id: 15,
                //     img: bh7,
                //     title: 'Blog Title Seven',
                // },
                // {
                //     id: 16,
                //     img: bh8,
                //     title: 'Blog Title Eight',
                // },



            ]
        }
    }


    async getAllBlogPost(){
        try {

            let data = JSON.stringify({
                "tag": "get_blog",
                "article_no": ""

            })

          var res = await fetch('https://madeinkigali.com/API/products/index.php', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `request=${data}`
               
            });

            var jsonRes = await res.json();
            // console.log(jsonRes.result);
            

                this.setState({
                    blog_body_data: jsonRes.result,
                });



            setInterval(async () => {

                window.addEventListener('scroll', this.handleScroll());

            }, 1000);
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
       
        window.scrollTo(0,0);
        this.getAllBlogPost();
        
    }


    handleScroll = (event) => {
        if (((Math.round(window.scrollY) >= 2400 && this.state.time_to_add)) && window.innerWidth < 1600) {


            setTimeout(
                this.setState(
                    { data_display_limit: this.state.data_display_limit + 8 },
                ),

                10000

            );

            //change variable holding time to change false
            this.setState(
                { time_to_add: false },
            );




        }

        else if (((Math.round(window.scrollY) >= 2100 && this.state.time_to_add)) && window.innerWidth > 1600) {

            setTimeout(
                this.setState(
                    { data_display_limit: this.state.data_display_limit + 8 },
                ),

                10000

            );

            //change variable holding time to change false
            this.setState(
                { time_to_add: false },
            );
        }


    }

    holder = () => {
        console.log(this.state.blog_body_data);
        

        let BlogBodyHolder = []

        for (let x = 0; x < this.state.blog_body_data.length; x++) {
            BlogBodyHolder.push(
                <div className="blog-image" key={x}>
                    <img src={`https://madeinkigali.com/images/blog/${this.state.blog_body_data[x].article_image}`} alt={this.state.blog_body_data[x].article_name} />
                    <Link className="readmore-link" to={`post/${this.state.blog_body_data[x].article_no}/${this.state.blog_body_data[x].article_name}`} ><h3 className="blog-image-title">{this.state.blog_body_data[x].article_name}</h3></Link>
                    <Link className="readmore-link" to={`post/${this.state.blog_body_data[x].article_no}/${this.state.blog_body_data[x].article_name}`}><p className="blog-read-more">READ MORE</p></Link>
                </div>

            )

        }


        return BlogBodyHolder;

    }





    render() {

        return (
            <div className="Blog" style={{ background: 'white' }}>
                <BlogHeader navigation={this.props.match.params.nav}/>


                <div className="body-container">
                    <div className="blog-body">
                        {
                            this.state.blog_body_data.length > 0 ? this.holder() : 
                            <div style={{ width: '100vw',  height: "100vh", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                                <img style={{ width: '100px' }} src={spinner} />
                            </div>
                        }

                    </div>

                </div>
                <div className="sigin-newsletter-section">

                    <div className="signin-newsletter-social-media">


                        <div className="social-media">
                            <div className="article-follow-us-div">
                                <div className="post-social-media-div">
                                    <div className="social-media-div">
                                        <Link to="https://www.facebook.com/MadeInKigali/ "><img src={fb} alt="facebook" /></Link>

                                    </div>

                                    <div className="social-media-div">
                                        <Link to="https://twitter.com/MadeinKigaliRW"><img src={twitter} alt="twitter" /></Link>

                                    </div>

                                    <div className="social-media-div">
                                        <Link to="https://www.instagram.com/madeinkigali/"><img src={insta} alt="insta" /></Link>

                                    </div>

                                    <div className="social-media-div">
                                        <Link to="https://www.linkedin.com/in/madeinkigali/"><img src={linkedin} alt="linkedin" /></Link>

                                    </div>

                                    <div className="social-media-div">
                                        <Link to="https://plus.google.com/u/2/112933730940706528592?tab=mX" target="_blanck" > <img src={g_plus} alt="g_plus" /></Link>

                                    </div>

                                    <div className="social-media-div">
                                        <Link to="https://www.pinterest.com/madeinkigali/pins/" target="_blanck" > <img src={pinterest} alt="pinterest" /></Link>
                                    </div>

                                    <div className="social-media-div">
                                        <Link to="https://www.youtube.com/channel/UCfCedXqAFLRVdk1EUPosvAw?view_as=subscriber" target="_blanck" > <img src={youtube} alt="youtube" /></Link>

                                    </div>

                                    <div className="social-media-div">
                                        <Link to="#" target="_blanck" > <img src={wiebo} alt="wiebo" /></Link>

                                    </div>

                                    <div className="social-media-div">
                                        <Link to="https://madeinkigali-blog.tumblr.com/" target="_blanck" > <img src={tumblr} alt="tumblr" /></Link>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>


                <div className="blog-footer-container">
                    <div className="footer-red-bar">
                        <p>Copyrights &copy; MadeinKigali. All rights reserved. </p>
                    </div>
                    <div className="blog-header">
                        <div className="blog-header-item">
                            <img alt="image" src={bh8} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="image" src={bh7} /> 
                        </div>
                        <div className="blog-header-item">
                            <img alt="image" src={bh6} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="image" src={bh5} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="image" src={bh4} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="image" src={bh3} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="image" src={bh2} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="image" src={header1} />
                        </div>

                        <div className="blog-header-item">
                            <img alt="image" src={bh4} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Blog;
