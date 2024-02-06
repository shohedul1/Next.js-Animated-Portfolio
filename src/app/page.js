import Image from 'next/image';
import React from 'react'

const Homepage = () => {
  return (
    <div className='flex flex-col h-full'>
      {/* image container */}
      <div className='h-1/2 relative '>
        <Image src={'/hero.jpg'} alt='heroImage' fill className='object-contain' />
      </div>
      {/* text constiner */}
      <div className='h-1/2'>
        helloasfasd

      </div>


    </div>
  )
}

export default Homepage;