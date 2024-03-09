import React from 'react'
import BreadCrumb from '../../../components/frontend/BreadCrumb'
import ProductDetail from '../../../components/frontend/ProductDetail'
import { Car, DollarSign, FileWarning, HomeIcon, Locate, LocateIcon, Minus, Plus, Repeat, Save, Send, ShoppingCart, Stethoscope, Sun } from 'lucide-react'
import apple from '@/public/apple.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import { getData } from '@/app/lib/getData'
import img from '../../../../public/coffee.jpeg'
import CategoryCarousel from '@/app/components/frontend/CategoryCarousel'


const ProductDetailPage = async({params:{slug}}) => {
  //  const categories = await getData(`categories/${slug}`)
 
  return (
    <div className='my-11'>
    <div className='ml-5'>
    <BreadCrumb title="Product"/>
    </div>

    <div className='grid grid-cols-12 w-full mt-4'>

    <div className=" sm:col-span-3 bg-white text-center rounded-lg shadow dark:bg-slate-950 dark:border-gray-700">
       <div className='flex flex-col gap-1'>
      
        <Image className="ml-9 overflow-hidden rounded-lg h-96 w-96  object-fit" 
        src={apple} width={400} height={400} alt="alt" />
       
       <div className='flex gap-2 p-4 '>
        
            <div className='bg-gray-200 p-1 rounded-xl'>
            <Image class="p-1 rounded-t-lg h-18 w-full rounded-lg overflow-hidden object-fit" 
            src={apple} width={100} height={100} alt="alt" />
           </div>
           <div className='bg-gray-200 p-1 rounded-xl'>
            <Image class="p-1 rounded-t-lg h-18 w-full rounded-lg overflow-hidden object-fit" 
            src={apple} width={100} height={100} alt="alt" />
           </div>
           <div className='bg-gray-200 p-1 rounded-xl'>
            <Image class="p-1 rounded-t-lg h-18 w-full rounded-lg overflow-hidden object-fit" 
            src={apple} width={100} height={100} alt="alt" />
           </div>
           <div className='bg-gray-200 p-1 rounded-xl'>
            <Image class="p-1 rounded-t-lg h-18 w-full rounded-lg overflow-hidden object-fit" 
            src={apple} width={100} height={100} alt="alt" />
           </div>
         
          
            
            
          
       </div>
       </div>
</div>


    <div className=" sm:col-span-6  bg-white rounded-lg shadow dark:bg-slate-950 dark:border-gray-700">
       <div className='p-12'>
        <div className='flex justify-between'>
        <h1 className='text-2xl mb-2'>Calabaze Squash</h1>
        <Link href="#" className='text-orange-500'><Stethoscope/></Link>
        </div>
      
      <p className='pb-3 border-b-2'>
      Most fresh vegetables are low in calories and have a water content in excess of 70 
        percent, with only about 3.5 percent protein and less than 1 percent fat. .
        .. The root vegetables include beets, carrots, radishes, sweet potatoes,
      </p>
     
      
       <div className='pb-3 border-b-2 flex gap-5 items-center'>
       <p className='text-gray-400 p-3 text-2xl'>SKU : 345632</p>
        <p className=' mb-5 mt-6 bg-green-300 w-32 ml-2 rounded-full pl-3  px-4 py-4 text-lg font-semibold text-black'>Stock : <span className='text-red-800'>582</span></p>
       </div>
        

         <div className=' flex justify-between items-center p-3'>
         <p className='mb-2 text-2xl'> $98.03  <span className='text-md underline pl-4 text-gray-400'>$55</span></p>
          <div className='flex gap-2'>
              <Save/>
              <p>Save 50% right now</p>
          </div>
          </div>

     
       
       </div>
   

      <div className='flex mb-4 justify-between ml-9 mr-7 gap-4'>
      <div className='flex w-56 px-4 py-2 bg-white text-center items-center rounded-lg text-black'>
           <button className='text-xl border-r-2 w-9'><Minus/></button>
           <div className='flex-grow text-xl'>1</div>
           <button className='text-xl w-9 border-l-2'><Plus/></button>
        </div>
        <button className='px-6 py-2 flex gap-3 rounded-lg bg-lime-600 text-white'>
          <ShoppingCart/>
          Add to Cart
          </button>
 
    </div>
</div>



<div className="col-span-3 p-5 flex flex-col gap-6 bg-white  rounded-lg shadow dark:bg-slate-950  dark:border-gray-700">
  <div className='uppercase w-full dark:bg-slate-700 text-center bg-slate-50  py-4'>
    Delivery and Returns
  </div>
       <button className='px-6 py-3 flex justify-between rounded-lg hover:bg-orange-300 bg-orange-400'>
          
           <span className='text-slate-50 rounded-xl'>T Express</span><Send/>
       </button>
      <h2 className='border-b-2 p-2'>Eligible for Free Delivery: <Link href="#" className='text-blue-600'>View Details</Link> </h2>
      
      <div className='flex flex-col'>
        <h2>Choose your Location</h2>
        
         <select className='dark:bg-slate-800 mb-3 mt-4 rounded-lg' name="chicago" id="">
          <option value="a">UnitedState</option>
          <option value="a">Chicago</option>
          <option value="a">Seatle</option>
          <option value="a">Atlanta</option>
          </select>
         
         <select className='dark:bg-slate-800 mb-3  rounded-lg' name="chicago" id="">
          <option value="a">Rusia</option>
          <option value="a">German</option>
          <option value="a">Ukrain</option>
          <option value="a">France</option>
          </select>
          
         <select className='dark:bg-slate-800 mb-3  rounded-lg' name="chicago" id="">
          <option value="a">Ethiopia</option>
          <option value="a">Gana</option>
          <option value="a">Morroca</option>
          <option value="a">Algeria</option>
          </select>
      </div>
    
        
</div>


    
    </div>
    <div className='text-white flex flex-col'>
            <div className='flex flex-col bg-slate-800 pr-6 pl-6  py-2 mt-3'>
                <h1 className=' text-2xl font-bold py-2'> Similar Product</h1>
               {/* <CategoryCarousel  products={categories}/> */}
               <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
    <div>
        <Image className="p-8 rounded-t-lg h-56 w-full rounded-lg overflow-hidden object-fit" src={img} width={400} height={400} alt="alt" />
    </div>
    <div className="px-5 pb-5">
        <Link href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">title</h5>
        </Link>
    </div>
</div>
              </div>
                
           
        </div>
   
    </div>
  )
}

export default ProductDetailPage
