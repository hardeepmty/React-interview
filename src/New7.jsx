import React, { useState } from 'react'

const New7 = () => {

  const tasks=[] ;

  const[task,setTask]=useState('')
  const[array,setArray]=useState(tasks)

  const[password,setPassword] = useState('')
  const[showPassword,setShowPassword]=useState('false')

  const handleAdd =()=>{
    setArray([...array,task])
    setTask('')
  }

  const handleDelete=(index)=>{
    const newArray = array.filter((_,idx)=>idx!==index)
    setArray(newArray) ;
  }

  const handleMode=()=>{
    setShowPassword(!showPassword)
  }

  

  return (
    <div>
      <h3>Todo List</h3>
        <input
        placeholder='add task'
        type='text'
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        ></input>
        <button onClick={handleAdd}>Add</button>

        <ul>
          {array.map((todo,index)=>(
            <div>
              <li key={index}>{todo}</li>
              <button onClick={()=>handleDelete(index)}>delete task</button>
            </div>
          ))}
        </ul>

        <input
        type={showPassword?'password':'text'}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        >
        </input>
        <button onClick={handleMode}>Show</button>
    </div>
  )
}

export default New7
