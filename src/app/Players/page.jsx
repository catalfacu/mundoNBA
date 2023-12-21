import React from 'react'
import Portada from '@/components/Portada';


function Players() {
  const img= 'https://res.cloudinary.com/dmgkhl6ys/image/upload/v1702009194/mundoNBA/wallpaperflare.com_wallpaper_cnm9ha.jpg'
  const description = 'Información, estadisticas, etc, acerca de los jugadores de cada equipo de la liga '
  return (
    <>
    <header>
      <Portada image={img} tittle='JUGADORES' description={description}/>
    </header>
    </>
  )
}

export default Players
