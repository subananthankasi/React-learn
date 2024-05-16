import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Updatetask';

const Tasklist = () => {
const Updatetask = () => {
setModalShow(true)
}
const Deletetask = () => {
  
}
const [modalShow,setModalShow] = useState(false)
  return (
    <>
     <Table striped bordered hover className='my-4'>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Task</th>
          <th>Task description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>   <Button variant="outline-primary" className='mx-3' onClick={Updatetask}><i class="bi bi-pencil-square"></i></Button>{' '}   <Button variant="outline-primary" onClick={Deletetask}><i class="bi bi-x-circle"></i></Button>{' '}</td>
        </tr>

      </tbody>
    </Table>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Tasklist