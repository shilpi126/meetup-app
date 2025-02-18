"use client"

import React, { useState } from 'react'

const NewMeetupForm = () => {
    
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [address,setAddress] = useState("")
    const [url,setUrl] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log(title,description,address,url)
    }

  return (
    <div className='flex flex-col justify-center items-center m-4'>
        <h1 className='text-xl font-medium mb-4 '>Add New Meetup</h1>
        <form onSubmit={handleFormSubmit} className='h-80 w-96 p-4 shadow-md shadow-slate-700'>
        <div className='flex flex-col mb-2 text-sm h-12 '>
            <label htmlFor='title'>Title :</label>
           <input 
           id="title"
           type='text'
           value={title}
           onChange={(e)=>{setTitle(e.target.value)}}
           required
           placeholder='Title...'
           className='w-[100%] h-6  outline-none border-2 rounded-sm pl-2'
           />
           </div>
           <div className='flex flex-col mb-2 text-sm h-12 '>
            <label htmlFor='description'>Description : </label>
           <input 
           id="description"
           type='text'
           value={description}
           onChange={(e)=>{setDescription(e.target.value)}}
           required
           placeholder='Description...'
            className='w-[100%] h-6   outline-none border-2 rounded-sm pl-2'
           />
           </div>
           <div className='flex flex-col mb-2 text-sm h-12 '>
            <label htmlFor='address'>Address : </label>
           <input 
           id="address"
           type='text'
           value={address}
           onChange={(e)=>{setAddress(e.target.value)}}
           required
           placeholder='Addess...'
           className='w-[100%] h-6  outline-none border-2 rounded-sm pl-2'
           />
           </div>
           <div className='flex flex-col mb-2 text-sm h-12 '>
            <label htmlFor='url'>Image : </label>
           <input 
           id="url"
           type='url'
           value={url}
           onChange={(e)=>{setUrl(e.target.value)}}
           required
           placeholder='Image...'
           className='w-[100%] h-6  outline-none border-2 rounded-sm pl-2'
           />
           </div>
           <button className='w-[100%] h-8 mt-4 text-md text-white font-medium bg-orange-500 rounded-md' >Add Meetup</button>
        </form>
    </div>
  )
}

export default NewMeetupForm