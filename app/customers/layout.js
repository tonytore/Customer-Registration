"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import Providers from "../context/Providers";





export default function Layout({
  children
}) {

const [showSideBar,setShowSideBar] = useState(false)


  return (
    
  
       <div className='flex'>
  
       <div className="h-full">
       <SidebarContainer showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
       </div>
          
       <div className='lg:ml-64 bg-blue-400 flex-grow h-screen '>
           <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
         <main className='p-8 py-24 h-full min-w-full bg-slate-50 dark:bg-slate-900 text-slate-900  dark:text-slate-50 '> 
           
              {children}
            
            
           </main>
       </div>
    </div>
        
      
    
    
  )
}












  