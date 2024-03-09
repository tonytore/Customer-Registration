import React from 'react'
import ProductForm from '../../../../components/ProductForm'
import { getData } from '@/app/lib/getData'

const NewProduct =  async() => {
  const categoryData  = await getData('categories')
  const userData  = await getData('users')
  const farmerData  = await userData.filter((user)=>user.role === "FARMER")

  
  const farmer = farmerData.map((farmer)=>{
    return{
      id:farmer.id,
      title:farmer.name
    }
  })

  const categories = categoryData.map((category)=>{
    return{
      id:category.id,
      title:category.title
    }
  })
 
 // console.log(categories);
//  // console.log(userData);
  return (
   <ProductForm categories={categories}  farmer={farmer} />
  )
}

export default NewProduct
