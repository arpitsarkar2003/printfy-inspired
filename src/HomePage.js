import React from 'react'
import Copyrignt from './components/Copyrignt'
import Footer from './components/Footer'
import Banner2 from './components/Banner2'
import Review from './components/Review'
import Banner from './components/Banner'
import Section4 from './components/Section4'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Home from './components/Home'
import Navbar from './components/Navbar'

function HomePage() {
    return (
        <>
            {/* Navbar */}
            <div>
                <Navbar />
            </div>

            <div>
                {/* home */}
                <div>
                    <Home />
                </div>



                {/* Section1 */}
                <div>
                    <Section1 />
                </div>


                {/* Section2 */}
                <div>
                    <Section2 />
                </div>



                {/* Section3 */}
                <div>
                    <Section3 />
                </div>



                {/* Section4 */}
                <div>
                    <Section4 />
                </div>



                {/* Banner */}
                <div>
                    <Banner />
                </div>



                {/* Review */}
                <div>
                    <Review />
                </div>



                {/* banner2 */}
                <div>
                    <Banner2 />
                </div>



                {/* Footer */}
                <div>
                    <Footer />
                </div>



                {/* Copyright */}
                <div>
                    <Copyrignt />
                </div>
            </div>
        </>

    )
}

export default HomePage