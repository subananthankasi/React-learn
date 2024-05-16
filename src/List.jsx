import React, { useEffect, useState } from 'react'

const List = ({getitems} ) => {
    const [items,setItems]=useState([])

    useEffect(()=>{
        console.log('useing items');
        setItems(getitems(10));
    },[getitems])

  return (
    <>
    {
        items.map((keys,index)=>(<p key={index}>{keys} </p>))
    }
    </>
  )
}

export default List