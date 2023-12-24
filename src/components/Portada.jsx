import React from 'react'
import Image from 'next/image';

function Portada(props) {
  return (
    <main className='w-full  h-fit relative'>
        <Image
        src= {props.image}
        alt='foto-de-portada'
        width={900}
        height={700}
        className='max-h-96 w-full brightness-50'
        />
        <div className='absolute top-1/2 text-center text-9xl text-white tracking-tighter'>

        <h1 className='mb-3'>
          {props.tittle}
        </h1>
        <p className='text-xl tracking-normal'>
          {props.description}
        </p>
        </div>
    </main>
  )
}

export default Portada