import React,{useState} from 'react'

export default function Services() {
  const [count,setCount]=useState(100);
  // .........Increment handler........
  const handleInclement =()=>{
    setCount(count+1);
  }

   // .........decrement handler........
   const handleDecrement =()=>{
    setCount(count-1);
  }
  return (
    <div className=''>

      <h1>Counter Application</h1>
      <div className='text-[30px] w-[100px] text-red border-2 border-red-500'>{count}</div>
      <button onClick={handleInclement} className=' border-blue-500'>+</button>
      <button className=' border-blue-500'>Reset</button>
      <button onClick={handleDecrement} className=' border-blue-500'>-</button>
    </div>
  )
}
