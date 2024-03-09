"use client";

import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { Pencil, Trash } from "lucide-react";
import { useRouter,Link } from "next/navigation";

const DashboardTable = ({customer}) => {
    const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 10;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const lastIndex = startIndex + PAGE_SIZE;

  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const itemTotalIndex = data.length;
  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-slate-900 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              id
            </th>
            <th scope="col" class="px-6 py-3">
              First_name
            </th>
            <th scope="col" class="px-6 py-3">
              Last_name
            </th>
            <th scope="col" class="px-6 py-3">
              email
            </th>
            <th scope="col" class="px-6 py-3">
              gender
            </th>
            <th scope="col" class="px-6 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody>
         
             
              <tr class="bg-slate-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td class="w-4 p-4">{customer.id}</td>
                <th class="px-6 py-4">{customer.first_name}</th>
                <td class="px-6 py-4">{customer.last_name}</td>
                <td class="px-6 py-4">{customer.email}</td>
                <td class="px-6 py-4">{customer.phone}</td>
                <td class="px-6 py-4">
                    <span href className="flex gap-4">
             
             <Pencil href="/customers/update/id" width={15} height={15} className="hover:text-blue-400 cursor-pointer"/> 
         <Trash href="/customers/update/id" width={15} height={15} className="hover:text-red-400 cursor-pointer"/>
   
               
        
               </span>
               
            
                </td>
              </tr>
            
         

          
        </tbody>
      </table>
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span class="font-semibold text-slate-50 dark:text-white">{itemStartIndex}-{itemEndIndex}</span>{" "}
          of{" "}
          <span class="font-semibold text-slate-50 dark:text-white">{itemTotalIndex}</span>
        </span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              onClick={()=>setCurrentPage(currentPage-1)} 
              disabled={currentPage==1}
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            < button
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </button>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <button
               onClick={()=>setCurrentPage(currentPage+1)} 
               disabled={currentPage==totalPages}
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
      {/* <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-50 dark:text-white">{itemStartIndex}-{itemEndIndex}</span> of <span className="font-semibold text-gray-50 dark:text-white">{totalPages}</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 bg-slate-900">
            <li>
                <button 
                onClick={()=>setCurrentPage(currentPage-1)} 
                disabled={currentPage==1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
            </li>

                {
                    Array.from({length:totalPages},(_,i)=>{
                         return (
                            <li key={i}>
                            <button
                            onClick={setCurrentPage(i+1)}
                             className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i+1}</button>
                        </li>
                         )
                    })
                }
           
           
            <li>
        <button 
        onClick={()=>setCurrentPage(currentPage+1)} 
        disabled={currentPage == totalPages}
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
            </li>
        </ul>
    </nav> */}
    </div>
  );
};

export default DashboardTable;
