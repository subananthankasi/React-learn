import React,{useState,useRef, useEffect} from 'react'
// import ApiRequest from './ApiRequest'


const Subananthan = () => {


  //after click button autofocus default
    const reference=useRef()

    const [items,setItems] = useState( [])
    const [fetcherror,setFetcherror]=useState(null)
    const [loading,setLoading]= useState(true)

    const API_URL="http://localhost:3000/items";
     
    useEffect(()=>{
     const fetchitems = async () => {
      try{
        const response =await fetch(API_URL);
       if(!response.ok) throw Error('data not found')
        const listitems = await response.json()
        setItems(listitems)
        setFetcherror(null)
      }
      catch(err){
        setFetcherror(err.message)
      }
      finally{
        setLoading(false)
      }
     }
    setTimeout(()=>{
      ( async () => await fetchitems())()
    },2000)
     

    },[])
 
     
    const handlecheck = (id) => {
        const listitems = items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
        setItems(listitems)
    

    }
 
     
    const handledlt = (id) => {
        const listitems = items.filter((item)=>item.id!==id)
        setItems(listitems)

    }

    const [newitem,setNewitem] = useState('')
    
    
  
    const additem = (item) => {
        const id = items.length ? items[items.length -1].id+1 : 1
        const additems = {id,checked:false,item}
        const listitems = [...items,additems]
        setItems(listitems)

     
    }
  
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(newitem);
        setNewitem('')
        additem(newitem)
       
    }


  return (
  <>

    <form onSubmit={handlesubmit}>
       <input type="text"
            required
            ref={reference}
            autoFocus
            value={newitem}
            onChange={(e)=>setNewitem(e.target.value)}
       />
       <button type='submit' onClick={()=>reference.current.focus()}>Submit</button>
    </form>
    {loading && <p>Loading items..</p>}
  {fetcherror && <p>{`Error: ${fetcherror}`} </p>}

  
  {!loading && !fetcherror&& (
  items.length ? (
    <ul>

        {items.map((item)=>(<li key={item.id}>
            <input type="checkbox"
                checked={item.checked}  
                onChange={()=>handlecheck(item.id)}
            />
            <label htmlFor="additem" onDoubleClick={()=>handlecheck(item.id)} style={item.checked?{color:"green"}:null}>{item.item} </label>
            <button onClick={()=>handledlt(item.id)}>Dlt</button>
        </li>))}

    </ul>
    ) : <p style={{color:"red"}}>Your todo is empty</p>
  )}
</>
 
  )
}

export default Subananthan