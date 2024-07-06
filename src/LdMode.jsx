import React, { useState } from 'react'
import './ld.css';


const LdMode = () => {

  const[darkMode,setDarkMode] = useState(false)

  const handleMode=()=>{
    setDarkMode(!darkMode) ;
  }

  return (
    <div className={`App ${darkMode?'dark':'light'}`}>
      <button onClick={handleMode}>{darkMode?'Light Mode':'Dark mode'}</button>
    </div>
  )
}

export default LdMode
