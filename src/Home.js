import React from 'react';
import Slider from './components/Slider'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'

const Home = () => {

    return (  
        <> 
            <Slider />
            <About />
            <Testimonials />
            <Gallery />
        </>
    );
}
 
export default Home;