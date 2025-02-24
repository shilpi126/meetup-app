import {MongoClient} from  "mongodb"

async function handler(req,res){

const data = req.body;

try{
    if (req.method === "POST"){
    

    const client = await MongoClient.connect("mongodb+srv://admin:PiHWgViheqny0vmX@cluster0.bbcly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db();


    const meetupCollection = db.collection("meetup")
    const result = await meetupCollection.insertOne(data)
    
    
    client.close();


    res.status(201).json({message: "Meetup Inserted!"})


    }
 

}catch(e){
    console.log(e.message)
}


}



export default handler;













