import React from 'react'
import web from "../src/image/bgi.jpg"
import Common from './Common'

const About = () => {
  return (
    <>
    <Common name="Welcome to about page" imgsrc={web} visit="/contact" btname="Contact US"/>
    </>
  )
}

export default About