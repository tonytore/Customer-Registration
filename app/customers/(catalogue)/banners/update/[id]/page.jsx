"use client"

import CatHeading from '@/app/components/CatHeading'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdBrowserUpdated, MdDelete } from 'react-icons/md'

const UpdateBanner = () => {
  const router = useRouter()
  return (
    <div className='text-white py-[100px] '>
    
    <CatHeading icon={<MdBrowserUpdated />} title="Update Banner" href='customers/banners/' linkTitle='update'/>
</div>
  )
}

export default UpdateBanner
