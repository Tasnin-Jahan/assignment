import React from 'react';
import HomeOne from './HomeOne';
import Hometwo from './Hometwo';
import Teams from './Teams';
import Titles from './Titles';
import Picture from './Picture';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <HomeOne></HomeOne>
            <Hometwo></Hometwo>
            <Titles></Titles>
            <Teams></Teams>
            <Picture></Picture>
            <Posts></Posts>
        </div>
    );
};

export default Home;