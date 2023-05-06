import React, { useEffect, useRef, useState } from "react";
import "./Card.css";

function Card() {
  const [quotes, setQuotes] = useState("");
  const [apidata, setApidata] = useState([]);
  const textRef=useRef()
  const colors=["#69f0ae","#ccff90","#e3f542","#fff59d","#ffab00"]


  useEffect(()=>{
    //one time data
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data)
        setApidata(data)
        // console.log('in func')
        // console.log(apidata)
      }).catch(error => console.log(error));
    
},[])

// console.log('out func')
// console.log(apidata)

  const getdata = () => {
    let rnum=Math.floor(Math.random() * apidata.length);
    setQuotes(apidata[rnum])
    console.log(apidata[rnum])
  }
  

useEffect(()=>{
    textRef.current.style.color=colors[Math.floor(Math.random()*colors.length)]
},[quotes])

  return (
    <div className="Main">
      <div className="container">
       <div className="parent">

      <p ref={textRef}>{quotes.text}</p>
        <p className="aut">Author:
        {quotes.author}</p>
        </div>

        <button className="btn" onClick={getdata}>
          Get Quotes
        </button>
      </div>
    </div>
  );
}

export default Card;
