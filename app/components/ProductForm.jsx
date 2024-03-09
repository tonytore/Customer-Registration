"use client"

import CatHeading from '@/app/components/CatHeading'
import Heading from '@/app/components/Heading'
import { ArrowLeft, ArrowLeftIcon, Pencil, Plus,X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { TbFlagCancel } from 'react-icons/tb'
import TextInput from '../components/formInput/textInput'
import SubmitButton from '../components/formInput/submitButton'
import TextareaInput from '../components/formInput/textAreaInput'
import ImageInput from '../components/formInput/imageInput'
import ArrayItemInput from '../components/formInput/ArrayItemInput'
import { useForm } from 'react-hook-form'
import {generateSlug} from '@/app/lib/generateSlug'
import {makePostRequest} from '@/app/lib/apiRequest'
import SelectInput from '../components/formInput/SelectInput'
import ToggleInput from '../components/formInput/ToggleInput'
import { generateUserCode } from '@/app/lib/generateUserCode'

const ProductForm = ({categories,farmer}) => {
//console.log(categories);

  const router = useRouter()
  const [imageUrl, setImageUrl] = useState("")
  const [tags,setTags] = useState(['tag1','tag2','tag3','tag4'])  
 
 // const [showItem,setShowItem] = useState(false)
  const [isLoading , setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors}} = useForm({
      defaultValues: {
        isActive: true,
        isWholeSale:false,
      },
    })
//Watch it to be change off and on
const isActive = watch("isActive");
const isWholeSale = watch("isWholeSale");

function redirect(){
  router.push('/customers/products')
}
    
  async function onSubmit(data){
       // setIsLoading(true)
      const slug =  generateSlug(data.title)
      const productCode = generateUserCode('TFL',data.title)
        data.slug = slug;
        data.Qty = 1
        data.productCode = productCode
        data.tags = tags
        data.imageUrl = imageUrl;
         console.log(data);
         makePostRequest(
          setLoading,
          "api/products", // endpoint
          data,
          "Product",    // resourceName
          redirect)
          setImageUrl("")
          setTags([])

  }

 

  return (
    <div className=' '>

    <div className='flex justify-between rounded-md border-b border-slate-800 items-center text-slate-500 bg-slate-50 dark:bg-slate-600 dark:text-white py-6'>
    <Heading title={"Add Product"}/>
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
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
            
          />
             <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className='w-full'
          />
             <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className='w-full'
          />
             <TextInput
            label="Product Price(Befor Discount)"
            type='number'
            name="price"
            register={register}
            errors={errors}
            className='w-full'
          />
             <TextInput
              label="Product Sale Price(Discounted)"
              type='number'
              name="sale"
            register={register}
            errors={errors}
            className='w-full'
          />
          <SelectInput
          label="Select Category"
          name="categoryId"
          register={register}
          errors={errors}
          className='w-full'
          options={categories}

          />
            <SelectInput
          label="Select farmer"
          name="farmerId"
          register={register}
          errors={errors}
          className='w-full'
          options={farmer}

          />
                <TextInput
            label="Product Stock"
            type='number'
            name="productStock"
            register={register}
            errors={errors}
            className='w-full'
          />
         

            <TextInput
              label="Unit of Measurement(eg Kilograms)"
              type='number'
              name="unit"
            register={register}
            errors={errors}
            className='w-full'
          />
          
          <ToggleInput
          label="Supports Wholesale Selling"
           name="isWholeSale"
           trueTitle="Supported"
           falseTitle="Draft"
           register={register}
        />

        {
          isWholeSale &&(
            <>
               <TextInput
              label="Wholesale Price"
              type='number'
              name="wholesalePrice"
            register={register}
            errors={errors}
            className='w-full'
          />

           <TextInput
              label="Minimum Wholesale Qty"
              type='number'
              name="wholesaleQty"
            register={register}
            errors={errors}
            className='w-full'
          />
            
            </>
          )
        }
     

          <ImageInput 
          label="Product Image"
          imageUrl={imageUrl}
          name="imageUrl"
          setImageUrl={setImageUrl}
          endpoint='productImageUploader'
          />
        {/* tags */}
        <ArrayItemInput setTags={setTags} tags={tags} title="Tag"/>
          

        <ToggleInput
          label="Publish Your Product"
           name="isActive"
           trueTitle="Active"
           falseTitle="Draft"
           register={register}
        />



           <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />

   
        </div>

     

       <SubmitButton isLoading={isLoading} buttonTitle='Create
          Product' loadingButtonTitle='Creating Category please wait...'/>


    
     
   </form>

</div>
  )
}

export default  ProductForm

