import React, { useRef, useState } from 'react'

const New = ({initialArray}) => {

  const handleSubmit=(e)=>{
    if(name.trim()!==''){
    e.preventDefault()
    setStuds([...studs,{name,hobby}])
    setName('')
    setHobby('')
  }else
  alert("enter name")
  }

  const btnref= useRef() ;

  const arr = []
  const[name,setName]=useState('')
  const[hobby,setHobby]=useState('')
  const[studs,setStuds]=useState(arr)
  return (
    <div>
    <div>
      elements
      {initialArray.map((people,index)=>(
        <p key={index}>{people}</p>
      ))}
    </div>
    <form onSubmit={handleSubmit}> 
      <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" placeholder='hobby' value={hobby} onChange={(e)=>{setHobby(e.target.value)}}/>
      <button ref={btnref} onClick={()=>btnref.current.style.backgroundColor===""? btnref.current.style.backgroundColor="green":btnref.current.style.backgroundColor="blue"} >Submit</button>
    </form>

    <div>
      {studs.map((students,index)=>(
        <p key={index}>{students.name}</p>
      ))}
    </div>
    </div>
  )
}

export default New
