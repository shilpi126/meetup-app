import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-14 flex justify-between pt-2 pl-10 pr-10 text-white bg-rose-950   w-screen'>
        <div className='text-2xl uppercase '>Meetup</div>
        <nav>
            <ul className='flex pt-2 text-rose-200 '>
                <li className='mr-8 text-md '>
                <Link href="/">All Meetup</Link>
                </li>
                <li className='mr-8 text-md'>
                <Link href="/new-meetup">Add New meetup</Link>
                </li>
                </ul>
        </nav>
    </div>
  )
}

export default Header