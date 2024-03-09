import React from 'react'
import FarmerForm from '../../../components/FarmerForm'
import { getData } from '@/app/lib/getData';

export const page = async({params:{id}}) => {

  const user = await getData(`users/${id}`);
   
  return (
    <div className=''>
      <h2 className='m-6 flex justify-center'>Hello 
      <span className='text-red-500 text-2xl px-3'>
        {user?.name} </span>  tell me more</h2>
     <div className='flex justify-center mr-96'>
     <FarmerForm user={user}/>
      </div> 
    </div>
  )
}

export default page
