import React from 'react'
import Image  from 'next/image';

function NavBar() {
  return (
    <nav className='flex justify-between bg-amber-400 text-black p-2'>
        <section className='flex'>
            <Image
                alt='Logo-Imagen'
                />
            <h2>MundoNBA</h2>
        </section>

        <ul className='flex gap-2'>
            <li>Noticias</li>
            <li>Posiciones</li>
            <li>Equipos</li>
            <li>Jugadores</li>
            <li>Mi Perfil</li>
        </ul>
    </nav>
  )
}

export default NavBar