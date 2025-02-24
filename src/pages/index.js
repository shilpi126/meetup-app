import MeetupList from "@/components/MeetupList";
import { Fragment } from "react";
import { MongoClient } from "mongodb";






export default function Home(props) {
  //console.log(props)
  return (
  <Fragment>
    <MeetupList meetupData={props.meetupData}/>
  </Fragment>
  );
}


export async function getStaticProps(){
  //fetch data
  const client = await MongoClient.connect("mongodb+srv://admin:PiHWgViheqny0vmX@cluster0.bbcly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  const db = client.db();


  const meetupCollection = db.collection("meetup")
  const result = await meetupCollection.find().toArray();
  
  
  client.close();

    return{
      props:{
        meetupData: result.map(res=>({
          title:res.title,
          id:res._id.toString(),
          description:res.description,
          address:res.address,
          image:res.url,
        })
      )
      },
      revalidate:1
    }
}
