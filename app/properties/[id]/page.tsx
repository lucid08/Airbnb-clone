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
         <div className='mt-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
            <div className='py-6 pr-6 col-span-3'>
                <h1 className='mb-4 text-4xl'>Property name</h1>
                <span className='mb-6 block text-lg text-gray-500'>4 gutes - 2 bedrooms - something</span>
            </div>
            <div className='py-6 col-span-2'>
                <h2 className='mb-4 text-lg'>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lectus id ipsum viverra pharetra. Nulla facilisi. In hac habitasse platea dictumst.</p>
            
            </div>
         </div>
         <hr/>
         <div className='py-6 flex items-center space-x-4'>
            <Image
            src='/profile.jpeg'
            alt=''
            width={50}
            height={50}
            className='rounded-full'
            />
            <p>Thy name is bond james bond</p>
         </div>
         <hr/>

         <p className='mt-6 text-lg'>dsfusoieaee jirhwwwwwwww vwdixjiwgmtug cgnwgywuycuis</p>

    </div>
  )
}

export default PropertyDetailPage