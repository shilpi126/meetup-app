
import { MongoClient, ObjectId } from 'mongodb'


const MeetDetails = (props) => {

  return (
    <div className='m-4   p-4 flex flex-col justify-center items-center  '>
    
    <div className='w-96 h-96 shadow-md shadow-slate-700 p-4 text-center'>
    <img src={props.meetupDetails.image} alt='pic' className='rounded-md mb-4 ' />
        <h1>{props.meetupDetails.title}</h1>
        <p>{props.meetupDetails.description}</p>
        <p>{props.meetupDetails.address}</p>
    </div>
    
        
        </div>
  )
}


export async function getStaticPaths(){
        const client = await MongoClient.connect("mongodb+srv://admin:PiHWgViheqny0vmX@cluster0.bbcly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db();
        const meetupCollection = db.collection("meetup")
        const result = await meetupCollection.find({},{_id:1}).toArray();
        client.close();

    return {
        fallback:true,
        paths:result.map((res) => ({
            params: {meetId:res._id.toString()}
        })) 



    }
}

export async function getStaticProps (context){
    //fetch data for a single meetup
    const meetId = context.params.meetId;
    const newId = new ObjectId(meetId)
    const client = await MongoClient.connect("mongodb+srv://admin:PiHWgViheqny0vmX@cluster0.bbcly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db();
    const meetupCollection = db.collection("meetup")
    const result = await meetupCollection.findOne({_id: newId});
    
    
    client.close();

    return{
    props:{
        meetupDetails :{
            id:result._id.toString(),
            title:result.title,
            description:result.description,
            image:result.url,
            address:result.address,

        }
        }
    }
}


export default MeetDetails