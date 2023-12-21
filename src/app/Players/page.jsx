import React from 'react'
import Portada from '@/components/Portada';


function Players() {
  const img= 'https://res.cloudinary.com/dmgkhl6ys/image/upload/v1702009194/mundoNBA/wallpaperflare.com_wallpaper_cnm9ha.jpg'

  return (
    <>
    <header>
      <Portada image={img}/>
    </header>
        <h1>
            Players
        </h1>
    </>
  )
}

export default Players
