import { Search } from 'lucide-react'
import React from 'react'

const SearchForm = () => {
  return (
<div className='flex space-x-5'>
      
   <div className="flex-grow">
        <label for="table-search" className="sr-only">Search</label>

        <div className="relative mt-1 py-3 flex items-center">

            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search width={15} height={15} />
            </div>

            <input type="text" 
            id="table-search" 
            className="block py-3 ps-10 text-sm  
            border border-gray-300 rounded-lg focus:ring-lime-500
             focus:border-lime-500  dark:border-gray-600
              dark:placeholder-gray-400 bg-slate-50 dark:bg-slate-700  dark:text-slate-50 text-slate-500
               dark:focus:ring-lime-500 dark:focus:border-lime-500 w-full"
                placeholder="Search for items"/>

        </div>
    </div>
    <button className="relative  mr-4 px-4 inline-flex gap-3 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
      rounded-lg group bg-slate-50 dark:bg-lime-800  dark:text-slate-50 text-slate-500 dark:hover:text-gray-900
       border-lime-500 border focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">

        <Search width={15} height={15} /><span >Search</span>

     </button>
 </div>
  )
}

export default SearchForm
