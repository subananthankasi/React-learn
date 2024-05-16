import React, { useState } from 'react'
import List from './List';

const Usecallback = () => {
    
    const[number,setNumber]=useState(0);
    const[dark,setDark]=useState(false)

    const getitems=(increment)=>{
      return  [
        number+increment+1,
        number+increment+2,
        number+increment+3
      ]
    }
    const theme={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }
  return (
   < >
   <div  style={theme}>
   <input type="number"
          value={number}
          onChange={(e)=>setNumber (parseInt(e.target.value))}
         
   
   />
   <button onClick={()=>setDark ((curr)=>!curr)}> toggle theme</button>
 
 <List getitems={getitems} />
 </div>
   </>
  )
}

export default Usecallback