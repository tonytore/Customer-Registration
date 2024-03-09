"use client"


import Heading from '@/app/components/Heading'
import Link from 'next/link'
import { ArrowLeft, Pencil } from 'lucide-react'
import { useRouter } from 'next/navigation'
import TextInput from '@/app/components/formInput/textInput'
import SubmitButton from '@/app/components/formInput/submitButton'

import { useForm } from 'react-hook-form'
import {makePutRequest}  from '@/app/lib/apiRequest'
import { useState } from 'react'


const CustomerForm = ({id}) => {
   
  const {register,reset ,handleSubmit,formState:{errors}} = useForm({
    
  })
  const router = useRouter()
  const [isLoading , setLoading] = useState(false)

  function redirect(){
    router.push('/customers')
  }

  async function onSubmit(data){
    // const slug = generateSlug(data.title)
    // data.slug = slug
         data.id = id
         console.log("bf",data);
         makePutRequest(
          setLoading,
          `api/customers/${id}`, // endpoint
          data,
          "updated customer profile",    // resourceName
          reset,
          redirect(),
          )
          
  }

  return (
    <div>
    

  <div className='flex justify-between border-b border-slate-800 items-center text-white py-6'>

<Heading title={"Update Customer"}/>

<button className='flex gap-2 items-center text-2xl px-5 hover:text-lime-500' onClick={()=>router.back()}>
<ArrowLeft/></button>

</div>

   <div>
   <Heading title={"Personal Detail"}/>

   <form
onSubmit={handleSubmit(onSubmit)}
 className="w-full max-w-4xl p-4  border 
  rounded-lg shadow  sm:ml-64 sm:p-6 md:p-8 bg-slate-800
 border-gray-100 mx-auto my-3"
 action="">

<div className="grid  gap-4 md:grid-col-2  sm:grid-cols-2 sm:gap-6">
 
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
         register={register}
         errors={errors}
       />
   
 
 </div>
 
 <div className='flex gap-2 items-center justify-center'>
 <SubmitButton isLoading={isLoading} buttonTitle='Update
       Customer' loadingButtonTitle='Updating Customer please wait...'/>



 </div>
   
</form>

   </div>

     

    </div>
  )
}

export default CustomerForm
