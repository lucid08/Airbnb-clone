import Image from 'next/image'
import React from 'react'

const PropertyDetailPage = () => {
  return (
    <div className="max-w-[1500] mx-auto px-6">
         <div className='w-full h-[64vh] overflow-hidden relative'>
         <Image
          fill
          src="/beachhouse.jpg"
          alt=""
          className="object-cover h-full w-full"/>
         </div>
         <div className=''>

         </div>
    </div>
  )
}

export default PropertyDetailPage