import React from 'react'
import Common from './Common';
import web2 from "../Images/web-developm.jpg"


function About() {
  return (
    <><Common name="Welcome to About page" 
    imgsrc={web2}
    visit="/contact" 
    btname="Contact Now"/>
    </>
  )
}

export default About;