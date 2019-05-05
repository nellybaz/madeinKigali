import React, {Component} from 'react';
import '../../css/pages/dashboard.css';

import SideBar from './sidebar';

import request from 'superagent';

class D_flashdeals extends Component{

    constructor(props){
        super(props)
        this.state = {
                searchedData: [],
        }
    }

    displaySearch=()=>{
        const result = [];

        for (let i = 0; i < this.state.searchedData.length; i++) {
            // console.log(this.state.searchedData[i]);
            
            result.push(
                <div className='search-item-div' key={i}>
                        <p>{this.state.searchedData[i].name}</p>

                        <button onClick={()=>this.handleAddToFlashDeals(this.state.searchedData[i].id)}>Add</button>
                </div>
            )
            
        }

        return result;
    }


    async handleAddToFlashDeals(product_id){

        try {


            let currentComponent = this;

        request
          .post('https://madeinkigali.com/API/api2/dashboard/')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ token: "mik9876543210", tag:'addFlash', product_id: product_id})
          .end(function(err, res){
         
          if(res != null){
              
            if(res.body.flash == 1)
            {
              alert("ADDED TO FLASHDEALS");
              window.location.reload();
              
            }

            else if(res.body.flash === 0)
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



    handleSearch=(e)=>{
            this.getAllproduct(e.target.value);
    }

    async getAllproduct(search_query){ 
     
        try {


            let currentComponent = this;

        request
          .post('https://madeinkigali.com/API/api2/dashboard/')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ token: "mik9876543210", tag:'search', query: search_query})
          .end(function(err, res){
         
          if(res != null){
            if(res.body.search != null)
            {
              
              currentComponent.setState({
                  searchedData: res.body.search
              });
            }

            else if(res.body.search === 0)
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
                  <h5><b>ADD FLASHDEALS</b></h5>

                  <div className='flashdeals-container'>

                  <div className='inner'>
                        <input onChange={this.handleSearch} type="search" placeholder="search product to add to flashdeals" />

                        <div className='search-result'>

                        {this.displaySearch()}

                        
                        </div>
                  </div>
                  
                  </div>

              
              </div>
              
              </div>


              

          </div>
        )
    }
}

export default D_flashdeals;