import React, { useState } from 'react'

const Section1 = ({value}) => {
   
  return (
    <div>
       <div className='h-90 w-150 bg-white border-2 p-5 flex items-center justify-center' >
        <h1 className='text-7xl'>{value}</h1>
      </div>
    </div>
  )
}

export default Section1
