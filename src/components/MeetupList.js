import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const MeetupList = () => {
    const router = useRouter()

    

    const data = [
        {
        id:1,
    title:"adssd",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
    {
        id:2,
    title:"aasa",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
    {
        id:3,
    title:"aasdad",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
    {
        id:4,
    title:"aadad",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
    {
        id:5,
    title:"asdad",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
]


const handleClick = (id) => {
    router.push("/" + id)
}


  return (
    <div className='m-4 flex flex-wrap justify-center items-center'>
        {data.map((item) => (
            <div key={item.id} className='w-60 h-64 rounded-md  p-4 m-4 shadow-md shadow-slate-700'>
                
                <img src={item.image} alt='pic' className=' rounded-md'/>
                <h1>{item.title}</h1>
                
                <button onClick={()=>{handleClick(item.id)}} className='w-40 h-8 bg-slate-600 text-white relative left-6 top-4 rounded-md'>Show Details</button>

            </div>
        ))}
    </div>
  )
}

export default MeetupList