// import React from 'react'

// import Header from "../Component/Header"
// import Footer from "../Component/Footer"
import AccessibilitySidebar from "../Component/AccessibilitySidebar"
import AboutMe from "./components/aboutme/AboutMe"
import CompaniesProject from "./components/CompaniesProject"
import HeroSection from "./components/HeroSection"
// import Projects from "./components/Projects"
import Services from "./components/Services"
// import Parallax from "./components/Parallax"

const Home = () => {
  //  const imgWidth="200px"
  return (
    <>
   {/* <Header /> */}
<HeroSection    />
<AccessibilitySidebar />
{/* <Parallax /> */}
<AboutMe /> 
<Services />
<CompaniesProject />
{/* <Footer /> */}

    
    </>
  )
}

export default Home