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
            this.changeState()
        }, 2000);
        
    }

    changeState = (motive = 0) =>{

        const carousel_item = document.getElementsByClassName('c-item');
        const dot_item = document.getElementsByClassName('dot');
        
         
        // console.log(carousel_item);
        

        for(let i=0; i < carousel_item.length; i++){
            carousel_item[i].className = "c-item";
            dot_item[i].className =  "dot dot-act";
            
        }

        carousel_item[this.state.carousel_index].className = "c-item act";
        dot_item[this.state.carousel_index].className = "dot";
        if(this.state.carousel_index == 2){
                this.setState({
                    carousel_index: 0
                });
        }
        else{
            this.setState({
                carousel_index: this.state.carousel_index + 1
            });
        }



        
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
                    } key={x} className='dot'>

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
            </div>
        );
    }
}

export default Slider;
