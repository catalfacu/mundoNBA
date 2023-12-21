import React from 'react'
import Portada from '@/components/Portada';

function Teams() {
const img = 'https://res.cloudinary.com/dmgkhl6ys/image/upload/v1703029871/mundoNBA/35bdee9cf59f5ff5c450477cbc08fd52-transformed_vekray.jpg'
const description = 'Información acerca de cada equipo de la liga';

  return (
    <>
      <header>
        <Portada image={img} tittle='EQUIPOS' description={description}/>
      </header>
    </>
  )
}

export default Teams 