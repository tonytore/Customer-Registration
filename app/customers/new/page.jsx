"use client"

import CatHeading from '@/app/components/CatHeading'
import Heading from '@/app/components/Heading'
import { ArrowLeft, ArrowLeftIcon, Pencil, Plus } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { TbFlagCancel } from 'react-icons/tb'
import TextInput from '../../components/formInput/textInput'
import SubmitButton from '../../components/formInput/submitButton'
import TextareaInput from '../../components/formInput/textAreaInput'
import { useForm } from 'react-hook-form'
//  import generateSlug from '../../../../lib/generateSlug'


import {makePostRequest} from '@/app/lib/apiRequest'



const NewCustomer = () => {
 
  const router = useRouter()
  const [isLoading , setLoading] = useState(false)
  const {register,handleSubmit,formState:{errors}} = useForm()

function redirect(){
  router.push('/customers')
}

  async function onSubmit(data){
    // setIsLoading(true)

      console.log(data);

      makePostRequest(
       setLoading,
       "api/customers", // endpoint
       data,
       "customer",    // resourceName
        redirect,
       )
       

}
  return (
    <div className=' '>

    <div className='flex justify-between border-b border-slate-800 items-center text-white py-6'>
    <Heading title={"Add Customer"}/>
    <button className='flex gap-2 items-center text-slate-950 dark:text-slate-200 text-2xl px-5 hover:text-lime-500' onClick={()=>router.back()}>
    <ArrowLeft/></button>
    </div>
   
   {/* id, title, slug ,description, image */}
   <form
   onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4  border 
     rounded-lg shadow  sm:ml-64 sm:p-6 md:p-8  bg-slate-50 dark:bg-slate-800
    border-gray-100 mx-auto my-3"
    >

<div className="grid  gap-4   sm:grid-cols-2 sm:gap-6">
    
        <TextInput
            label="Customer First Name"
            name="firstname"
            register={register}
            errors={errors}
          />
           <TextInput
            label="Customer Last Name"
            name="lastname"
            register={register}
            errors={errors}
          />
           <TextInput
            label="Customer Email"
            name="email"
            register={register}
            errors={errors}
          />
           <TextInput
            label="Customer Phone"
            name="phone"
            type='tel'
            register={register}
            errors={errors}
          />
       
    
    </div>
   
    <SubmitButton 
    icon={<FaPlus/>}
     isLoading={isLoading} 
     buttonTitle='create Customer' 
     loadingButtonTitle='Creating Category please wait...'/>


         
      
   </form>

</div>
  )
}

export default NewCustomer
