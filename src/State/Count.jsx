import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)
   const addnumber=()=>{
    setCount(count +2)
  }
   const number=()=>{
    setCount(0)
  }


  return (
    <div>{count}
     <button onClick={addnumber}>Add</button>
     <button onClick={number}>Reset</button>

    </div>
  )
}

export default Count