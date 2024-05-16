import React, { useReducer, useState } from 'react'


const Usereducer1 = () => {

    const Suba = (state,action)=>{

        switch (action.type){
            case "CREATE":
                return [...state,action.payload];
            case "DELETE":
              return state.filter((item)=>item.id!==action.payload.id)
              case "UPDATE":
                return state.map((item)=>item.id===action.payload.id ? action.payload.updated1:item )
                default:
                    return state
        }

    }
  

    const [state,dispatch]=useReducer(Suba,[])

    const [input,setInput] = useState(
        {
           names:"",
           pass:"",
           id:null

        }
    )


   
    
const submit=(e)=>{
e.preventDefault()
   

  setInput({names:"",pass:""})
  if(input.id){
  dispatch({type:'UPDATE',payload:{
       id:input.id,
       updated1 :{
       names:input.names,
       pass:input.pass}
  }
})}
else{
dispatch({type:"CREATE",payload:{...input,id:Date.now()}})
}

}

const deletebox = (keys) => {

dispatch({type:"DELETE",payload:{id:keys}})

}
 const update = (keys)=>{
    setInput({
        names:keys.names,
        pass:keys.pass,
        id:keys.id
    })
 }

  

  return (
    <>
    <form onSubmit={submit} >
    <input type="text"
    value={input.names}
           onChange={(e)=>setInput({...input,names :e.target.value})} 
    />
      <input type="password"
           value={input.pass}
           onChange={(e)=>setInput({...input,pass :e.target.value})} 
    />
    <button type='submit'>Submit</button>
    </form>
      <table>
        <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>pass</th>
        </tr>
        { state.map((keys ,index)=>(
        <tr key={keys.id} >
           <td>{index+1} </td>
            <td>{keys.names} </td>
            <td>{keys.pass} </td>
            <button onClick={ ()=>update(keys)}>update </button>
            <button onClick={ ()=>deletebox(keys.id)}>delete </button>
        </tr>))}
      </table>


    </>
  )
}

export default Usereducer1