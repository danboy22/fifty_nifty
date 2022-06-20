import React, { useState, useRef, useEffect } from "react";
import EntryService from "../services/entry.service";

export default function MyEntries() {
  let user = JSON.parse(localStorage.user).id
    const [myEntries, setMyEntries] = useState([])
  useEffect(() => {
    getMyEntries(user);
  }, [])
  // useEffect(() => {
  //   console.log(entries)
  // }, [entries])


  

  const getMyEntries = async(user) => {
    console.log(user)
    const response = await EntryService.getMine(user)
    console.log("response.data is", response.data)
    setMyEntries( await response.data)
  } 
 
    return (
        <div>
          {
            myEntries && myEntries.map( myEntry=>{
              return(
                <div key={myEntry.id} style={{alignItems:'center',margin:'20px 60px'}}>
                <p>{myEntry.date}</p>
                <p>{myEntry.location}</p>
                <p>{myEntry.details}</p>
                <p>{myEntry.user.username}</p>
              </div>
              )
            })
          }
        </div>
      );
    }

