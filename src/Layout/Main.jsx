import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            {/* Outlet */}
            <Outlet></Outlet>
            {/* Footer */}
        </div>
    );
};

export default Main;