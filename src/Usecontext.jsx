import React, { createContext, useState } from 'react'
import CreateContext from './CreateContext'
export const appcontext = createContext()

const Usecontext = () => {
   const [form,setForm] = useState({
    names:'',
    password:'',
    id:null
   })

  return (

    <>
    <appcontext.Provider value={{form,setForm}}>
        <CreateContext/>
    </appcontext.Provider>


    </>
  )
}

export default Usecontext