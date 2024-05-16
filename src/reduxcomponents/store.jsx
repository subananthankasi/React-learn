import { configureStore } from "@reduxjs/toolkit"
import tasksreducer from '../slice/Taskslice'

export const store=configureStore({
    reducer:{
      tasks:tasksreducer
    }
})

