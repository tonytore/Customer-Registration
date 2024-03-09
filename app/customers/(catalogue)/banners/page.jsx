

import React from 'react'
import CatHeading from '../../../components/CatHeading'
import { FaPlus } from 'react-icons/fa'
import Heading from '@/app/components/Heading'
import Link from 'next/link'

import { Download, Search, Trash2 } from 'lucide-react'

const Banner = () => {
  return (
    <div className='text-white  py-[100px] '>


      {/* header */}
     <div className='flex border-b border-slate-50   justify-between  my-4 mx-auto px-7 py-7 rounded-sm'>
      
      <Heading title={"Banner"}/>
     <Link className='flex gap-2 items-center bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:ring-lime-600/50 px-5 rounded-md' 
     href="/customers/banners/new"><FaPlus/>
     <span>Add Banner</span></Link>
  
     </div>


     {/* table Actions */}
     {/* Export || Search || Bulk Delete */}

     <div className='flex bg-slate-600 my-4 mx-auto px-7 py-7 rounded-md'>
    
     <button className="relative mr-4 px-4 inline-flex gap-3 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
      rounded-lg group bg-slate-800 text-white dark:text-white dark:hover:text-gray-900
       border-lime-500 border focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">

        <Download width={15} height={15} /><span>Export</span>

</button>

<div className="flex-grow">
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative mt-1 py-3 flex items-center">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search width={15} height={15} />
            </div>
            <input type="text" 
            id="table-search" 
            className="block py-3 ps-10 text-sm text-gray-900 
            border border-gray-300 rounded-lg focus:ring-lime-500
             focus:border-lime-500 bg-slate-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white
               dark:focus:ring-lime-500 dark:focus:border-lime-500 w-full"
                placeholder="Search for items"/>
        </div>
    </div>

<button className="flex items-center space-x-2 ml-4 bg-red-600 text-white px-5 py-2 rounded-md">

<Trash2 />
<span className="">
  bulk delete
</span>
</button>
     
  {/* tabel */}
     </div>
    



    </div>
  )
}

export default Banner

