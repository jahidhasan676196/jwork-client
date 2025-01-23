import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Outlet */}
            
            <Outlet></Outlet>
            
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;