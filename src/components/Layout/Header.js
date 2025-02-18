import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-14 flex justify-between p-2 text-white bg-slate-800 w-screen'>
        <div className='text-2xl uppercase '>Meetup</div>
        <nav>
            <ul className='flex '>
                <li className='mr-8 text-xl'>
                <Link href="/">All Meetup</Link>
                </li>
                <li className='mr-8 text-xl'>
                <Link href="/new-meetup">Add New meetup</Link>
                </li>
                </ul>
        </nav>
    </div>
  )
}

export default Header