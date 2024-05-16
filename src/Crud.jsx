import React,{useState} from 'react'

const Crud = () => {

    const [name,setName]=useState("")
    const [pass,setPass]=useState("")
    const [value,setValue]=useState(false)
    const [result,setResult]=useState([])
    const [id,setId]=useState(null)

//Submit    
const handleclick =(e)=>{
   
if(name!==""&&pass!==""){
    
    if(id){
        
    const update={
        name:name,
        pass:pass,
        id:id
    }
    setResult(result.map((keys)=>keys.id===id ?update :keys))
    }
  else{
    setResult([...result,{name,pass,id:Date.now()}])
  }
    e.preventDefault();
    setValue(true);
    setName("")
    setPass("")
    setId("")
    // setResult([...result,{name,pass}])
}
}
//Delete
const handledlt=(id)=>{
setResult(result.filter((item,index)=>index!==id))

}
const handledupdate=(key)=>{
    setName(key.name)
    setPass(key.pass)
    setId(key.id)


}

  return (
   <>
      <input type="text"
             value={name}
             placeholder='name'
             onChange={(e)=>setName(e.target.value)}
      
      />
    <input type="password"
             value={pass}
             placeholder='password'
             onChange={(e)=>setPass(e.target.value)}
       />  

       <button onClick={handleclick}> {id?"Update":"submit"}</button> 


       {value&&
       <table>
        <tbody>
            <tr>
                <th>S.no</th>
                <th>Username</th>
                <th>Password</th>
                <th>Status</th>
            </tr>
            {result.map((key,index)=>(
                <tr>
                    <td>{index+1} </td>
                    <td>{key.name} </td>
                    <td>{key.pass} </td>
                    <td><button onClick={()=>handledlt(index)}>X</button> </td>
                    <td><button onClick={()=>handledupdate(key)}>U</button> </td>
                </tr>
            ))}


        </tbody>
       </table>

       }   
   </>


  )
}

export default Crud