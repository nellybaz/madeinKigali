import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/about2.css';


class About2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            a:'active-tab',
            b:'',
            c:'',
            d:'',
            e:'',
            f:'',
            g:'',
        }
    }
    changeTabColor=(x)=>{
        this.setState({
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
            f: '',
            g:''
        });
            


        switch (x) {
                case 'a':
                this.setState({
                    a: 'active-tab'
                });
                    
                    break;

                    case 'b':
            this.setState({
                b: 'active-tab'
            });
                
                break;

                case 'c':
            this.setState({
                c: 'active-tab'
            });
                
                break;

                case 'd':
            this.setState({
                d: 'active-tab'
            });
                
                break;

                case 'e':
            this.setState({
                e: 'active-tab'
            });
                
                break;

                case 'f':
            this.setState({
                f: 'active-tab'
            });
                
                break;

                case 'g':
                this.setState({
                    g: 'active-tab'
                });
                    
                    break;
        
            default:
                break;
        }
    }

    render() {
        return (
            <div className='About2'>
                <Header />

                <div className='about2-wrapper'>
                    <div className='video-jumbotron'>

                        <video autoPlay>
                            <source src="https://f1.media.brightcove.com/4/1555966121001/1555966121001_5209370355001_5209360879001.mp4?pubId=1555966121001&videoId=5209360879001" type="video/mp4" />
                            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                            Your browser does not support HTML5 video.
</video>
                    </div>



                    <div className='mission'>
                        <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and, more recently, by its inclusion in text layout applications, such as Aldus PageMaker.</p>
                    </div>


                    <div className='timeline'>
                   <div className='p'>
                   <p>OUR TIMELINE</p>
                   
                   </div>
                    
                    </div>


                    <div className='timeline-tabs'>
                        <div onClick={()=> this.changeTabColor('a')} className={`a ${this.state.a}`}>
                        2013
                        </div>
                        <div onClick={()=> this.changeTabColor('b')} className={`b ${this.state.b}`}>
                        2014
                        </div>
                        <div onClick={()=> this.changeTabColor('c')} className={`c ${this.state.c}`}>
                        2015
                        </div>
                        <div onClick={()=> this.changeTabColor('d')} className={`d ${this.state.d}`}>
                        2016
                        </div>
                        <div onClick={()=> this.changeTabColor('e')} className={`e ${this.state.e}`}>
                        2017
                        </div>
                        <div onClick={()=> this.changeTabColor('f')} className={`f ${this.state.f}`}>
                        2018
                        </div>
                        <div onClick={()=> this.changeTabColor('g')} className={`g ${this.state.g}`}>
                        2019
                        </div>
                    
                    </div>

                    <div className='tab-content'>
                    <div className='left'>
                        <img src={require('../assets/images/about/2.png')} />
                    </div>
                    

                    <div className='right'>
                        <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and, more recently, by its inclusion in text layout applications, such as Aldus PageMaker.</p>
                    
                    </div>
                    </div>

                    <div className='strategy'>

                        <div className='left'>
                            <h4>OUR STRATEGY</h4>
                            <button>GREAT FASHION AT GREAT PRICES</button>
                        
                        </div>

                        <div className='right'>
                        <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and, more recently, by its inclusion in text layout applications, such as Aldus PageMaker.</p>
                        
                        </div>
                    
                    </div>

                    <div className='bottom-div'>
                    <div className='top'>
                    <p>IT STARTED WITH A SIMPLE IDEA & OUR MISSION REMAINS THE SAME</p>
                    <h5>CREATE HIGH QUALITY, WELL-DESERVED GOODS THAT WE WANTED OURSLEVES</h5>
                    </div>
                    <div className='bottom'>
                    <p>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and, more recently, by its inclusion in text layout applications, such as Aldus PageMaker.</p>
                    </div>
                    
                    </div>
                </div>


                <Footer />
            </div>
        )
    }
}

export default About2;