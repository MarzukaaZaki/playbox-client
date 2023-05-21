import React from 'react';
import Gallery from './Gallery/Gallery';
import ToysByCategory from './ToysByCategory/ToysByCategory';
import HomeCarousel from './HomeCarousel/HomeCarousel';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Gallery></Gallery>
            <ToysByCategory></ToysByCategory>
        </div>
    );
};

export default Home;