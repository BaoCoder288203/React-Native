import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL_API = 'https://6715e9c033bc2bfe40bb872e.mockapi.io/task';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async ()=>{
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}) 

export const addTask = createAsyncThunk('tasks/addTask', async (newTask)=>{
  const response = await fetch(URL_API,{
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(newTask)
  });
  const data = await response.json();
  return data;
})

export const delTask = createAsyncThunk('tasks/delTask', async (id) => {
  const response = await fetch(`${URL_API}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return id;
});

export const editTask = createAsyncThunk('task/editTask', async (task) => {
  const response = await fetch(`${URL_API}/${task.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
})

const taskSlice = createSlice({
  name:'tasks',
  initialState:[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload; 
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(delTask.fulfilled, (state, action) => {
        return state.filter(task => task.id !== action.payload);
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const indexTask = state.findIndex(state => state.id === action.payload.id);
        if (indexTask !== -1) {
          state[indexTask] = { ...state[indexTask], title: action.payload.title };
        }
      })

  }
})

// export const {addTask,editTask,delTask} = taskSlice.actions;
export default taskSlice.reducer;