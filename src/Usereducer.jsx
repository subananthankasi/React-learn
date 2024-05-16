import React, { useReducer, useState } from 'react'

const Usereducer = () => {
  const Suba = (state,action) => {
    switch(action.type){
      case "CREATE":
        return [...state,action.payload]
        case "DELETE":
          return state.filter((item) => item.id!==action.payload.id)
          case "UPDATE":
            return state.map((item)=>item.id===action.payload.id?action.payload.update:item)
        default:
          return state
    }

  }

  const [state,dispatch] = useReducer(Suba,[])
  const [form,setForm] = useState(
    {
      name:'',
      pass:'',
      id:null
    }
  )

    const Handlesubmit =  () => {

  if(form.id){
    dispatch({type:"UPDATE",payload:{
      id:form.id,update:{
        name:form.name,
        pass:form.pass
      }
    }})
  }
       else{
         dispatch({type:"CREATE",payload:
            {
              ...form,
              name:form.name,
              pass:form.pass,
              id:Date.now()
            }
        })
       }

        setForm({
            name:'',
            pass:'',
            id:''
        })
    }
    const Handledelete = (item) => {
        dispatch({type:"DELETE",payload:{id:item}})
    }
    const Handleupdate = (item) => {
    setForm({
      name:item.name,
      pass:item.pass,
      id:item.id
    })
    }

  return (
    <>
    <label htmlFor="text">Name: </label>
    <input type="text"
           required
           autoFocus
           value={form.name}
           onChange={(e) => setForm ({...form,name:e.target.value}) }
    
    />
    <label htmlFor="password">Password: </label>
    <input type="password"
           required
           autoFocus
           value={form.pass}
           onChange={(e) => setForm ({...form,pass:e.target.value}) }
    />
    <button onClick={Handlesubmit}>Submit</button>
    <table style={{border:"1px solid black", marginTop:"20px"}}>
      <tbody>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>password</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {
          state.map((item,index) => (<tr key={item.id} >
          <td>{index+1} </td>
          <td>{item.name} </td>
          <td>{item.pass} </td>
          <td><button onClick={() => Handleupdate (item)}>Update</button></td>
          <td><button onClick={() => Handledelete (item.id)}>Delete</button></td>
          </tr>))
        }
      </tbody>
    </table>

    
    </>
  )
}

export default Usereducer