import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/bootstrap.css'
import './css/styles.css'
import Header from './components/Header/Header'
import Section from  './components/section/Section'
import Section1 from './components/sectionOne/Section1'
import Section2 from './components/sectionTwo/Section2'
import Section3 from './components/sectionThree/Section3'
import Section4 from './components/sectionFour/Section4'
import Section5 from './components/sectionFive/Section5'
import Section6 from './components/sectionSix/Section6'
import Footer from './components/Footer/Footer'
function App() {
   const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <Section/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </>
  )
}
export default App
