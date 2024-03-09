"use client"

import React, { useState } from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import ArrayItemInput from '../components/formInput/ArrayItemInput'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { TbFlagCancel } from 'react-icons/tb'
import TextInput from '../components/formInput/textInput'
import SubmitButton from '../components/formInput/submitButton'
import TextareaInput from '../components/formInput/textAreaInput'
import { useForm } from 'react-hook-form'
//  import generateSlug from '../../../../lib/generateSlug'
import ToggleInput from '../components/formInput/ToggleInput'
import ImageInput from '../components/formInput/imageInput'
import {generateUserCode} from '../lib/generateUserCode'


import {makePostRequest} from '@/app/lib/apiRequest'
import { useRouter } from 'next/navigation'

const FarmerForm = ({user}) => {

    const router = useRouter()
    const [imageUrl, setImageUrl] = useState("")
    const [isLoading , setLoading] = useState(false)
    const [products,setProducts] = useState([])  
    const {
      register,
      handleSubmit,
      watch,
      formState:{errors}
    } = useForm({
        defaultValues: {
          isActive: true,
          ...user
        },
        
      })
  
      //Watch it to be change off and on
  const isActive = watch("isActive");
  
  function redirect(){
    router.push('/customers/farmers')
  }
  
    async function onSubmit(data){
      // setIsLoading(true)
      const  code = generateUserCode('TFF',data.name);
      data.code = code
      data.imageUrl = imageUrl;
      data.products = products
      data.userId = user.id

        console.log(data);
       
        makePostRequest(
         setLoading,
         "api/farmers", // endpoint
         data,
         "Farmer",    // resourceName
          redirect,
         )
         setImageUrl("")
         
  
  }
  return (
    <div>
      <form
   onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4  border 
     rounded-lg shadow  sm:ml-64 sm:p-6 md:p-8  bg-slate-50 dark:bg-slate-800
    border-gray-100 mx-auto my-3"
    >

<div className="grid  gap-4   sm:grid-cols-2 sm:gap-6">
    
        <TextInput
            label="Farmer's FullName"
            name="name"
            register={register}
            errors={errors}
            className='w-full'
            
          />
            <TextInput
            label="Farmer's Phone"
            name="phone"
            type='tel'
            register={register}
            errors={errors}
            className='w-full'
          
          />
           <TextInput
            label="Farmer's Email Address"
            name="email"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Farmer's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className='w-full'
          />
            <TextInput
            label="Farmer's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className='w-full'
          />
         
         <TextInput
            label="Farmer's Contact Person Phone"
            name="contactPersonPhone"
            type='tel'
            register={register}
            errors={errors}
            className='w-full'
          />
            <TextInput
            label="What is the Size of Your Land in Accres"
            name="landSize"
            type='number'
            register={register}
            errors={errors}
            className='w-full'
          />
               <TextInput
            label="What is your main Crop that you Cultivate"
            name="mainCrop"
            type='text'
            register={register}
            errors={errors}
            className='w-full'
          />

          <ArrayItemInput setTags={setProducts} tags={products} title="product"/>

           <ImageInput
          label="Farmer Profile Image"
          imageUrl={imageUrl}
          name="imageUrl"
          setImageUrl={setImageUrl}
          endpoint="farmerProfileUploader"
          />
          <TextareaInput
            label="Farmer's Payment Terms"
            name="terms"
            register={register}
            errors={errors}
            isRequired={false}
          />
          
            <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />

         

           <ToggleInput
          label="Publish your Farmer"
           name="isActive"
           trueTitle="Active"
           falseTitle="Draft"
           register={register}
        />
       
    
    </div>
   
    <SubmitButton 
    icon={<FaPlus/>}
     isLoading={isLoading} 
     buttonTitle='create farmers' 
     loadingButtonTitle='Creating Farmer please wait...'/>


         
      
   </form> 
    </div>
  )
}

export default FarmerForm
