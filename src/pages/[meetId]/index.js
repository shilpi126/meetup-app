
import React from 'react'


const MeetDetails = (props) => {

    console.log(props)




  return (
    <div className='m-4   p-4 flex flex-col justify-center items-center  '>
    
    <div className='w-96 h-96 shadow-md shadow-slate-700 p-4 text-center'>
    <img src={props.meetupDetails.image} alt='pic' className='rounded-md mb-4 '/>
        <h1>{props.meetupDetails.title}</h1>
        <p>{props.meetupDetails.descripation}</p>
        <p>{props.meetupDetails.address}</p>
    </div>
    
        
        </div>
  )
}


export async function getStaticPaths(){
    return {
        fallback:true,
        paths:[
            {
                params:{
                    meetId:"m1"
                }
            },
            {
                params:{
                    meetId:"m2"
                }
            },
            {
                params:{
                    meetId:"m3"
                }
            }
        ]
    }
}

export async function getStaticProps (context){
    //fetch data for a single meetup
  const meetId = context.params.meetId;

    return{
       props:{
        meetupDetails :{
            id:meetId,
            title:"aasdad",
            image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            descripation:"sdadad",
            address:"gdjj",
        }
       }
    }
}


export default MeetDetails