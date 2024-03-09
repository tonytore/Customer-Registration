import BreadCrumb from '@/app/components/frontend/BreadCrumb'
import { Delete, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import img from '@/public/burger.jpeg'

const cart = () => {
  return (
    <div className='py-4'>
      <div className='ml-5'>
    <BreadCrumb title="Cart"/>
  <div>
    
  </div>
    <div className='grid grid-cols-12 p-4'>
   
    <div className='grid col-span-8 gap-2 py-3'>
        <h2 className='text-2xl'>Your cart</h2>
        <div className='flex  max-w-6xl justify-between border-b border-slate-400 text-gray-500'>
          <h1 className='uppercase'>Product</h1>
          <h1 className='uppercase'>Quantity</h1>
          <h1 className='uppercase'>Price</h1>
          <h1></h1>
        </div>
        <div className='flex justify-between items-center max-w-6xl border-b border-slate-400 text-slate-800 '>
            <div>
                 <div className='bg-slate-200 p-2 rounded-lg flex justify-center items-center'>
                 <Image src={img} className='w-20 h-20 overflow-hidden rounded-lg' alt='productImage'/>
                 </div>
                 <div>
                 <h2 className='text-slate-50'>Chicken Bruger</h2>
                 <h3 className='text-slate-50'>Special</h3>
                 </div>
                 
                 </div>
                 <div>
            <div className='flex w-36 py-2 rounded-lg bg-slate-50'>
           <button className='text-xl border-r-2 px-2'><Minus/></button>
           <div className='flex-grow text-xl text-center'>1</div>
           <button className='text-xl border-l-2 px-2'><Plus/></button>
        </div>
            </div>
          
            <div className='text-white'>$259.00</div>
            <Delete className='text-red-700'/>
        </div>
        
      

    </div>


    <div className='bg-slate-950 p-5  rounded-lg grid col-span-4'>
       <h2 className='font-bold p-3 text-2xl text-slate-100'>Cart total</h2>
       <div className='flex justify-between text-slate-100 pb-1 border-b border-slate-600'>
          <p>Subtotal</p>
          <p>$559</p>
       </div>
       <div className='flex text-slate-100 justify-between py-1'>
          <p>Tax</p>
          <p>$0</p>
       </div>
       <div className='flex text-slate-200 justify-between py-1'>
          <p>Shipping in Gotera</p>
          <p>$10</p>
       </div>
       <h3 className='border-b text-slate-200 text-sm py-2 border-slate-600 '>
        We only charge for shipping when you have over 2kg
       </h3>

       <div className='flex py-2 text-slate-200 justify-between text-lg'>
          <p>Total</p>
          <p>$559</p>
       </div>
       
       <button className='px-4 py-3 bg-gray-50 text-gray-500 rounded-lg'>Continue to payment</button>

    </div>




    </div>

    <div className='flex gap-3 p-3'>
        <input type="text" className='py-4 px-5 rounded-lg' placeholder='Enter coupon code' />
        <button className='bg-black text-white px-4 py-4 rounded-md'>Apply coupone</button>

    </div>

    </div>
    </div>
  )
}

export default cart
                 