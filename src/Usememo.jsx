import React, { useEffect, useMemo, useState } from 'react'

const Usememo = () => {

    const [number,setNumber]=useState(0);
    const[dark,setDark]=useState(false);

  
    const theme=useMemo(()=>{
        return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"}
    },[dark])

    const Doublenumber=useMemo(()=>{
        return slowfunction(number)
    },[number])

    useEffect(()=>{
        console.log("theme changed")
    },[theme])
  return (
    <>
    <h1>Usememo</h1>
    <input type="text" 
           value={number}
           onChange={(e)=>setNumber(e.target.value)}
    />
    <button onClick={()=>setDark((curr)=>!curr)}> Toggle theme</button>
    <div style={theme}>{Doublenumber} </div>
    </>
  )
}

export default Usememo


function slowfunction(num){
    console.log("running slow")
    for(let i=0;i<1000000000;i++){}
        return num*2
    
}