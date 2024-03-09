"use client"
import Image from 'next/image'
import React from 'react'
import { getData } from '@/app/lib/getData'

const CatCarouselList = ({categories}) => {

  return (
    <div className='py-2 px-4 overflow-y-scroll h-[300px] border-t border-slate-50'>

    {
      categories.map((cat,i)=>{
        return(
          <div key={i}>
      <div  className='flex items-center gap-5 mt-3  mb-2 hover:bg-slate-400 rounded-lg duration-500 transition-all'>
      <Image
      width={400}
      height={400}
      src={cat.imageUrl}
      alt='fruits'
      className='w-20 h-20 rounded-full'
      />
      <span className='text-xl'> {cat.title}</span>
    </div>
          </div>
        )
      })
    }
  
    
  </div>
  )
}

export default CatCarouselList
