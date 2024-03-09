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
import TextInput from '../../../components/formInput/textInput'
import SubmitButton from '../../../components/formInput/submitButton'
import TextareaInput from '../../../components/formInput/textAreaInput'
import { useForm } from 'react-hook-form'
//  import generateSlug from '../../../../lib/generateSlug'
import ToggleInput from '../../../components/formInput/ToggleInput'


import {makePostRequest} from '@/app/lib/apiRequest'



const NewStaff = () => {
 
  const router = useRouter()
  const [isLoading , setLoading] = useState(false)
  const {register,
    handleSubmit,
    watch,
    formState:{errors}
  } = useForm({
      defaultValues: {
        isActive: true,
      },
    })

  //Watch it to be change off and on
  const isActive = watch("isActive");

function redirect(){
  router.push('/customers/ourstaff')
}

  async function onSubmit(data){
    // setIsLoading(true)

      console.log(data);

      makePostRequest(
       setLoading,
       "api/staffs", // endpoint
       data,
       "Staff",    // resourceName
        redirect,
       )
       

}
  return (
    <div className=' '>

    <div className='flex justify-between border-b border-slate-800 items-center text-white py-6'>
    <Heading title={"Add Farmer"}/>
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
            label="Staff's FullName"
            name="fullname"
            register={register}
            errors={errors}
          />
                 <TextInput
            label="NIN (Id Number)"
            name="nin"
            //type='number'
            register={register}
            errors={errors}
            className='w-full'
          />
           <TextInput
            label="Date of Birth"
            name="dob"
            type='date'
            register={register}
            errors={errors}
            className='w-full'
          />
              <TextInput
            label="Staff's Email"
            name="email"
            type='email'
            register={register}
            errors={errors}
            className='w-full'
          />
               <TextInput
            label="Staff's Password"
            name="password"
            type='password'
            register={register}
            errors={errors}
            className='w-full'
          />
               <TextInput
            label="Staff's Phone"
            name="phone"
            type='tel'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Staff's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className='w-full'
          />
           
            <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
           <ToggleInput
          label="Publish your Staff"
           name="isActive"
           trueTitle="Active"
           falseTitle="Draft"
           register={register}
        />
       
    
    </div>
   
    <SubmitButton 
    icon={<FaPlus/>}
     isLoading={isLoading} 
     buttonTitle='create staff' 
     loadingButtonTitle='Creating staff please wait...'/>


         
      
   </form>

</div>
  )
}

export default  NewStaff

