import React, { useState, useEffect } from "react";

 export default function EntryCard(props) {

    // get some like four entries
  return (
    <div>
        <p>{props.date} </p>
        <p>{props.location}</p>
        <p>{props.details} </p>
        <p>{props.user} </p>
    </div>
  )
}
