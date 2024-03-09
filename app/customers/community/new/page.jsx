import React from 'react'
import TrainingForm from '../../../components/TrainingForm'
import { getData } from '@/app/lib/getData'

const NewTraining = async() => {
  const categoryData  = await getData('categories')
 

  
  const categories = categoryData.map((category)=>{
    return{
      id:category.id,
      title:category.title
    }
  })
//console.log(categories);
  return (
    <div>
      <TrainingForm categories={categories}/>
    </div>
  )
}

export default NewTraining
