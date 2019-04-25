import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/about2.css';
import '../css/utils/screen.css';

import {Link} from 'react-router-dom';

import img1 from '../assets/images/about/madeinrwandakigali2013.jpg';
import img2 from '../assets/images/about/madeinrwandakigali2014.jpg';
import img3 from '../assets/images/about/madeinrwandakigali2015.jpg';
import img4 from '../assets/images/about/madeinrwandakigali2016.jpg';
import img5 from '../assets/images/about/madeinrwandakigali2017.jpg';
import img6 from '../assets/images/about/madeinrwandakigali2018.jpg';
import img7 from '../assets/images/about/madeinrwandakigali2019.jpg';


class About2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            last_img_class:'',
            a:'active-tab',
            b:'',
            c:'',
            d:'',
            e:'',
            f:'',
            g:'',
            large_screen_class:'',

            timelineDisplayIndex:0,


            timeline : [
                {
                    img: img1,
                    summary: 'With a passion of inaugurating Rwanda’s apparel industry to be a major contributor to the economy’s earnings, Made in Kigali was founded by Scorpio Ramazani Khoury in 2013. The founder’s vision was to create an alternative textile production firm to the existing brands with a deliberate focus on empowering local women with entrepreneurial skills. Ms. Ramazani Khoury was successful at training 10 tailors in understanding the art of garment making while employing an extra 55 as permanent staff for production. Made in Kigali was as well a timely response to the government’s call for the private sector to consider developing industries beyond mining. The founder understood that there was more to Rwanda than the Gorillas, tea and coffee. There had to be a diversification of what and how the country generated its income.'
                },

                {
                    img: img2,
                    summary: 'From May 19th - 23rd 2014, Rwanda hosted the African Development Bank (AfDB) Annual Meetings, where Boards of Governors of the bank meet to review the Bank Group\'s achievements in the past year as well as examine and endorse its plans for the current year. We were invited to exhibit our products at the African Development Bank\'s 50th Anniversary were discussions were focused on the following theme: " The next 50 years: The Africa We Want”. While this was our official launch to the Rwandan market, our products and unique business model were as a result of the support we received from Rwandan people thus earning us the 2nd position over hundreds of exhibitors at the 17th International Trade Fair held under the auspices of the Rwanda Private Sector Federation.'
                },

                {
                    img: img3,
                    summary: 'In realisation of our vision, Made in Kigali strengthened its policies around empowering women as it progressed in meeting international standards. MIK was recognized by a renowned American business magazine “Fast Company” as the 31st most innovative company in 2015 “giving it a place among the gutsiest, smartest, most interesting and forward-thinking businesses on the planet for that year”. In the same year, we were honoured to have hosted H.E Dr. Nkosazana Clarice Dlamini-Zuma who was then the African Union Chairperson at our premises. Dr. Zuma is a celebrated African leader that has championed various women empowerment initiatives and takes joy in associating with women entrepreneurs that are in the business of empowering even more women. To MIK, Dr. Zuma has selflessly demonstrated her commitment to the “One people, one destiny for women empowerment”'
                },

                {
                    img: img4,
                    summary: 'The textile industry was not a priority when MIK started its operations in Rwanda. It took the resilience of our management and the hard work of the talented women we worked with to withstand the challenges that came with it. We thrived from being a start-up fashion house in 2013 to facilitating the overall growth of the fashion scene in Rwanda. We were grateful for the many initiatives that the government introduced during that period; to support the textile industry including the first edition of Made in Rwanda expo that we were privileged to participate in and the lifting of all taxes on raw materials used in textile production. MIK  added a branch at the Kigali heights complex that was inaugurated by the President of the Republic of Rwanda, H.E Paul Kagame “Everybody’s business is government’s business because it is the government’s responsibility to provide the best business environment”'
                },

                {
                    img: img5,
                    summary: 'As Rwanda continued to strive for economic independence, the government ’s initiatives included vintage and secondhand clothing ban in the early months of 2017. The government believed that used clothing were negatively impacting the textile industry and contributed to an attitude of Western dependence. Even as production houses like MIK were aiming at sustaining the demand for clothing after the ban, we observed that there was no firm that produced underwear and lingerie products in Rwanda thus making them scarce products. We decided to outsource an Italian brand that met our standards and converted our Kigali Heights branch into a lingerie store called Amami; this being heavily based on demand and necessity. We then opened a new MIK branch in one of our business centres “Remera corner” in Remera district.'
                },

                {
                    img: img6,
                    summary: 'Augmenting the vision of the Republican President of Rwanda was prime to our goals in this year. We strived to ensure that Rwanda led the way into promoting Africa to trade with itself by opening to many more international markets. To do so, we had to reimagine design, fashion and comfort. We prioritised our actions on our social responsibility by contributing to an area that is core to what we believe in “wildlife conservation” thus engaging the Gorilla Guardians Village, an organisation that was founded by the much celebrated CNN hero, Dr. Edwin Sabuhoro. It brings together ex-poachers and incorporates them into distinct cooperatives that include agriculture, crafting and many more which sustain their livelihoods. '
                    // With the support of the Gorilla Guardians Village, MIK handmade centre was created to contribute to their existing resources as we believe the cooperatives have the capacity, creativity, and determination to achieve economic independence. Our vision for such partnerships is beyond our products and empowering the individuals we work with, it extends to the animals and environment at risk if we do not help in sustaining the lives of such individuals. “One old man looked at me and said, \'Your kids are starving to death. Would you poach to feed your family? it was an eye-opener for me.” – Edwin Sabuhoro\n MIK is proud to be part of the life-changing initiative taken by Gorilla Guardians Village.'
                },

                {
                    img: img7,
                    summary: 'The fashion and design revolution is now and it is called Made In Kigali - Made to get it right. We are evolving to match our polished ethics and market demand. The MIK e-Commerce will be the latest and most exciting of our offerings. We are concluding works on an online site that has been built to serve the buying needs of both our local and international customers. We have gone on to diversify our products to include homeware and accessories. It feels good to do good, social responsibility is at the core of everything we do. Our commitment to responsibility lives in the materials we choose, the ethical partners we work with, our employee benefits, community involvement and so much more. For MIK, we are beyond commercial criteria, we have ethical trading, sustainable sourcing and animal welfare at the heart of how we work.'
                }
            ]
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
                    a: 'active-tab',
                    timelineDisplayIndex:0
                });
                    
                    break;

                    case 'b':
            this.setState({
                b: 'active-tab',
                timelineDisplayIndex:1
            });
                
                break;

                case 'c':
            this.setState({
                c: 'active-tab',
                timelineDisplayIndex:2
            });
                
                break;

                case 'd':
            this.setState({
                d: 'active-tab',
                timelineDisplayIndex:3
            });
                
                break;

                case 'e':
            this.setState({
                e: 'active-tab',
                timelineDisplayIndex:4
            });
                
                break;

                case 'f':
            this.setState({
                f: 'active-tab',
                timelineDisplayIndex:5
            });
                
                break;

                case 'g':
                this.setState({
                    g: 'active-tab',
                    last_img_class:'last_img_class',
                    timelineDisplayIndex:6
                });
                    
                    break;
         
            default:
                this.setState({
                    timelineDisplayIndex:0
                });
                break;
        }
    }
 
    componentDidMount(){
        // if(window.innerWidth > 2000){
        //   this.setState({
        //     large_screen_class: "large_screen",
        //   });
        // }
      } 

    render() {
        return (
            <div className={`About2 ${this.state.large_screen_class}`}>
                <Header />

                <div className='about2-wrapper'>
                    <div className='video-jumbotron'>

                        <video autoPlay loop>
                        {/* https://f1.media.brightcove.com/4/1555966121001/1555966121001_5209370355001_5209360879001.mp4?pubId=1555966121001&videoId=5209360879001 */}
                            <source src="https://madeinkigali.com/images/video/about.mp4" type="video/mp4" />
                            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                            Your browser does not support HTML5 video.
                         </video>

                        <div className='about2-jumbo-content'>
                        <h5>
                            WE ARE AFRICA, AUTHENTIC AND MADE WITH LOVE
                        </h5>
                        {/* <h5 className="h5">
                             
                        </h5> */}
                        

                        <p>
                            We focus on fashion as a force for social unity, inspiring the Africa we want by supporting Pan-Africanism.
                        </p>
                        <p className="p">
                             We believe fashion thrives on unity and self-expression.
                        </p>
                        {/* <p className="p1">
                            
                        </p> */}

                        <button>
                            COMING SOON THE MIK STORY >
                        </button>
                        </div>
                    </div>



                   <div className='mission'>
                        <p>
                        Our mission is to become the world’s number one solution for cooperatives and for fashion loving designers around Africa by driving long lasting
                         positive change. We want to make the world a better place where people can be themselves, expressing their authenticity through unique creations.
                        </p>
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

                    <div className='tab-content-left'>
                    <img className={`${this.state.last_img_class}`} src={this.state.timeline[this.state.timelineDisplayIndex].img} />
                    </div>

                    <div className='tab-content-right'>
                    <p>{this.state.timeline[this.state.timelineDisplayIndex].summary}</p>
                    </div>
                    </div>



                    <div className='strategy'>

                        <div className='strategy-left'>
                            <h4>MADE IN AFRICA</h4>
                            <Link to={'/company2'}>FASHION IS COMFORT</Link>
                        
                        </div>

                        <div className='strategy-right'>
                        <p>
                        We are committed to showing the world that all our achievements over the last 5 years were only the beginning. Our unwavering belief in pushing boundaries is powered by a deep commitment to social good and contributing to the fashion industry in Africa. And our unique approach to solving social and infrastructural challenges 
                        around Africa is constantly evolving. We believe that fashion is not to make you look good only, your comfort is as much a priority. We channel this to give our customers exactly what they want, at the best price and quality.
                        </p>
                        
                        </div>
                    
                    </div>
 
                    

                    <div className='bottom-div'>
                    <div className='bottom-div-top'>
                    
                    <p>IN A WORLD FULL OF TRENDS, OUR MISSION REMAINS THE SAME</p>
                    <h5>MADE IN KIGALI FASHION MAY NOT CHANGE THE WORLD, BUT THE PEOPLE WHO WEAR THEM WILL</h5>
                    </div>
                    <div className='bottom-div-bottom'>
                    <p>
                    
                    We never settle until our customers are satisfied, we make sure to stay ahead of their high expectations. We want to boost our relationships with each individual customer as much as possible, not just for friction-free shopping but for a lasting relationship built on the things they care about most. We understand our customers because so many of us are them. 
                    Shopping on MIK is more than a transactional process – we are an authentic, resourceful and creative brand that resonates through investing in people, communities and innovative ideas.
                    </p>
                    </div>
                    
                    </div> 
                </div>


                <Footer />
            </div>
        )
    }

}

export default About2;