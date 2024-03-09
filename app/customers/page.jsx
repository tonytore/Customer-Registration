

import { FaPlus } from 'react-icons/fa'
import Heading from '@/app/components/Heading'
import Link from 'next/link'
import { Download, Pencil, Search, Trash2 } from 'lucide-react'
import CustomerDataTable from '../components/formInput/CustomerDataTable'

const Customer = async() => {

  return (
    <div className='text-white w-full h-full  py-[100px] '>


      {/* header */}
     <div className='flex border-b border-slate-50   justify-between  my-4 mx-auto px-7 py-7 rounded-sm'>
      
      <Heading title={"Customer"}/>
     <Link className='flex gap-2 items-center
      dark:bg-lime-600 bg-black text-slate-50 dark:text-slate-700 hover:bg-gray-600/90 
      focus:ring-4 focus:ring-black-600/50 
      px-5 rounded-md' href="/customers/new">
        <FaPlus/>
     <span>Add Customer</span>
     </Link>
  
     </div>


     {/* table Actions */}
     {/* Export || Search || Bulk Delete */}

     <div className='flex bg-slate-50 borde-2 border-lime-600 dark:bg-slate-600 my-4 mx-auto px-7 py-7 rounded-md'>
    
     <button className="relative mr-4 px-4 inline-flex gap-3 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
      rounded-lg group bg-slate-50 dark:bg-slate-800  dark:text-slate-50 text-slate-500 dark:hover:text-gray-900
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
            className="block py-3 ps-10 text-sm  
            border border-gray-300 rounded-lg focus:ring-lime-500
             focus:border-lime-500  dark:border-gray-600
              dark:placeholder-gray-400 bg-slate-50 dark:bg-slate-700  dark:text-slate-50 text-slate-500
               dark:focus:ring-lime-500 dark:focus:border-lime-500 w-full"
                placeholder="Search for items"/>
        </div>
    </div>

<button className="flex items-center space-x-2 ml-4 bg-red-600 text-white px-5 py-1 rounded-md">

<Trash2 />
<span className="">
  bulk delete
</span>
</button>
    
 
     </div>
    
 {/* tabel */}
 
 <CustomerDataTable/>
                               
 
    </div>
  )
}

export default Customer

