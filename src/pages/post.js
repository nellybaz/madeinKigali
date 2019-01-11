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

import spinner from '../assets/images/blog-spinner.gif';

import BlogHeader from '../components/blog_header';
import BlogSidebar from '../components/blog_sidebar';

import { FacebookProvider, Comments } from 'react-facebook';

import l_arrow from '../assets/images/larrow.png';
import r_arrow from '../assets/images/rarrow.png';

import Related from '../components/related';

import Divider from '../components/divider';


class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {

            data_display_limit: 8,
            time_to_add: true,
            articleBody: '',
            isLoading: false,
            post_next_div_inner_content_class:'',
            post_next_div_inner_content_class2:'',
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



    handleButtonSlides=(x)=>{
        if(x === 1)
        {
            this.setState({
                post_next_div_inner_content_class: 'post-next-div-inner-hover',
            })
        }

        else
        {
            this.setState({
                post_next_div_inner_content_class: '',
            })
        }
    }

    handleButtonSlidesPrev=(x)=>{
       
        if(x === 1)
        {
            this.setState({
                post_next_div_inner_content_class2: 'post-prev-div-inner-hover',
            })
        }

        else
        {
            this.setState({
                post_next_div_inner_content_class2: '',
            })
        }
    }

    async componentDidMount() {
        window.scrollTo(0,0);
        this.setState({
            isLoading: true,
        })
        try {

            let data = JSON.stringify({
                "tag": "get_blog",
                "article_no": 1

            })

            const res = await fetch('https://madeinkigali.com/API/products/index.php', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `request=${data}`
            })
            const json = await res.json();
            this.setState({
                articleBody: json.result[0].article_post,
                isLoading: false,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {


        return (
            <div className="Post" style={{ background: 'white' }}>

                <BlogHeader />

                <div className="blog-post-div-container">
                    <div className="article-section">
                        <div className="post-image-div">
                            <img src={bh3} alt="mik" useMap="#image-map" />

                            <map name="image-map">
                                <area target="" alt="Here" title="Here" href="/dev/product/Isabel%20Maer/2" coords="396,633,187" shape="circle" />
                            </map>
                        </div>

                        <div className="article-post">
                            {
                                this.state.isLoading &&
                                <div style={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                                    <img style={{ width: '30%' }} src={spinner} />
                                </div>
                            }
                            <p>{this.state.articleBody}</p>
                        </div>

                        <div >
                            <Related />
                        </div>

                        <div className="comments">

                            <Divider blogBorder="blog-border-width" name="Join The Convo!!!" class="full_width" />

                            <FacebookProvider appId="203119847024539">
                                <Comments href="https://www.facebook.com/Kibuti-1542295485889144/" />
                            </FacebookProvider>

                        </div>


                    </div>


                    <div className="left-sidebar">
                        <BlogSidebar />
                    </div>
                </div>


                <div className="blog-footer-container">
                    <div className="footer-red-bar">
                        <p style={{fontSize:'0.8rem'}}>Copyrights &copy; MadeinKigali. All rights reserved. </p>
                    </div>
                    <div className="blog-header">
                        <div className="blog-header-item">
                            <img alt="mik" src={bh8} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mik" src={bh7} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mik" src={bh6} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mik" src={bh5} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mik" src={bh4} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mik" src={bh3} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mik" src={bh2} />
                        </div>
                        <div className="blog-header-item">
                            <img alt="mik" src={header1} />
                        </div>

                        <div className="blog-header-item">
                            <img alt="mik" src={bh4} />
                        </div>
                    </div>
                </div>

                <div className="footer-nav-div">
                    <div className="footer-next-prv-div">
                        {/* <button className="btn"><img alt='mik' src={l_arrow} /></button> */}
                       
                    </div>

                    <div className="post-prev-div">

                        <button onMouseEnter={() => this.handleButtonSlidesPrev(1)} onMouseLeave={() => this.handleButtonSlidesPrev(2)}>
                            <img src={r_arrow} />
                        </button>
                        <div className='post-prev-div-inner'>
                            <div onMouseEnter={() => this.handleButtonSlidesPrev(1)} onMouseLeave={() => this.handleButtonSlidesPrev(2)} className={`post-prev-div-inner-content ${this.state.post_next_div_inner_content_class2}`}>
                                <div className='post-prev-div-inner-content-title-div'>
                                    <p>TITLE OF ARTICLE</p>
                                </div>

                                <div className='post-prev-div-inner-content-img-div'>
                                    <img style={{ width: '100%', objectFit: 'cover', height: '100%', }} src={bh2} alt='mik' />
                                </div>


                            </div>

                        </div>



                    </div>


                    <div className="post-next-div">
                            <div className='post-next-div-inner'>
                                <div onMouseEnter={()=>this.handleButtonSlides(1)} onMouseLeave={()=>this.handleButtonSlides(2)} className={`post-next-div-inner-content ${this.state.post_next_div_inner_content_class}`}>
                                    <div className='post-next-div-inner-content-img-div'>
                                        <img style={{width:'100%', objectFit:'cover', height:'100%'}} src={bh2} alt='mik' />
                                    </div>

                                    <div className='post-next-div-inner-content-title-div'>
                                        <p>TITLE OF ARTICLE</p>
                                    </div>
                                </div>

                            </div>

                            <button onMouseEnter={()=>this.handleButtonSlides(1)} onMouseLeave={()=>this.handleButtonSlides(2)}>
                                <img src={r_arrow} />
                            </button>
                       
                    </div>
                </div>

            </div>
        );
    }
}

export default Post;
