import React from 'react'
import Navbar from '../components/frontend/Navbar'
import Footer from '../components/frontend/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
    <div className='mx-auto max-w-9x'>
      
    {children}
   
    </div>
    <Footer/>
    </div>
  )
}
