// app/components/ThemeSwitcher.tsx
"use client";


import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import React from 'react'

 const ThemeSwitcherBtn = () => {
 
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  console.log(theme);
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if(!mounted) return null
  
    return (
      <button className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100
      duration-200 bg-slate-50 dark:bg-lime-500`} onClick={()=>{ 
        setTheme(theme == "dark" ? "light" : "dark" )
       
        }}>
          {theme === "light" ? <Moon/> : <Sun/>}
      </button>
    
    )
  
}

export default ThemeSwitcherBtn
