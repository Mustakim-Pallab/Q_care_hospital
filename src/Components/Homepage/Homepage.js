import React, { useEffect, useState } from 'react';
import Login from '../Shared/Login/Login';
import Navigation from '../Shared/Navbar/Navigation';
import Header from './Header/Header'
import HomeServices from './Home Services/HomeServices';
import Topbar from './Topbar/Topbar';
import Doctors from '../Doctors/Doctors';
import AboutUs from '../AboutUs/AboutUs';

const Homepage = () => {
    const [Doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users')
        .then(res=>res.json())
        .then(data=>setDoctor(data));
    }, []);
    return (
        <div>
            
            <Header/>
            <HomeServices/> 
            <Doctors data={Doctor} />
            <AboutUs/>
        </div>
    );
};

export default Homepage;