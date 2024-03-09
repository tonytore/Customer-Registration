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
import TextareaInput from '../../../../components/formInput/textAreaInput'
import ImageInput from '../../../../components/formInput/imageInput'
import { useForm } from 'react-hook-form'
import {generateSlug} from '@/app/lib/generateSlug'
import {makePostRequest} from '@/app/lib/apiRequest'
import SelectInput from '../../../../components/formInput/SelectInput'
import ToggleInput from '../../../../components/formInput/ToggleInput'

const NewCategory = () => {
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState("")
  // const markets = [
  // {
  //   id:1,
  //   title:"A Market"
  // },
  // {
  //   id:2,
  //   title:"B Market"
  // },
  // {
  //   id:3,
  //   title:"C Market"
  // },
  // {
  //   id:4,
  //   title:"D Market"
  // },
  // ]
  const [isLoading , setLoading] = useState(false)
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState:{errors}
  } = useForm({
      defaultValues: {
        isActive: true,
      },
    })

    //Watch it to be change off and on
const isActive = watch("isActive");

function redirect(){
  router.push('/customers/category')
}
    
  async function onSubmit(data){
       // setIsLoading(true)
      const slug =  generateSlug(data.title)
        data.slug = slug;
        data.imageUrl = imageUrl;
         console.log(data);
         makePostRequest(
          setLoading,
          "api/categories", // endpoint
          data,
          "Category",    // resourceName
          redirect)
          setImageUrl("")

  }

  return (
    <div className=' '>

    <div className='flex justify-between rounded-md border-b border-slate-800 items-center text-slate-500 bg-slate-50 dark:bg-slate-600 dark:text-white py-6'>
    <Heading title={"Add Category"}/>
    <button className='flex gap-2 items-center text-2xl px-5 hover:text-lime-600' onClick={()=>router.back()}>
    <ArrowLeft/></button>
    </div>
   
   {/* id, title, slug ,description, image */}
   <form
   onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4  border 
     rounded-lg shadow my-12 sm:p-6 md:p-8 dark:bg-slate-800 bg-slate-50
     text-slate-500 dark:text-slate-50
    border-gray-100 mx-auto"
    action="">

<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
           
          />
          {/* <SelectInput
          label="Select Market"
          name="marketIds"
          register={register}
          errors={errors}
          className='w-full'
          options={markets}

          /> */}
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput 
          label="Category Image"
          imageUrl={imageUrl}
          name="imageUrl"
          setImageUrl={setImageUrl}
          endpoint="categoryImageUploader"
          />
              <ToggleInput
          label="Publish your Category"
           name="isActive"
           trueTitle="Active"
           falseTitle="Draft"
           register={register}
        />
        </div>

     

       <SubmitButton isLoading={isLoading} buttonTitle='Create
          Category' loadingButtonTitle='Creating Category please wait...'/>


    
     
   </form>

</div>
  )
}

export default NewCategory
