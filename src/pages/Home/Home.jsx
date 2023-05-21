import React from 'react';
import Gallery from './Gallery/Gallery';
import ToysByCategory from './ToysByCategory/ToysByCategory';

const Home = () => {
    return (
        <div>
            <Gallery></Gallery>
            <ToysByCategory></ToysByCategory>
        </div>
    );
};

export default Home;