    import React, { useState } from 'react'
    import {API_URL}from './Constants/URL'
    import {Form,Button,Checkbox} from 'semantic-ui-react'
    import  axios  from 'axios';
    import   {useNavigate} from 'react-router-dom'

    const Create = () => {

            const [first,setFirst] = useState('');
            const [last,setLast] = useState('')
            const [checked,setChecked] = useState(false)
            const navi=useNavigate();

            const postdata = async () => {
            await axios.post(API_URL,{
                first,
                last,
                checked
            })
                navi('/read')
                }
        return (
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
                    onChange={()=>setChecked(!checked)}/>
        </Form.Field><br/>
        <Button onClick={postdata}>Submit </Button>
    </Form>
    )
    }

    export default Create