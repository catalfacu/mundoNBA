import React from 'react'
import Image  from 'next/image';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className='flex justify-between bg-amber-400 text-black p-2'>
        <section className='flex'>
            <Image
                alt='Logo-Imagen'
                />
            <Link href={'/'}><h2>MundoNBA</h2></Link>
        </section>

        <ul className='flex gap-2'>
            <li>Noticias</li>
            <li>Posiciones</li>
            <li>Equipos</li>
            <Link href={'/Players'}><li>Jugadores</li></Link>
            <li>Mi Perfil</li>
        </ul>
    </nav>
  )
}

export default NavBar