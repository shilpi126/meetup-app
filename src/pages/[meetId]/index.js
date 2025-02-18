import { useRouter } from 'next/router'
import React from 'react'

const MeetDetails = () => {
    const router = useRouter()

    const data = [
        {
        id:1,
    title:"a",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
    {
        id:2,
    title:"a",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
    {
        id:3,
    title:"a",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
    {
        id:4,
    title:"a",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
    {
        id:5,
    title:"a",
    image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    descripation:"sdadad",
    address:"gdjj",

    },
]

    const id = router.query.meetId
    


    const meetDetails = data.find((item)=>item.id == id)


  return (
    <div className='m-4   p-4 flex flex-col justify-center items-center  '>
    
    <div className='w-96 h-96 shadow-md shadow-slate-700 p-4'>
    <img src={meetDetails?.image} alt='pic' className='rounded-md mb-4 '/>
        <h1>{meetDetails.title}</h1>
        <p>{meetDetails.descripation}</p>
        <p>{meetDetails.address}</p>
    </div>
       
        </div>
  )
}

export default MeetDetails