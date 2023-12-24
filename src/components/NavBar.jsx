import React from 'react'
import Image  from 'next/image';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className='flex justify-between bg-amber-400 text-black p-3 sticky'>
        <section className='flex'>
            <Image
                alt='Logo-Imagen'
                />
            <Link href='/'>MundoNba</Link>
        </section>

        <ul className='flex gap-2'>
            <Link href='/News'>Noticias</Link>
            <Link href='/Positions'>Posiciones</Link>
            <Link href='/Teams'>Equipos</Link>
            <Link href='/Players'>Jugadores</Link>
        </ul>
    </nav>
  )
}

export default NavBar