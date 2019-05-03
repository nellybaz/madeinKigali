import React, {Component} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import request from 'superagent';
 
import '../../css/pages/dashboard.css';

import Flashdeals from  './flashdeals';
import SideBar from './sidebar';

class DashBoard extends Component{
    constructor(props){
        super(props)
        this.state = {
            content:"Products",

            category: "",
            sub_category: "",
            prd_name: "",
            prd_price : "",
            prd_img: "",
            size: "",
            brand:"",
            instock:"",
            directory: "products",
            imageHasUploaded: false,
            image_data: null,


        }
    }


    handleAddProducts =()=> {

        this.uploadImage(this.state.image_data);
              
    }
    componentDidMount(){
        // this.handleForm();

    }


    async addProduct(event) { 

        try {


            let currentComponent = this;

        request
          .post('https://madeinkigali.com/API/api2/dashboard/')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ token: "mik9876543210", tag:'products', 
            name: currentComponent.state.prd_name,
            price: currentComponent.state.prd_price,
            img: currentComponent.state.prd_img,
            cat: currentComponent.state.category,
            sub_cat: currentComponent.state.sub_category,
            brand: currentComponent.state.brand,
            size: currentComponent.state.size,
            instock: currentComponent.state.instock

        })
          .end(function(err, res){
         
          if(res != null){

            console.log(res);
            
            if(res.body.res === 1)
            {
               console.log('info added okay');
               alert('PRODUCT UPLOAD SUCCESS');
               window.location.href = "/dev/admin/dashboard"
               
              
            }

            else if(res.body.res === 0)
            {
                alert('PRODUCT UPLOAD FAILED');
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




  //======================= HANDLE IMAGE UPLOAD =========================== \\

  handleImageUpload =(event)=>{
   
    const data = new FormData();
    data.append('submit', 'true');
    data.append('fileToUpload', event.target.files[0]);    

    
    
    this.setState({
        prd_img: event.target.files[0].name,
        image_data: data,
    })

    
  }


  async uploadImage(x) {  
    try {


        let currentComponent = this;

    request
      .post('https://www.madeinkigali.com/upload/')
      .send(x)
      .end(function(err, res){
     
      if(res != null){
        console.log(res.body);
        if(res.body.res === 1)
        {
            currentComponent.addProduct();
          
            currentComponent.setState(
                {
                    imageHasUploaded: true
                }
            );
          
            console.log('uploaded');
            
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


  



  // ============================ IMAGE UPLOAD ENDS ======================\\
    render(){
        return(
            <div className='DashBoard'>

              <SideBar />

                <div className='d-right'>
                {/* <div className='top-header'>
                
                </div>
                 */}

                <div className='d-right-wrapper'>
                    <h5><b>ADD PRODUCTS</b></h5>

                    <div className='d-right-content'>
                        <input onChange={(e)=>{
                            this.setState({
                                prd_name: e.target.value
                            })}} type="text" placeholder="Product name" />

                        <input onChange={(e)=>{
                            this.setState({
                                prd_price: e.target.value
                            })}} type="text" placeholder="Product price" />

                        <select onChange={(e)=>{
                            this.setState({
                                category: e.target.value
                            })
                          
                        }}>
                            <option selected>Select Category</option>
                            <option value = "men">Men</option>
                            <option value = "women">Women</option>
                          
                        </select>

                        <select onChange={(e)=>{
                            this.setState({
                                sub_category: e.target.value
                            })
                          
                        }} >
                            <option selected>Select Sub Category</option>
                            <option value = "dress">Dress</option>
                            <option value = "shoes">Shoes</option>
                            <option value = "shirts">Shirts</option>
                        </select>
                        <select onChange={(e)=>{
                            this.setState({
                                brand: e.target.value
                            })
                          
                        }}>
                            <option selected>Select Brand</option>
                            <option value = "Amami">Amami</option>
                            <option value = "MIK">MIK</option>
                            <option value = "MIK & CO">MIK & CO</option>
                        </select>
                        <input type="text" placeholder="Sex" />

                        <form>
                            <label>Product Size</label> <br></br>
                            <input hidden/>
                            <input  className='checkbox' value="s, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> S <br></br>
                            <input className='checkbox' value="m, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> M <br></br>
                            <input className='checkbox' value="l, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> L <br></br>

                            <input className='checkbox' value="xl, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> XL <br></br>
                            <input className='checkbox' value="2xl, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> 2XL <br></br>
                            <input className='checkbox' value="3xl, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> 3XL <br></br>
                            <input className='checkbox' value="all, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> ALL <br></br>
                        </form>
                        <input onChange={(e)=>{
                            this.setState({
                                instock: e.target.value
                            })}} type="number" placeholder="Product instock" />
                        <input type="file" onChange={this.handleImageUpload} /> 

                        <button onClick={()=> this.handleAddProducts()} className='add-btn'>ADD</button>                   
                    </div>
                
                </div>
                
                </div>


                

            </div>
        )
    }
}

export default DashBoard;