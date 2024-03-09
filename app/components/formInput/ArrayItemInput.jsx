"use client"

import React, { useState } from 'react'
import { Plus,X } from 'lucide-react'

const ArrayItemInput = ({setTags,tags=[],title}) => {
 
    const [tag,setTag] = useState("")
    const [showTagForm, setShowTagForm] = useState(false)

    function addTag(){
        if(!tag)return
        setTags([...tags,tag])
        setTag('')
      }
    
      function removeTag(index){
        const newTags = [...tags]
        newTags.splice(index,1)
        setTags(newTags)
      }
  return (
    <div className='sm:col-span-2'>

    {
     
     showTagForm?(

       <div className="flex items-center max-w-lg mx-auto">   
<label for="voice-search" className="sr-only">Search</label>
<div className="relative w-full">
   <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
       <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
       </svg>
   </div>
   <input 
   value={tag}
   onChange={((e)=>setTag(e.target.value))}
   type="text" 
   id="voice-search" 
   className="bg-gray-50 border border-gray-300
    text-gray-900 text-sm rounded-lg focus:ring-lime-500
     focus:border-lime-500 block w-full ps-10 p-2.5 
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
       dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
    placeholder={`Create ${title}`}  />

</div>
<button 
onClick={addTag}
type="button" 
className="shrink-0 inline-flex items-center
py-2 px-3 ms-2 text-sm font-medium
 text-white dark:bg-lime-700 rounded-lg border border-lime-700
  hover:bg-blue-800 focus:ring-4 focus:outline-none
   focus:ring-blue-300 bg-black dark:text-slate-50
    dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <Plus/>
   Add
</button>
<button onClick={()=>setShowTagForm(false)} className='shrink-0 ml-2 w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center'>
<X className='w-6 h-6 me-2 pl-2'/>
</button>
</div>
     ):(
         
         <button onClick={()=>setShowTagForm(true)} type='button' className='flex items-center space-x-2
         text-slate-800 dark:text-slate-300'>
           <Plus/>
           <span>Add {title}</span>
         </button>
     )
    }

    <div className='flex flex-wrap gap-4 mt-3'>
       {
         tags.map((item,i)=>{
           return (
             <div 
             className='dark:bg-slate-600 bg-slate-300 gap-2 flex  items-center justify-center px-4 py-2 rounded-lg' key={i}>
               <p>{item}</p>
              <button 
               onClick={()=>removeTag(i)}
              type='button' >
                <X  className='w-4 h-4 hover:text-red-500'/>
              </button>
              
              
              
             </div>
           )
         })
       }
    </div>
     

</div>
  )
}

export default ArrayItemInput
