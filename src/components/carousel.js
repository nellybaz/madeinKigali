import React, { Component } from 'react';
import '../css/main.css'; 


class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
        <div className="carousel-inner">
            <div className="carousel-item active">

            {/* <img className="d-block w-100" src={banner} alt="First slide"/> */}
                {/* //jumbotron in carosuel */}
                    <div className="jumbotron jumbotron-fluid jumbo1">
                    <div className="container">
                        {/* <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                    </div>
                    </div>
            </div>
            <div className="carousel-item">
            {/* <img className="d-block w-100" src={banner1} alt="Second slide"/> */}

                     {/* //jumbotron in carosuel */}
                     <div className="jumbotron jumbotron-fluid jumbo2">
                    <div className="container">
                        {/* <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                    </div>
                    </div>
            </div>
            <div className="carousel-item">
            {/* <img className="d-block w-100" src={banner} alt="Third slide"/> */}

                     {/* //jumbotron in carosuel */}
                     <div className="jumbotron jumbotron-fluid jumbo3">
                    <div className="container">
                        {/* <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                    </div>
                    </div>
            </div>
        </div>
</div>
            
      </div>
    );
  }
}

export default Slider;
