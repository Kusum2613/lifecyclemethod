import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const[count,setCount]=useState(0)
  const[total,setTotal]=useState(100)


  useEffect(()=>{
    console.log("after Render")
  },[total])
  return (
    <>
    <div className="app">
      <h1>UseEffect With conditional Hook</h1>
      <h2>count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>ADD</button>
      <h2>total:{total}</h2>
      <button onClick={()=>setTotal(total-1)}>Subtract</button>
    </div>
    </>
  )
}

export default App