import React, { useState } from 'react'


  const Suba = ( ) => {

    const [items,setItems]= useState(
   JSON.parse(localStorage.getItem('todo_list'))
    )
    const [newItem,setNewItem]=useState('')

  const handlecheck = (id) => {
    // console.log(`id:${id}`);
    const listitems = items.map((item) => item.id===id?{...item,checked:!item.checked}:item)
    setItems(listitems)
    localStorage.setItem('todo_list',JSON.stringify(listitems))
  }
  const handledlt = (id) => {
    const dltitems = items.filter((item)=>item.id!==id)
    setItems(dltitems)
    localStorage.setItem('todo_list',JSON.stringify(dltitems))
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    additem(newItem)
    setNewItem('')
  
  }
  const additem = (item) => {
    const id = items.length ? items[items.length -1].id+1: 1;
    const addnewitem = {id,checked:false,item}
    const newlistitem= [...items,addnewitem]
    setItems(newlistitem) // store to items of array
    localStorage.setItem('todo_list',JSON.stringify(newlistitem))
  }
  const [search,setSearch]=useState('')
    
    return (
  <>
  <form onSubmit={handlesubmit}>
   <input type="text"
          id='additem'
          required
          autoFocus
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
  />
  <button type='submit'>Submit</button>
</form>

<form onSubmit={(e)=>e.preventDefault()} >
<label htmlFor="search"> search</label>
    <input type="text" 
           id='search'
           placeholder='search'
           value={search}
           onChange={(e)=>setSearch(e.target.value)}
    />
</form>

 {items.length?(
  <ul>
    {items.map((item) => ( <li key={item.id}>
         <input type = "checkbox"
                checked={item.checked}
                onChange={()=>handlecheck(item.id)}
         />
         <label style={item.checked? {color:'green'}:null} onDoubleClick={()=>handlecheck(item.id)}>{item.item}</label>
        <button style={{cursor:'pointer'}} onClick={()=>handledlt(item.id)}>Dlt</button>
    </li>))}
     
  </ul>
):<p style={{color:"red"}}>Your todo_list is empty</p>}
  </>

    )
  }

  export default Suba