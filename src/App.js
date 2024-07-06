import React, { useState } from 'react'
import New from './New';
import New2 from './New2';
import New3 from './New3';
import New4 from './New4';
import LdMode from './LdMode';
import New5 from './New5';
import New6 from './New6';
import New7 from './New7';

const App = () => {

  const handleCheck=(index)=>{
    if(check[index]===false){
    setCheck(true)
    console.log(check)}
  }

  const handleAdd=()=>{
    setArray([...array,newName]);
    setNewName('')
  }
  const handleDelete=(index)=>{
    const newArray = array.filter((_,idx)=>idx!==index) ;
    setArray(newArray);
  }
  const initialArray = ["raj", "VEER", "avinash"];
  const [array,setArray]=useState(initialArray) ;
  const [newName, setNewName]  =useState("")
  const [check,setCheck]= useState(false)

  return (
    <div>
      <div>
      {array.map((name,index)=>(
          <div key={index} style={{display:"flex",gap:"20px"}}>
            <input type='checkbox' onClick={()=>handleCheck(index)} value={check}></input>
            <p>{name===name.toUpperCase()?name.toLowerCase():name}</p>
            <button onClick={()=>handleDelete(index)}>delete</button>
          </div>
      ))}
      </div>
      <div>
        <input placeholder='enter your name'
        type='text'
        value={newName}
        onChange={(e)=>setNewName(e.target.value)}
        >
        </input>
        <button onClick={handleAdd}>Add name</button>
      </div>
      <New initialArray={initialArray}/>
      <New2/>
      <New3/>
      <New4/>
      <LdMode/>
      <New5/>
      <New6/>
      <New7/>
    </div>
  )
}

export default App
