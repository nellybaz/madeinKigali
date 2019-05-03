import React, {Component} from 'react';


import request from 'superagent';

import '../../css/pages/dashboard.css';
import SideBar from './sidebar';

class Blog extends Component{
    constructor(props){
        super(props)
        this.state = {
            article_post:"",
            article_name:"",
            article_category:"",
            article_featured:"",

        }
    }

    componentDidMount(){
      

    }

    async addBlog(){
        
        try {


            let currentComponent = this;

        request
          .post('https://madeinkigali.com/API/api2/dashboard/')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ token: "mik9876543210", tag:'blog', article_post:this.state.article_post, article_name:this.state.article_name,
          article_featured: this.state.article_featured, article_category: this.state.article_category
        })
          .end(function(err, res){
         
          if(res != null){
            if(res.body.res === 1)
            {
                alert('BLOG ADDED');
                window.location.reload();
                
            }

            else if(res.body.res === 0)
            {
                console.log('not registered');
                
            }
             
          }
          else{
            console.log(res, err);
            
          }
        
          });
        
        
        } catch(e) {
          console.log(e);
        }
    }

    render(){
        return(
            <div className='DashBoard'>

              <SideBar />

                <div className='d-right'>
                <div className='top-header'>
                
                </div>
                

                <div className='d-right-wrapper'>
                    <h5><b>ADD BLOG ARTICLE</b></h5>

                    <div className='d-right-content'>
                        <input onChange={(e)=>{
                            this.setState({
                                article_name: e.target.value
                            })}} type="text" placeholder="Article name" />

                        <textarea onChange={(e)=>{
                            this.setState({
                                article_post: e.target.value
                            })}} type="text" placeholder="Article post" />

                        <select onChange={(e)=>{
                            this.setState({
                                article_category: e.target.value
                            })
                          
                        }}>
                            <option selected>Select Category</option>
                            <option value = "news">News</option>
                            <option value = "health">Health</option>
                            <option value = "visitrwanda">VisitRwanda</option>
                            <option value = "style">Style</option>
                            <option value = "beauty">Beauty</option>
                            
                          
                        </select>

                        <select onChange={(e)=>{
                            this.setState({
                                article_featured: e.target.value
                            })
                          
                        }}>
                            <option selected>Featured? </option>
                            <option value = "1">Yes</option>
                            <option value = "0">No</option>
                           
                        </select>
                       
                        
                        <input type="file" onChange={this.handleImageUpload} /> 

                        <button onClick={()=> this.addBlog()} className='add-btn'>ADD</button>                   
                    </div>
                
                </div>
                
                </div>


                

            </div>
        )
    }
}

export default Blog;