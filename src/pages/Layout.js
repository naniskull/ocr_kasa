import React from 'react';
import Header from '../components/desktop/Header';
import Footer from '../components/desktop/Footer';


const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header/>
            {/* <main>{children}</main>
            <Footer /> */}
        </div>
    );
};

export default Layout;