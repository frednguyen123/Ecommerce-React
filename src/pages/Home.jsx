import React from 'react';
import Landing from '../components/Landing';
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Explore from "../components/Explore";
import Discounted from "../components/Discounted";

const Home = () => {
    return (
        <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
    );
}

export default Home;
