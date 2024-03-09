"use client"

import CatHeading from '@/app/components/CatHeading'
import Heading from '@/app/components/Heading'
import { ArrowLeft, ArrowLeftIcon, Pencil, Plus } from 'lucide-react'

import FarmerForm from '../../../components/FarmerForm'




const NewFarmer =  () => {
 
 

  return (
    <div className=' '>

    <div className='flex justify-between border-b border-slate-800 items-center text-white py-6'>
    <Heading title="Add Farmer"/>
    <button className='flex gap-2 items-center text-slate-950 dark:text-slate-200 text-2xl px-5 hover:text-lime-500' onClick={()=>router.back()}>
    <ArrowLeft/></button>
    </div>
   
   {/* id, title, slug ,description, image */}
  <FarmerForm/>

</div>
  )
}

export default NewFarmer
