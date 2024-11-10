import React from 'react'

const Background = () => {
  return (
    <>
    <div className='w-full h-[90%]  sm:h-screen fixed z-[2] '>

       <div className=' absolute top-[5%] w-full py-10 flex justify-center text-zinc-600/25 text-xl'>Documents</div>
       <h1 className='absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 text-[10vw] text-zinc-900/30 leading-tight tracking-tighter font-semibold'>Ceep-Docs.</h1>
    </div>
    </>
  )
}

export default Background
