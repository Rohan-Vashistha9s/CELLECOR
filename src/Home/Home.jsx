import React from 'react'
import video from "../assets/video.mp4"
import Head from "./Head"
import Navbar from "../components/Navbar"
import BestSeller from './BestSeller'

const Home = () => {
  return (
    <>
      <Head/>
      <Navbar/>
      
      <div>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
      </div>

      <BestSeller/>

    </>
  )
}

export default Home
