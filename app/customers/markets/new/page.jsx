import React from 'react'
import MarketForm from '../../../components/MarketForm'
import { useRouter } from 'next/navigation'
import { getData } from '@/app/lib/getData'

const NewMarket = async() => {
  const categoryData = await getData('categories')

  const categories = categoryData.map((category)=>{
    return{
      id:category.id,
      title:category.title
    }
  })
  

  return (
    <div>
  
      <MarketForm categories={categories}/>
    </div>
    
  )
}

export default NewMarket
