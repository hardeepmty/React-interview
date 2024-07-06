import React, { useState } from 'react'

const New5 = () => {

  const initialArray = ["raj", "VEER", "avinash","raaaajj","ram"];
  
  const[search,setSearch]=useState('') ;

  const filteredArray = initialArray.filter((item)=>(
    item.toLowerCase().includes(search.toLowerCase())
  ))


  return (
    <div>
      <input
      placeholder='search name'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      ></input>

      {filteredArray.map((item,index)=>(
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default New5
