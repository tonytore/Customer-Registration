"use client"

import CatHeading from '@/app/components/CatHeading'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdBrowserUpdated, MdDelete } from 'react-icons/md'

const UpdateCategory = () => {
  const router = useRouter()
  return (
    <div className='text-white py-[100px] '>
    
    <CatHeading icon={<MdBrowserUpdated />} title="Update Category" href='customers/category/' linkTitle='update'/>
</div>
  )
}

export default UpdateCategory
