import MeetupList from "@/components/MeetupList";
import { Fragment } from "react";

const data = [
  {
  id:"m1",
title:"adssd",
image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
descripation:"sdadad",
address:"gdjj",

},
{
  id:"m2",
title:"aasa",
image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
descripation:"sdadad",
address:"gdjj",

},
{
  id:"m3",
title:"aasdad",
image:"https://th.bing.com/th?id=OIP.Vz2gnk9UmrTBYXhJ2ygCFAHaEu&w=313&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
descripation:"sdadad",
address:"gdjj",

},


]



export default function Home(props) {
  
  return (
  <Fragment>
    <MeetupList meetupData={props.meetupData}/>
  </Fragment>
  );
}


export async function getStaticProps(){
    return{
      props:{
        meetupData: data
      },
      revalidate:1
    }
}
