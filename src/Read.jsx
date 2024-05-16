import React, { useEffect, useState } from 'react'
import {Table,Button} from 'semantic-ui-react'
import { API_URL } from './Constants/URL'
import axios from 'axios'
import   {useNavigate} from 'react-router-dom'

const Read = () => {
const [apidata,setApidata] = useState([])
const navi1 = useNavigate()
const navi5 = useNavigate()
const userdlt = async (id) => {
   try {
       await axios.delete(`${API_URL}/${id}`);
       getabi();
   } catch (error) {
      console.log(error);
   }
}

 const updateuser = ({first,last,checked,id}) => {
   
   localStorage.setItem('id',id)
   localStorage.setItem('firstname',first)
   localStorage.setItem('lastname',last)
   localStorage.setItem('checked',!checked)


    navi1('/update')
 }

 const getabi = async () => {
 
    const ress = await axios.get(API_URL);
    setApidata(ress.data)
 
 
   }
 
 useEffect(()=>{
    getabi()
 },[])
 
const adduser = () => {
   navi5('/create')
}

  return (
    <Table singleLine>
        <Table.Header>
           <Table.Row>
            <Table.HeaderCell> First name </Table.HeaderCell>
            <Table.HeaderCell> Last name </Table.HeaderCell>
            <Table.HeaderCell>Checked </Table.HeaderCell>
            <Table.HeaderCell>Delete </Table.HeaderCell>
            <Table.HeaderCell>Update </Table.HeaderCell>
           </Table.Row>
        </Table.Header>
        <Table.Body>
           {
            apidata.map((keys)=>(
                <Table.Row key={keys.id}>
                <Table.Cell> {keys.first} </Table.Cell>
                <Table.Cell> {keys.last} </Table.Cell>
                <Table.Cell> {keys.checked?"checked":"not checked"} </Table.Cell>
                <Table.Cell> <Button onClick={()=>userdlt(keys.id)}> Delete</Button> </Table.Cell>
                <Table.Cell> <Button onClick={()=>updateuser(keys)} > Update</Button> </Table.Cell>
            </Table.Row>))
           }
          
        </Table.Body>
        <Button onClick={adduser}> ADD</Button>
    </Table>
  )
}

export default Read