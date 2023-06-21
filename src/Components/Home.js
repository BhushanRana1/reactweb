import React from 'react'
import web from "../Images/grow_business_website.png"
import Common from './Common';

function Home() {
    return (
        <><Common name="Grow your buisness with" 
        imgsrc={web}
        visit="/service" 
        btname="Get Started"/>
        </>
    )
}

export default Home;