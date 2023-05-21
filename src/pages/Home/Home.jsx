import React from 'react';
import Gallery from './Gallery/Gallery';
import ToysByCategory from './ToysByCategory/ToysByCategory';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import Comments from './Comments/Comments';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Gallery></Gallery>
            <ToysByCategory></ToysByCategory>
            <Comments></Comments>
        </div>
    );
};

export default Home;