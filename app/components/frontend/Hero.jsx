"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../../public/enjory.jpeg'
import img1 from '../../../public/chips.jpeg'
import img2 from '../../../public/burger.jpeg'
import img3 from '../../../public/download.jpeg'
import img4 from '../../../public/pasta.jpeg'
import advert from '../../../public/advert.gif'
import {HeroCarousel} from './HeroCarousel'
import { DollarSign, DownloadCloud, HelpCircle } from 'lucide-react'
import { getData } from '@/app/lib/getData'
import CatCarouselList from './CatCarouselList'

export const Hero = ({categories,banners}) => {
 

  // const category = [
  //   {
  //     label:"Fruits",
  //     img: img
  //   },
  //   {
  //     label:"Vegitable",
  //     img: img1
  //   },
  //   {
  //     label:"pasta",
  //     img:img4
  //   },
  //   {
  //     label:"Burger",
  //     img: img2
  //   },
  //   {
  //     label:"Enjory",
  //     img: img
  //   },
  //   {
  //     label:"food",
  //     img: img3
  //   },

  // ]
  const setting = [
    {
      icon:<HelpCircle/>,
      label: "Help Center",
      desc:"Guide to customer care",
      href:"/register-farmer"
    },
    {
      icon:<DownloadCloud/>,
      label: "Easy Return",
      desc:"Quick return",
      href:"/register-farmer"
    },
    {
      icon:<DollarSign/>,
      label: "Sell On Tonytor",
      desc:"Million of visitor"
    },
  

  ]
  return (
    <div className='grid grid-cols-12 gap-8 mt-5'>
      <div className='sm:col-span-3 ml-5 dark:bg-gray-800 bg-white rounded-lg shadow-lg'>
        
        <h2 className='py-3 px-6 dark:bg-slate-700 dark:text-slate-50  text-slate-800 text-xl'>Shop By Category({categories.length}) </h2>
      <CatCarouselList categories={categories}/>

      </div>
      <div className='sm:col-span-7 col-span-full mr-2 bg-gray-400 dark:bg-gray-80 rounded-lg  shadow-lg'>
         
      <HeroCarousel banners={banners}/>
      </div>

      <div className='flex flex-col col-span-2 gap-6 sm:block'>

      <div className=' mr-5 dark:bg-gray-800 bg-white rounded-lg overflow-hidden shadow-lg'>
        
        <div className='py-2 px-4 border-t border-slate-50'>

          {
            setting.map((sett,i)=>{
              
              return(
                <div key={i}>
                <div   className='mb-3'>
                  <a href={sett.href}  className='flex items-center gap-5'>  
                   <div className='text-lime-500'>{sett.icon}</div>
                    <div className='flex flex-col'>
                       <h1 className='text-lg uppercase'>{sett.label}</h1>
                      <h2 className='text-sm mb-3'>{sett.desc}</h2>
                    </div>
                </a>
              
             </div>
           
             </div>
         
              )
            })
          }
          <Image
             src={advert}
             alt='advert'
             width={500}
             height={500}/>
          
        </div>

      </div>

     
      </div>
     
    </div>
  )
}

export default Hero
