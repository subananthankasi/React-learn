import React ,{useEffect, useState} from 'react'

const Task2 = () => {
    const [items,setItems] =useState ([
    ])

    const [newitem,setNewitem] = useState('')
    const [loading,setLoading] = useState(true)
    const [fetcherror,setFetcherror] = useState(null)

    const API_URL = 'http://localhost:3000/items'
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


const handlecheck = (id) =>{
   const additem = items.map((item)=>item.id===id?{...item,checked:!item.checked} :item)
   setItems(additem)
  
}
const handledlt = (id) => {
    const dltitem = items.filter((item)=>item.id!==id)
    setItems(dltitem)
    
}
const additem = (item) => {
    const id =items.length?items[items.length -1].id+1 :1
    const additems= {id,checked:false,item}
    const listitem =[...items,additems]
    setItems(listitem)
}

const handlesubmit = (e) =>{
    e.preventDefault()
    console.log(newitem)
    setNewitem('')
    additem(newitem)
}
  return (
  <>
    <form onSubmit={handlesubmit} >
        <input type="text"
                required
                autoFocus
                value={newitem}
                onChange={(e)=>setNewitem(e.target.value)}
        
        />
        <button type='submit'>Submit</button>
    </form>

{fetcherror && <p>{`Error: ${fetcherror}`}</p>}
{loading && <p> loading items...</p>}
{!loading && !fetcherror &&(
items.length?(
    <ul>
        {items.map((item)=>(<li key={item.id}>
          <input type="checkbox"
                 checked={item.checked}
                 onChange={()=>handlecheck(item.id)}
                 />
                 <label onDoubleClick={()=>handlecheck(item.id)} style={item.checked?{color:"red"}:null}  > {item.item} </label>
                 <button onClick={()=>handledlt(item.id)}>dlt</button>

        </li>))}
    </ul>
):<p>your todo is empty</p>)}
  

  </>
  )
}

export default Task2