import React from 'react'
import Image from 'next/image';

function Portada(props) {
  return (
    <main>
        <Image 
        src= {props.image}
        alt='foto-de-portada'
        width={100}
        height={200}
        />
        <h2>Hola!</h2>
    </main>
  )
}

export default Portada