import React, { useState } from 'react'
import { Subacontext } from './Context'

const ContextCrud = () => {
   const [form,setForm] = useState(Subacontext)
   const [getdata,setGetdata] = useState([])

   const Handlesubmit = (e) => {
        e.preventDefault()
        console.log(form);

        if(form.id){
            const update = {
                name:form.name,
                pass:form.pass
            }
            setGetdata(getdata.map((item)=>item.id===form.id?update:item))
        }
        else{

            setGetdata((item)=>[...item,{
                name:form.name,
                pass:form.pass,
                id:Date.now()
            }])
        }

        setForm({
            name:'',
            pass:'',
        })
    }
    const Handledelete  = (id) => {
        const dlt = getdata.filter((item) => item.id!==id)
        setGetdata(dlt)
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
     <input type="text"
            required
            autoFocus
            value={form.name}
            onChange={(e) => setForm({...form,name:e.target.value})}
     />
       <input type="password"
            required
            autoFocus
            value={form.pass}
            onChange={(e) => setForm({...form,pass:e.target.value})}
     />
     <button onClick={Handlesubmit}>Submit</button>
    <table>
        <tbody>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Password</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
            
    {
         getdata.map((item,index) => (<tr key={item.id}>
            <td>{index+1} </td>
            <td>{item.name} </td>
            <td>{item.pass} </td>
            <td><button onClick={() => Handledelete(item.id)}>Delete</button> </td>
            <td><button onClick={() => Handleupdate(item)}>Update</button> </td>
         </tr>))
    }
        </tbody>
    </table>


   
   </>
  )
}

export default ContextCrud