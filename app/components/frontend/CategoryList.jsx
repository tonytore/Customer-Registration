"use client"

import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'


const CategoryList = ({categories}) => {


  return (
    
        <div className='text-white flex flex-col'>
            <div className='flex justify-between items-center bg-slate-800 pr-6 pl-6  py-2 mt-3'>
                <h1 className=' text-2xl font-bold text-center py-2'> Shop By Categories Product</h1>
                <div className='bg-lime-500 px-4 py-2 my-3 hover:bg-lime-800 rounded-lg flex items-center space-x-3'>    
                      <Link href="">
                          See All
                       </Link>
                </div>
              </div>
                <CategoryCarousel  products={categories[0].products}/>
           
        </div>
       
  
   
  )
}

export default CategoryList
