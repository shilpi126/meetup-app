
import { useRouter } from 'next/router'
import React from 'react'

const MeetupList = (props) => {
    //console.log(props)

    const router = useRouter()


const handleClick = (id) => {
    router.push("/" + id)
}




  return (
    <div className='m-4 flex flex-wrap justify-center items-center'>
        {props.meetupData.map((item) => (
            <div key={item.id} className='w-60 h-60 rounded-md  p-4 m-4 shadow-md shadow-slate-700 text-center'>
                
                <img src={item.image} alt='pic' className=' rounded-md mb-2'/>
                <h1>{item.title}</h1>
                <button onClick={()=>{handleClick(item.id)}} className='w-28 h-8 text-rose-700 border-2  border-slate-400  mt-2  rounded-sm text-sm'>Show Details</button>
            </div>
        ))}
    </div>
  )
}

export default MeetupList