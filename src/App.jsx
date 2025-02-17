import React from "react"
import Navbar from "./Components/Navbar"
import Profile from "./Components/Profile"
import Services from "./Components/Services"
import About from "./Components/About"
import FoodMenu from "./Components/FoodMenu"
import Contact  from "./Components/Contact"
import OurMembers from "./Components/OurMembers"
import Footer from "./Components/Footer"
import Testimonial from "./Components/Testimonial"

function App() {

  return (
    <>
      <div>
        <Navbar />

        <Profile />

        <Services />

        <About />

        <FoodMenu />

        <Contact />

        <OurMembers />

        <Testimonial />

        <Footer />

      </div>
    </>
  )
}

export default App
