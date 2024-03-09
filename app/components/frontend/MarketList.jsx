"use client"

import React from 'react'
import MarketCarouse from './MarketCarouse'


const MarketList = ({markets}) => {
 
  return (
    <div className='mt-4'>
      <h1 className='uppercase text-2xl'>Market List</h1>
     <div className='bg-lime-800 rounded-lg'>
     <h2 className="text-center text-2xl font-semibold py-4">Shop By Market</h2>
      <MarketCarouse key={markets.id} markets={markets}/>
     </div>
    </div>
  )
}

export default MarketList
