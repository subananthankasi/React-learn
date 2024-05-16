import React, { createContext, useState } from 'react'
import ContextCrud from './ContextCrud'
export const Subacontext = createContext()

const Context = () => {
    const [form,setForm] = useState(
        {
            name:'',
            pass:'',
            id:null
        }
    )

  return (
  <>
  <Subacontext.Provider value={{form,setForm}}>
    <ContextCrud/>
  </Subacontext.Provider>
  
  </>
  )
}

export default Context