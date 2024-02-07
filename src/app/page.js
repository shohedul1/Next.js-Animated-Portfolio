import Image from 'next/image';

const Homepage = () => {
  return (
    <div className='flex flex-col h-full lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-[80px]'>
     
      <div className='h-1/2  lg:h-full lg:w-1/2'>
      <Image src={'/hero.png'} alt='heroImage' width={400} height={400} className='object-contain'/>
      </div>
      {/* text constiner */}
      <div className='h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center'>
        {/* title */}
        <h1 className='text-4xl font-bold'>Craftiong Digital Experiences, Desining Tomorrow.</h1>
        <p className='md:text-xl'>
          Welcome ot my digital canvas, where innovation and creativity converge.With a keen eye for asesthetics and a matery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.
        </p>

        <div className='flex gap-4 w-full'>
          <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button>
          <button className='p-4 rounded-lg ring-1 ring-black '>Contact Me</button>
        </div>
      </div>


    </div>
  )
}

export default Homepage;