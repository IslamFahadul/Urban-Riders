import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';

const Destination = () => {
    return (
        <div className="container">
            <Header></Header>
            <hr></hr>
            <h1 className="text-center text-info">First Select Ride</h1>
            <Home/>
        </div>
    );
};

export default Destination;