import React from 'react';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <div className='size-full flex-col-center  bg-Dark-Gradiant  light:bg-Light-Gradiant'>
            <Header />
            <Main />
            <Footer />
            
        </div>
    );
}

export default Home;
