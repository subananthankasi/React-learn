// import React, { useState } from 'react'
// import {Button} from 'primereact/button'

const Counter = () => {

    // const [counter,setCounter ] = useState(0)
    // const Increment = () => {
    //     setCounter(counter+1)
    // }
    // const Decrement = () => {
    //     setCounter(counter-1)
    // }

    function presslike(){
    return  console.log('hii');
    }
  const ll=  presslike
  ll()

  const arr = [1,2,3,4,5]
 const  val= arr.map((item)=>item*5)
  console.log(val);
  return (
    <>
    {/* <h3>Counter : {counter}</h3>
    <Button label="Incremente" severity="success" text raised style={{marginRight:"10px"}} onClick={Increment} />
    <Button label="Decrement" severity="danger" text raised onClick={Decrement}/> */}
    </>
  )
}

export default Counter