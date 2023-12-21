import React from 'react'
import Image from 'next/image';

function Portada(props) {
  return (
    <main>
        <Image
        src= {props.image}
        alt='foto-de-portada'
        width={1440}
        height={500}
        />
        <h1>
          {props.tittle}
        </h1>
        <p>
          {props.description}
        </p>
    </main>
  )
}

export default Portada