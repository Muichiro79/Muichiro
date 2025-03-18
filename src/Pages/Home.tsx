// import React from 'react'

// import Header from "../Component/Header"
import Footer from "../Component/Footer"
import AboutMe from "./components/AboutMe"
import CompaniesProject from "./components/CompaniesProject"
import HeroSection from "./components/HeroSection"
import Projects from "./components/Projects"
// import Parallax from "./components/Parallax"

const Home = () => {
  //  const imgWidth="200px"
  return (
    <>
   {/* <Header /> */}
<HeroSection    />
{/* <Parallax /> */}
<AboutMe /> 
<Projects />
<CompaniesProject />
    </>
  )
}

export default Home
