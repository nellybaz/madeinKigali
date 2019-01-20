import React, { Component } from 'react';
import '../css/info.css';




class Returns extends Component {

    constructor(props){
        super(props)

        this.state={
           
        }

    }

    componentDidMount(){
       
       
    }
  

   
  render() {
    return (
      <div className="Returns">
        <div className="returns-outer">
        There are 3 easy ways to return your madeinKigali.com purchase:
            <div className="returns-content" style={{marginTop:'15px'}}>
                <div className="content-item-1">
                    <div className="return-title">
                    
                    <b>Return method</b>
                    </div>


                    <div className="return-title">
                        <b>Cost</b>
                    </div>

                    <div className="return-title">
                    <b>Details</b>
                    </div>
                </div>

                <div className="content-item-1">
                    <div>
                    Return to store
                    </div>


                    <div>
                        Free
                    </div>

                    <div>
                    FIND YOUR NEAREST STORE
                    </div>
                </div>

                <div className="content-item-1">
                    <div>
                    Return via ParcelShop
                    </div>


                    <div>
                        Free
                    </div>

                    <div>
                    FIND YOUR NEAREST STORE
                    </div>
                </div>

                <div className="content-item-1">
                    <div>
                    Returns via post
                    </div>


                    <div>
                        Free
                    </div>

                    <div>
                    FIND YOUR NEAREST STORE
                    </div>
                </div>


            </div>
        </div>

       
        
     
      </div>
    );
    
  }
}

export default Returns;
