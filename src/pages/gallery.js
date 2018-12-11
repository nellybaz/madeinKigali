import React,{Component} from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/gallery.css';
import gal1 from '../assets/images/gal1.jpeg';
import gal2 from '../assets/images/gal2.jpeg';
import upload from '../assets/images/upload.png';
import cross_out from '../assets/images/cross-out.png';



class Gallery extends Component{
    constructor(props){
        super(props)
        this.state={
            open_gallery_class: 'hide',
            gallery: [],
            fadein_top_animate_class:'',
           

        }
    }


    handleFadeinTop=()=>{
        if( this.state.fadein_top_animate_class === ""){
            this.setState({
                fadein_top_animate_class: "w3-container w3-center w3-animate-top show",
            })
        }
        else
        {
            this.setState({
                fadein_top_animate_class: "",
            })
        }
        
    }
    handleGalleryOpen=(x)=>{  
        let pos = 5;
        if(x > 0){
            pos = (Math.ceil(x/5))*5
        }
        
     
        
       
        let Gal = this.state.gallery;    
        if(this.state.open_gallery_class === "gallery-display-wrapper"){
            Gal.splice(pos, 1)
            this.setState(
                {
                gallery: Gal,
                 open_gallery_class: 'hide',
                }
             )
        }

        else{
            Gal.splice(pos, 0, 
                
                <div className={`gallery-display-wrapper`}>
                    <div className="btn-exit-gallery-open">
                        
                        <img onClick={()=>this.handleGalleryOpen(x)} src={cross_out} />
                    </div>

                     <div className="gallery-display-inner">
                    
                        <div>
                            <img className="gallery-image-larger" src={gal1} />
                        </div>
                        <div className="gallery-image-small-div">
                            <img className="img-gallery-small" src={gal2} />
                            <p>Womens Houndstooth Chunky Roll Jumper - Ivory <br></br><span>$42</span></p>
                            
                        </div>
                        <div className="gallery-image-small-div">
                            <img className="img-gallery-small" src={gal1} />
                            <p>Womens Houndstooth Chunky Roll Jumper - Ivory <br></br><span>$42</span></p>
                        </div>
                        <div className="gallery-image-small-div">
                            <img className="img-gallery-small" src={gal2} />
                            <p>Womens Houndstooth Chunky Roll Jumper - Ivory <br></br><span>$42</span></p>
                        </div>
                        <div className="gallery-image-small-div">
                            <img className="img-gallery-small" src={gal1} />
                            <p>Womens Houndstooth Chunky Roll Jumper - Ivory <br></br><span>$42</span></p>
                        </div>
                    

                    </div>
                </div>
                )
            this.setState(
                {
                 gallery: Gal,
                 open_gallery_class: 'gallery-display-wrapper',
                }
             )
        }
        
    }

    componentDidMount(){
        this.galleryHolder();
    }
    galleryHolder=()=>{
        
        
        const Gallery = [];
       
        let img = "";
        
        
        for (let x = 0; x < 20; x++) {
            
           
            if(x % 2 === 0){
                img = gal2;
            }
            else{
                img = gal1;
            }
                Gallery.push(
            
                    <div onClick={()=> this.handleGalleryOpen(x)} className="gallery-content-inner-div" key={x}>
                        <img src={img} alt="mik gallery"/>
                     </div>           
                
            )
           
            
        }

        this.setState({
            gallery: Gallery
        })
    }
   


    render(){
        return(
            <div className="Gallery">
                <Header/>
             <div className="gallery-wrapper">
                <div className="gallery-top-row">
                        <div></div>
                        <p style={{textAlign:'center',}}><span style={{fontSize:'1.5rem'}}><b># MADEINKIGALISTYLE</b></span><br></br>SEE HOW OTHERS ARE WEARING MADEINKIGALI</p>

                        <div className="btn-gallery-div">
                            <span> <img src={upload} /><button onClick={()=>{this.handleFadeinTop()}} className="btn-gallery-upload">UPLOAD AN IMAGE</button></span>
                        </div>

                    
                        
                </div>

                <div className="gallery-navigation">
                    <div>
                        ALL
                    </div>

                     <div>
                        DRESSES
                    </div>

                     <div>
                        TOPS
                    </div>

                     <div>
                        TROUSERS
                    </div>

                     <div>
                        COATS
                    </div>

                     <div>
                        DENIM
                    </div>

                     <div>
                        SHOES
                    </div>

                     <div>
                        ACCESSORIES
                    </div>

                     <div>
                        JEWELRIES
                    </div>
                </div>


                <div className="gallery-content">
                    {this.state.gallery}

                   
                </div>
              {/* modal */}


              <div className={`modal-wrapper ${this.state.fadein_top_animate_class}`}>

                <div>
                        <p><b>UPLOAD YOUR PICTURE</b></p>
                        <input type="file"></input> <br></br>
                        <button className="btn btn-submit-upload">UPLOAD</button>
                </div>

                <div>
                    <button className="btn btn-close-modal" onClick={()=>this.handleFadeinTop()}>CLOSE</button>
                </div>
              </div>
               
             </div>

             <Footer />
            </div>

        );
    }

}


export default Gallery;