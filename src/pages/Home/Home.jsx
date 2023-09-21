import React from 'react';
import Gallery from './Gallery/Gallery';
import ToysByCategory from './ToysByCategory/ToysByCategory';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import Comments from './Comments/Comments';
import Sales from './Sales/Sales';
import ToysByAge from './ToysByAge/ToysByAge';
import FeaturedBlogposts from './FeaturedBlogposts/FeaturedBlogposts';


const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Gallery></Gallery>
            <ToysByAge></ToysByAge>
            <ToysByCategory></ToysByCategory>
            <FeaturedBlogposts></FeaturedBlogposts>
            <Comments></Comments>
            
            <Sales></Sales>
        </div>
    );
};

export default Home;