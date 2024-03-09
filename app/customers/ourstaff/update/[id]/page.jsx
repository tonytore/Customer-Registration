
import React from 'react'
import CustomerForm from '@/app/components/formInput/customerForm'
import  {getData} from '../../../lib/getData'

export default async function UpdateFarmer({params}) {
  const {id} = params
  //const customer = await getData(`customers/${id}`)
  

  return (
    <div className=''>
      <CustomerForm id={id}/>

    </div>
    
   
  )
}
