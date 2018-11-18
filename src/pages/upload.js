import React, { Component } from 'react';
import '../css/home.css';



class Upload extends Component {

    constructor(self){
      super(self)
    }
  
  uploadChange=(e)=>{
    //   console.log(e.target.files)

    let val = ''
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);


    reader.onload=(e)=>{
      val = e.target.result;
        console.log(e.target.result);
        
    }

    return val
}
  
  render() {
    
    return (
      <div className="Upload">
     
            <input type="file" name="picture" onChange={(e)=> this.uploadChange(e)}/>

            {/* {this.uploadChange()} */}


            
            <iframe src="//iframe.dacast.com/b/119308/c/485898" width="400" height="431" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>            
        
            
      </div>
    );
  }
}

export default Upload;
