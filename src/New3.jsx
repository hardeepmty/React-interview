import React, { useState } from 'react'

const New3 = () => {

  const products = [
    {
      category: "Electronics",
      items: ["Laptop", "Smartphone", "Tablet"]
    },
    {
      category: "Clothing",
      items: ["T-shirt", "Jeans", "Dress"]
    },
    {
      category: "Books",
      items: ["Fiction", "Non-fiction", "Science"]
    }
  ];
  
  const[type,setType]=useState("");
  
  const handleSelect=(e)=>{
      setType(e.target.value)
  }

  return (
    <div>
      <select onChange={handleSelect}>
        {products.map((product,index)=>(
          <option key={index} value={product.category}>{product.category}</option>
        ))}
      </select>

      {
        type &&(
          products.find((product)=>product.category===type)
          .items.map((item,index)=>(
            <p key={index}>{item}</p>
          ))
        )
      }
    </div>
  )
}

export default New3
