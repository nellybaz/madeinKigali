import React, { Component } from 'react';
import '../css/main.css';

class Slider extends Component {

    constructor(props){
        super(props)
        this.state={
            carousel_index: 0,
        }
    }

    async componentDidMount() {
        const carousel_item = document.getElementsByClassName('c-item');
                
        let len = carousel_item.length
      
        

        setInterval(async ()=>{ 
            let motive = 0       
            try {
                carousel_item[this.state.carousel_index].className = "c-item";
            } catch (error) {
                console.log(error);
                
            }

           try {
            this.state.carousel_index < len-1 ?
            carousel_item[this.state.carousel_index + 1].className = "c-item act" : 
            motive = 1;
           } catch (error) {
               console.log(error);
               
           }
           this.changeState(motive);           
        }, 8000);
        
    }

    changeState = (motive = 0) =>{
        if(motive != 1){
            this.setState({
                carousel_index: this.state.carousel_index + 1,
            })
        }

        else{
            try {
                const carousel_item = document.getElementsByClassName('c-item');
                carousel_item[2].className = "c-item";
                carousel_item[0].className = "c-item act";


            } catch (error) {
                console.log(error);
                
            }
            this.setState({
                carousel_index: 0,
            })
        }

        //alert(this.state.carousel_index);
        }


        handleCarouselDot = () =>{
            const holder = [];

            for (let x = 0; x < 3; x++) {
                holder.push(
                    <div onClick={
                        () => {
                            const carousel_item = document.getElementsByClassName('c-item');
                            carousel_item[this.state.carousel_index].className = "c-item";
                            carousel_item[x].className = "c-item act";

                            this.setState({
                                carousel_index: x,
                            });


                        }
                    } key={x} className=''>

                    </div>
                )
                
            }
            return holder;
        }
    render() {
        return (
            <div className="Slider">



            <div className='slider-wrapper'>
                <div className='carousel_item_holder'>
                    <div className='c-item act'>
                        {/* one */}
                    </div>

                    <div className='c-item'>
                    {/* two */}
                    </div>

                    <div className='c-item'>
                    {/* three */}
                    </div>

                    <div className='dot-control'>
                        {this.handleCarouselDot()}                   
                    
                    </div>
                </div>
                
            </div>

                {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="jumbotron jumbotron-fluid jumbo1">
                                <div className="container">

                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">

                            <div className="jumbotron jumbotron-fluid jumbo2">
                                <div className="container">

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className="jumbotron jumbotron-fluid jumbo3">
                                <div className="container">

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        );
    }
}

export default Slider;
