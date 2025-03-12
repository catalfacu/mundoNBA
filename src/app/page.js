'use client'

import Image from 'next/image'
import { counter } from '@/utils/utils'


export default function Home() {
  return (
    <div>
      <h1  className='text-xl'>
        No me acuerdo de nada, inutil TOTAL!
      </h1>
      <button value={'+'} onClick={(e)=> counter(e.target.value)}>+</button>
      <h1>Contador</h1>
      <button value={'-'} onClick={(e)=> counter(e.target.value)}>-</button>
    </div>
  )
}
