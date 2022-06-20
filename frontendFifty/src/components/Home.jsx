import React, { useState, useRef, useEffect } from "react";
import EntryCard from "./EntryCard";
import EntryService from "../services/entry.service";

export default function Home() {
  const [entries, setEntries] = useState([])
  useEffect(() => {
    getEntries();
  }, [])
  // useEffect(() => {
  //   console.log(entries)
  // }, [entries])
  const getEntries = async() => {
    const response = await EntryService.getRecent()
    console.log("response.data is ", response.data)
    setEntries( await response.data)
  } 
 
  return (
    <div>
      <h1>Welcome to Travelogue. </h1>
      <h3>Your virtual travel journal and digital global guestbook.</h3>
      <img src="kelsey-knight-SFRw5GChoLA-unsplash.jpg" width="750px" height="500px"></img>
      <h3>Recent Travelogues</h3>
      {
        entries && entries.map(entry=>{
          return(
            <div key={entry.id} style={{alignItems:'center',margin:'20px 60px'}}>
            <p>{entry.date}</p>
            <p>{entry.location}</p>
            <p>{entry.details}</p>
            <p>{entry.user.username}</p>
          </div>
          )
        })
      }
    </div>
  );
}

//   return (
//     <div>
//       {/* <EntryCard date={entry.date} location={entry.location} details={entry.details} user={entry.user}/> */}
//     </div>
//   );
// };
