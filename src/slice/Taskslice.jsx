import { createSlice } from "@reduxjs/toolkit";

const initialstate ={
    tasklist:[],
    selectedtask:{}
}



const Taskslice = createSlice({
  name:'Taskslice',
  initialState:initialstate,
  reducers:{
    addtotasklist:(state,action) => {
        const id = Date.now();
        const task = {...action.payload,id}
        state.tasklist.push(task)
    },
    removeTaskFromList:(state,action) => {
        state.tasklist=state.tasklist.filter((task)=>task.id!==action.payload.id)
    },
    updateTaskinList:(state,action) => {
       state.tasklist = state.tasklist.map((task)=>task.id===action.payload.id ?action.payload:task)
    },
    setSelectedTask:(state,action) => {
        state.selectedtask = action.payload
    }
  }
}
)
export const {addtotasklist,removeTaskFromList,updateTaskinListsetSelectedTask} = Taskslice.actions
export default Taskslice.reducers