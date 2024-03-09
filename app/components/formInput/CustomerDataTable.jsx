import { Pencil, Trash } from 'lucide-react'
import React from 'react'
import DeleteBtn from './DeletBtn'
import Link from 'next/link'
import { getData } from '@/app/lib/getData'

const CustomerDataTable = async() => {
    const customers = await getData('/customers');
  
  return (
  
       
    <>
         
    <div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-slate-900 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              First_name
            </th>
            <th scope="col" className="px-6 py-3">
              Last_name
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              phone
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>
        {
            customers.map((c)=>(
        <tbody key={c.id}>


            <tr className=" border-b bg-slate-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id={`${c.id}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-slate-50 dark:bg-slate-700 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"
                />
                <label for="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">{c.id}</td>
            <td className="w-4 p-4">{c.firstname}</td>
            <th className="px-6 py-4">{c.lastname}</th>
            <td className="px-6 py-4">{c.email}</td>
            <td className="px-6 py-4">{c.phone}</td>
            <td className="px-6 py-4">
                <div  className="flex gap-5">
                     <Link href={`/customers/update/${c.id}`}>
                        <Pencil  width={20} height={20} className="hover:text-blue-400 cursor-pointer"/> 
                     </Link>
                     <DeleteBtn id={c.id}/>
           </div>
           
        
            </td>
          </tr>
          
        </tbody> 
        
        ))}
           
      </table>
    </div>
 
 </>


 
  )
}

export default CustomerDataTable
