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

import BlogHeader from '../components/blog_header';
import BlogSidebar from '../components/blog_sidebar';

import { FacebookProvider, Comments } from 'react-facebook';

import l_arrow from '../assets/images/larrow.png';
import r_arrow from '../assets/images/rarrow.png';

import Related from '../components/related';

import Divider from '../components/divider';


class Post extends Component {

    constructor(props){
      super(props)

      this.state={

        data_display_limit: 8,
        time_to_add: true,
        articleBody:'',
          blog_body_data:[
            {   
                id:1,
                img: header1,
                title: 'Blog Title One',
            },

            {   
                id:2,
                img: bh2,
                title: 'Blog Title Two',
            },
            {
                id:3,
                img: bh3,
                title: 'Blog Title Three',
            },
            {
                id:4,
                img: bh4,
                title: 'Blog Title Four',
            },
            {   
                id:5,
                img: bh5,
                title: 'Blog Title Five',
            },
            {   
                id:6,
                img: bh6,
                title: 'Blog Title Six',
            },
            {   
                id:7,
                img: bh7,
                title: 'Blog Title Seven',
            },
            {   
                id:8,
                img: bh8,
                title: 'Blog Title Eight',
            },
            {   
                id:9,
                img: header1,
                title: 'Blog Title One',
            },

            {   
                id:10,
                img: bh2,
                title: 'Blog Title Two',
            },
            {   id:11,
                img: bh3,
                title: 'Blog Title Three',
            },
            {   id:12,
                img: bh4,
                title: 'Blog Title Four',
            },
            {   
                id:13,
                img: bh5,
                title: 'Blog Title Five',
            },
            {   
                id:14,
                img: bh6,
                title: 'Blog Title Six',
            },
            {   
                id:15,
                img: bh7,
                title: 'Blog Title Seven',
            },
            {   
                id:16,
                img: bh8,
                title: 'Blog Title Eight',
            },
           


        ]        
      }
    }    




    async componentDidMount() {
        try {

            let data = JSON.stringify({
                "tag":"get_blog", 
                "article_no": 1

             })

            fetch('https://madeinkigali.com/API/products/index.php', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `request=${data}`
                }).then(res=>res.json())
                .then(res => 
                    this.setState({
                        articleBody:res.result[0].article_post,
                    })
                    );

        } catch(e) {
          console.log(e);
        }
  }
  
  render() {
  
    
    return (
      <div className="Post">

        <BlogHeader/>

        <div className="blog-post-div-container">
            <div className="article-section">
                <div className="post-image-div">
                    <img src={bh3} />
                </div>

                <div className="article-post">
                    <p>{this.state.articleBody}</p>
                </div>

                 <div >
                        <Related />
                </div>

                <div className="comments">

                <Divider name="JOIN THE CONVO!!!" class="full_width"/>

                <FacebookProvider appId="203119847024539">
                    <Comments href="https://www.facebook.com/Kibuti-1542295485889144/" />
                </FacebookProvider>

                </div>

               
            </div>


            <div className="left-sidebar">
                <BlogSidebar/>
            </div>
        </div>


         <div className="blog-footer-container">
            <div className="footer-red-bar">
                <p>Copyrights &copy; MadeinKigali. All rights reserved. </p>
            </div>
                    <div className="blog-header">
                    <div className="blog-header-item">
                        <img alt="image"  src ={bh8} />
                    </div>
                    <div className="blog-header-item">
                        <img alt="image"  src ={bh7} />
                    </div>
                    <div className="blog-header-item">
                        <img alt="image"  src ={bh6} />
                    </div>
                    <div className="blog-header-item">
                        <img alt="image"  src ={bh5} />
                    </div>
                    <div className="blog-header-item">
                        <img alt="image"  src ={bh4} />
                    </div>
                    <div className="blog-header-item">
                        <img alt="image"  src ={bh3} />
                    </div>
                    <div className="blog-header-item">
                        <img alt="image"  src ={bh2} />
                    </div>
                    <div className="blog-header-item">
                        <img alt="image"  src ={header1} />
                    </div>

                      <div className="blog-header-item">
                        <img alt="image"  src ={bh4} />
                    </div>
                </div>
            </div>

            <div className="footer-nav-div">
                <div className="footer-next-prv-div">
                    <button className="btn"><img src={l_arrow} /></button>
                    <div className="prv-show">
                        <div className="prev-show-inner">

                         
                        {/* title of the inner div */}
                        <div className="prev-show-inner-title-div">
                                <p>
                                    TITLE OF ARTICLE
                                </p>
                            </div>

                        {/* image div of the inner div  */}
                            <div className="prev-show-inner-img-div">
                                <img src={bh2} />
                            </div>
                       

                        </div>
                    </div>
                </div>
                <div className="footer-next-btn-div">
                    <button className="btn"><img src={r_arrow} /></button>
                    <div className="next-show">
                    <div className="next-show-inner">


                        {/* title of the inner div */}
                        <div className="next-show-inner-title-div">
                                <p>
                                    TITLE OF ARTICLE
                                </p>
                            </div>

                        {/* image div of the inner div  */}
                            <div className="next-show-inner-img-div">
                                <img src={bh2} />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
      
      </div>
    );
  }
}

export default Post;