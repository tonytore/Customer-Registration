import Image from 'next/image'
import React from 'react'
import img from '../../../public/1.png'
import Link from 'next/link'
import { ShoppingCart } from "lucide-react";

const ProductDetail = ({product}) => {
  return (
  
      

<div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
    <div>
        <Image class="p-8 rounded-t-lg h-56 w-full rounded-lg overflow-hidden object-fit" src={product.imageUrl} width={400} height={400} alt={product.title} />
    </div>
    <div class="px-5 pb-5">
        <Link href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </Link>
        
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          
           <Link href={`/products/${product.slug}`} class="text-white bg-blue-700 hover:bg-blue-800 
           focus:ring-4 focus:outline-nonefocus:ring-blue-300 font-medium rounded-lg 
           text-sm px-5 text-center dark:bg-lime-600
              dark:hover:bg-lime-700 dark:focus:ring-lime-800 flex gap-3 py-3">
                <ShoppingCart/> Add to cart</Link>
          
        </div>
    </div>
</div>

 
  )
}

export default ProductDetail
