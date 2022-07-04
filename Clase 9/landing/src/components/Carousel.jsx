import React from "react";
import slide_1 from '../assets/slide-1.jpg';
import slide_2 from '../assets/slide-2.jpg';
import slide_3 from '../assets/slide-3.jpg';

const Carousel = () => {
    return (
        <div id="carousel">
            <div id="carouselExampleIndicators" className="carousel slide m-0 w-100 h-100" data-bs-ride="true">
                <div className="carousel-indicators m-0">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner m-0 w-100 h-100">
                    <div className="carousel-item active m-0">
                        <img src={slide_1} id='imagen'/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item m-0">
                        <img src={slide_2} id='imagen'/>
                    </div>
                    <div className="carousel-item m-0">
                        <img src={slide_3} id='imagen'/>
                    </div>
                </div>
                <button className="carousel-control-prev m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;