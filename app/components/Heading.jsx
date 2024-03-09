import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='text-2xl text-slate-500 font-semibold px-4 py-2  flex items-center space-x-3'>
      {title}
    </div>
  )
}

export default Heading
