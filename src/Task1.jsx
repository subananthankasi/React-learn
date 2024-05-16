import React, { useEffect, useState } from 'react'
import ApiRequest from './Apirequest'
// import ApiRequest from './ApiRequest'

const Task1 = () => {

      const [items,setItems] = useState ([])
      
      const [newitem,setNewitem] = useState('')

      const [fetcherror,setFetcherror] = useState (null)

      const [loading,setLoading] = useState(true)

      const API_URL = "http://localhost:3500/items"

      useEffect(()=>{
         const fetchitem = async () => {
          try{
          const response = await fetch (API_URL)
          if(!response.ok) throw Error('Data not found')
          const listitem = await response.json()
          setItems(listitem)
          setFetcherror(null)
          }
          catch(err){
            setFetcherror(err.message)
          }
          finally{
            setLoading(false)
          }
         }
         setTimeout(() => {
          
          (async () => await fetchitem())()
         }, 2000);
        
      },[])
       
      const handlecheck =async (id) => {
        const updatedItems = items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
        setItems(updatedItems)
}
      const handledlt = (id) => {
        const dltitem = items.filter((item)=>item.id!==id)
        setItems(dltitem)
     
      } 
      const Handlesubmit = (e) => {
        e.preventDefault()
        console.log(newitem);
        setNewitem('')
        additem(newitem)
        
      }
      const additem = async (item) => {
        const id = items.length?items[items.length - 1].id+1:1
        const additem = {id,ckecked:false,item}
        const listitem = [...items,additem]
        setItems(listitem)

        const postoption = {
          mathod:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(additem)
        }

        const result = ApiRequest(API_URL,postoption)
        if(result) setFetcherror(result)

      }
  return (
    <> 
    <form onSubmit={Handlesubmit}>
      <input type="text"
            required
            autoFocus
            value={newitem}
            onChange={(e) => setNewitem (e.target.value)}
      />
      <label htmlFor="item"> </label>
      <button type='submit'>Submit</button>
    </form>
  {fetcherror && <p>{`Error: ${fetcherror}`} </p>}
  {loading && <p>Loading item...</p>}

    {!fetcherror && !loading && (
    items.length?(
      <ul>
        {
          items.map((item)=>(<li key={item.id}>
              <input type="checkbox"
                    checked={item.checked}
                    onChange={()=>handlecheck(item.id)}
              />
              <label htmlFor="items" 
                    style={item.checked?{color:"green"}:null}
                    onDoubleClick={()=>handlecheck(item.id)}
                    > {item.item} </label>
              <button onClick={() => handledlt (item.id)}>dlt</button>
          </li>))
        }
      </ul>
      ):<p>Your todo is empty</p>
    )}
    </>
  )
  }

export default Task1