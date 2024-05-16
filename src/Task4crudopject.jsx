import React, { useState } from 'react'

const Task4crudopject = () => {

    const [form,setForm] = useState({
        name:'',
        pass:'',
        email:'',
        num:'',
        malechecked:false,
        femalechecked:false,
        id:null
    })

    const [getdata,setGetdata] = useState([])
    // const [emailError, setEmailError] = useState('');
    // const [numError,setNumError] = useState('')

    const Handlesubmit = (e) => {
        e.preventDefault()
        // if (form.email.indexOf('@gmail.com') === -1) {
        //     setEmailError('Email must contain @gmail.com');
        //     return; 
        // }
        // if (form.num.length !== 10){
        //     setNumError('enter 10 num')
        //     return
        // }

       if(form.id){
         const update={
            name:form.name,
            pass:form.pass,
            email:form.email,
            num:form.num,
            gender:form.gender
         }
         setGetdata(getdata.map((item)=>item.id===form.id?update:item))
       }
    else{
        setGetdata((item)=>[
            ...item,
            {
             name:form.name,
             pass:form.pass,
             id:Date.now(),
             email:form.email,
             num:form.num,
             gender:gender
            }
        ])
    }
   
       
      
        const gender = form.malechecked?'male':form.femalechecked?'female':'select gender'
 
    
        setForm({
            name:'',
            pass:'',
            email:'',
            num:''
        })
        // setEmailError('')
    }
    const Handeledlt = (suba) => {
        const dlt = getdata.filter((item)=>item.id!==suba)
        setGetdata(dlt)
    }
    const Handeleupdate = (suba) => {
        setForm({
            name: suba.name,
            pass: suba.pass,
            email: suba.email,
            num: suba.num,
            malechecked: suba.gender === 'male',
            femalechecked: suba.gender === 'female',
            id: suba.id,
            gender: suba.gender // Add this line to set the gender in the form state
        });
    }
    

  return (
   <>
  
    <div>
    <label htmlFor="text"> Name:</label>
    <input type="text"
           required
           autoFocus
           value={form.name}
           onChange={(e) => setForm({...form,name:e.target.value})} 
    />
    </div>
    <div>
    <label htmlFor="password"> password:</label>
      <input type="password"
           required
           autoFocus
           value={form.pass}
           onChange={(e) => setForm({...form,pass:e.target.value})}
    />
    </div>
    <div>
    <label htmlFor="number"> Number:</label>
      <input type="number"
           required
           autoFocus
           value={form.num}
           onChange={(e) => setForm({...form,num:e.target.value})}
    />
    {/* {numError && <div style={{ color: 'red' }}>{numError}</div>} */}
    </div>
    <div>
    <label htmlFor="email"> Email:</label>
      <input type="Email"
           required
           autoFocus
           value={form.email}
           onChange={(e) => {
            setForm({ ...form, email: e.target.value });
           
        }}
    />
    {/* {emailError && <div style={{ color: 'red' }}>{emailError}</div>} */}
  
    </div>
    <div>
    <label htmlFor="male">Male </label>
    <input
        type="checkbox"
        checked={form.malechecked}
        onChange={(e) => setForm({ ...form, malechecked: e.target.checked, femalechecked: false })}
    />
    <label htmlFor="female">Female </label>
    <input
        type="checkbox"
        checked={form.femalechecked}
        onChange={(e) => setForm({ ...form, femalechecked: e.target.checked, malechecked: false })}
    />
</div>

    <button onClick={Handlesubmit}>Submit </button>
    
  <table>
    <tbody>
        <tr>
            <th>sno</th>
            <th>Name</th>
            <th>password</th>
            <th>email</th>
            <th>Number</th>
           <th>Gender</th>
        </tr>
        {
            getdata.map((item,index)=>(<tr key={item.id}>
                 <td>{index+1} </td>
                 <td>{item.name} </td>
                 <td>{item.pass} </td>
                 <td>{item.email} </td>
                 <td>{item.num} </td>
                 <td> {item.gender}</td>
                 <button onClick={()=>Handeledlt(item.id)}>Delete </button>
                 <button onClick={() => Handeleupdate(item)}>update</button>
                 {/* <td>{item.malechecked?"male":""} </td>
                 <td>{item.femalechecked?"Female":""} </td> */}
            </tr>))
        }
    </tbody>
  </table>
   </>
  )
}

export default Task4crudopject