import React from 'react';
import Banner from './Banner';
import About from './About';
import LatestBooks from './LatestBooks';
import ClientReview from './ClientReview';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <LatestBooks></LatestBooks>
            <ClientReview></ClientReview>
            <Team></Team>
        </div>
    );
};

export default Home;