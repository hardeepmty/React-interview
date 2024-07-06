import React, { useState } from 'react'

const New4 = () => {

  const projects = [
    {
      name: "Website Redesign",
      tasks: [
        { title: "Design Mockups", completed: true },
        { title: "Front-end Development", completed: false },
        { title: "Back-end Integration", completed: false }
      ]
    },
    {
      name: "Mobile App Development",
      tasks: [
        { title: "UI/UX Design", completed: true },
        { title: "Prototype Development", completed: true },
        { title: "Testing", completed: false }
      ]
    }
  ];  

  const[type,setType] = useState("")

  const handleType =(name)=>{
    setType(name)
  }


  return (
    <div>
    <div>
      {projects.map((names,index)=>(
        <div style={{display:"flex"}}>
        <p key={index}>{names.name}</p>
        <button onClick={()=>handleType(names.name)}>click me</button>
        </div>
      ))}
    </div>
    <div>
      {type && (
        projects.find((project)=>project.name===type)
        .tasks.map((task,index)=>(
          <p key={index}>{task.title}</p>
        ))
      )}
    </div>
    </div>
  )
}

export default New4
