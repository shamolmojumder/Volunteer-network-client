import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const events=[
    {
        name:'Child Support',
        pic:'childSupport.png'
    },
    {
        name:'animalShelter',
        pic:'animalShelter.png'
    },
    {
        name:'babySit',
        pic:'babySit.png'
    },
    {
        name:'birdHouse',
        pic:'birdHouse.png'
    },
    {
        name:'childSupport',
        pic:'childSupport.png'
    },
]
const Home = () => {

    



    return (
        <div className="row">
            {
                events.map(event =><Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;