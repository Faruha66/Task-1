import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About'
import Contact from './Components/Contact/Contacct'
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'
import Layout from "./Components/Layout/Layout"
import Default from './Components/Default/Default';



import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

let x = createBrowserRouter([
  {path : ""  , element : <Layout/>, children : [
    {path : "about" , element : <About/> },
    {path : "portfolio" , element : <Portfolio/>},
    {path : "contact" , element : <Contact/>},
    {index:true , element : <Default/>}
  ]} 
])



function App() {
  

  return (
    <>
      <RouterProvider router={x}/>
    </>
  )
}

export default App
