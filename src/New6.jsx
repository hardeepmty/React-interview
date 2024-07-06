import React from 'react'

const New6 = () => {

  const numbers= [0,1,2,3,4,5,6] //filter out all values less than 3

  const filteredArray = numbers.filter((number)=>number<6)

  return (
    <div>
      {filteredArray.map((num, index)=>(
        <p key={index}>{num}</p>
      ))}
    </div>
  )
}

export default New6
