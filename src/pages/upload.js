import React, {Component} from 'react';
import request from 'superagent';

class Upload extends Component{

  async login(x) {  
    try {


        let currentComponent = this;

    request
      .post('https://www.madeinkigali.com/upload/')
      .send(x)
      .end(function(err, res){
     
      if(res != null){
        if(res.body.res === 1)
        {
          
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


  handleselectedFile = (event) => {
    const data = new FormData();
    data.append('submit', 'mail.com');
    data.append('fileToUpload', event.target.files[0]);    

    this.login(data)

    // var request = new XMLHttpRequest();
    // request.open("POST", "https://www.madeinkigali.com/upload/");
    // request.send(data);
    
  }

  render(){
    return(
      <div className='Upload' style={{background:'white'}}>
      <h4>UPLOAD IMAGES</h4>
      


      <div className="pp">
        <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Upload</button>
       
      </div>
      </div>
    )
    }
  }
export default Upload;
