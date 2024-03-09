"use client"

import CatHeading from '@/app/components/CatHeading'
import Heading from '@/app/components/Heading'
import { ArrowLeft, ArrowLeftIcon, Pencil } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { TbFlagCancel } from 'react-icons/tb'
import TextInput from '../../../../components/formInput/textInput'
import SubmitButton from '../../../../components/formInput/submitButton'
import {makePostRequest} from '@/app/lib/apiRequest'
import { useForm } from 'react-hook-form'

import {generateCouponCode} from '@/app/lib/generateCouponCode'
import generateIsoFormattedDate from "../../../../lib/generateIsoFormattedDate"

const NewCoupons = () => {
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState("")
  const [isLoading , setLoading] = useState(false)
 // const [couponCode,setCouponCode] = useState(generateCoupon())
  const {
    register,
    reset,
    
    handleSubmit,
    formState:{errors}} = useForm()

   
  function redirect(){
      router.push('/customers/coupons')
    }
    
  async function onSubmit(data){
     
       const couponCode = generateCouponCode(data.title,data.expiryDate)
       const IsoFormattedDate = generateIsoFormattedDate(data.expiryDate)
        data.expiryDate = IsoFormattedDate;
        data.couponCode = couponCode;
         console.log(data);
         makePostRequest(
          setLoading,
          "api/coupons", // endpoint
          data,
          "Coupon",    // resourceName
          redirect
          )
         

  }

  return (
    <div className=' '>

    <div className='flex justify-between rounded-md border-b border-slate-800 items-center bg-slate-600 text-white py-6'>
    <Heading title={"Add Coupons"}/>
    <button className='flex gap-2 items-center text-2xl px-5 hover:text-lime-600' onClick={()=>router.back()}>
    <ArrowLeft/></button>
    </div>
   
   {/* id, title, slug ,description, image */}
   <form
   onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4  border 
     rounded-lg shadow my-12 sm:p-6 md:p-8 bg-slate-800
    border-gray-100 mx-auto"
    action="">

<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className='w-full'
          />
          
           <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            type='date'
            register={register}
            errors={errors}
            className='w-full'
          />
       
        </div>

     

       <SubmitButton isLoading={isLoading} buttonTitle='Create
          Coupon' loadingButtonTitle='Creating Coupon please wait...'/>


    
     
   </form>

</div>
  )
}

export default NewCoupons
