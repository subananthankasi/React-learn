import React, { useMemo, useState } from 'react'

const Usememo1 = () => {

    const [todo,setTodo]=useState([])
    const[count,setCount]=useState(0)


//    const simple=simplefunction(count);
   const expansive=useMemo(()=>{
   expensiveCalculation(count)
},[count])


const countclick=()=>{
    setCount(count+1)
}
const todoclick=()=>{
    setTodo((suba)=>[...suba,"todo"])
}


  return (
       <>
        <h1>Usememo</h1>
       {
      todo.map((keys,index)=>{
        return <p key={index}>{keys} </p>
      })
       }
       <button onClick={todoclick} >Todo</button>
       <hr/>
       <p> count:{count} </p>
       <button onClick={countclick} >count</button>
       {/* <h2>Simple calculation</h2>
       <p>{simple}</p> */}
       <h2>Expansive calculation</h2>
       <p>{expansive} </p>
       </>
  )
}

export default Usememo1

// function simplefunction(num){ 
//     console.log('i am simple function');
//   for(let i=0 ; i < 10 ; i++){
//   num+=1
//   }
//   return num
// }
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
}