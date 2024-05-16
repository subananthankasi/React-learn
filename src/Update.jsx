import React, { useEffect, useState } from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import  axios  from 'axios';
import { API_URL } from './Constants/URL';
import   {useNavigate} from 'react-router-dom'

const Update = () => {
  const navi2 = useNavigate()


  const [first,setFirst] = useState('');
    const [last,setLast] = useState('')
    const [checked,setChecked] = useState(false)
    const [id,setId]=useState('')

    const updateuser = async () => {
      try{
        await axios.put(`${API_URL}/${id}`,{
          first,
          last,
          checked,
        
        })
      }
      catch(err){
        console.log(err);
      }
    
       navi2('/read')
    }

    useEffect(() => {
    setFirst(localStorage.getItem('firstname')); 
    setLast(localStorage.getItem('lastname')); 
    setChecked(localStorage.getItem('!checked')); 
    setId(localStorage.getItem('id')); 

  },[])



  return (
   <>
   
   <Form className='form'>
    <Form.Field>
        <label >First name </label>
        <input type="text"
               placeholder='First name'
               value={first}
               onChange={(e)=>setFirst(e.target.value)}
        />
    </Form.Field><br/>
    <Form.Field>
        <label >Last name  </label>
        <input type="text"
               placeholder='Last name'
               value={last}
               onChange={(e)=>setLast(e.target.value)}
        />
    </Form.Field><br/>
    <Form.Field>
        <Checkbox label ="Agree the terms & condition" 
                   onChange={()=>setChecked(!checked)}        />
    </Form.Field><br/>
    <Button onClick={updateuser} > Update </Button>
 
   </Form>
   </>
  )
}

export default Update