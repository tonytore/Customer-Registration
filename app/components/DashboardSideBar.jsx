"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { LuSlack } from 'react-icons/lu'

const DashboardSideBar = ({data,showSideBar,setShowSideBar}) => {
  const {title,href,textColor,icon} = data
 const Icon = icon
 const pathname = usePathname()
  return (   
        <Link 
        onClick={()=>setShowSideBar(!showSideBar)}
        href={href}
        className={`${pathname===href?'px-5 border-l-4  flex items-center space-x-3 py-2 text-green-600  border-teal-500':"px-5 flex items-center text-slate-500 dark:text-slate-50 space-x-3 py-2  "}`}>
           <Icon/> 
          <span>{title}</span>
         </Link>
   
  )
}

export default DashboardSideBar
