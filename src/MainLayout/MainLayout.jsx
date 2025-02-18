import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-gradient-to-r '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;