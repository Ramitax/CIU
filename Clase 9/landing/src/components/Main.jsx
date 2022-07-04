import React from "react";
import Carousel from './Carousel';
import AboutMe from './AboutMe';
import Prices from './Prices'

const Main = () => {
    return (
        <div>
            <Carousel/>
            <AboutMe/>
            <Prices/>
        </div>
    );
}

export default Main;