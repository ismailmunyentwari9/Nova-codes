import React,{useState}  from 'react'

export default function Events(props) {
    const [contacts,setContacts]=useState(10);

  // ........Handle Increment........
  const handleIncrement=()=>{
       if(contacts==100){
        alert("we don't go beyond 100....")
       }
       else{
        setContacts(contacts+10);
  }
       }
    // ........Handle Decrement........
  const handleDecrement=()=>{
    if(contacts==0){
      alert("We can't go below 0");
    }
    else{
      setContacts(contacts-10);
    }
}
  // ........Handle Reset........
  const handleReset=()=>{
    setContacts(10);
}

  return (
    <div>
       <div className='flex flex-col items-center'>
    
    <h1>Count Number of countacts </h1>
    <p>Product Name: {props.name}</p>
    <p>Product Size: {props.size}</p>
    <p>Product Quantity: {props.quantity}</p>
    <h2 className='bg-blue-900 text-white px-[2rem] rounded-[22px]'>{contacts}</h2>

   <div className='flex gap-[12px]'>
   <button className='text-blue-300' onClick={handleIncrement}>Increment</button>
    <button className='text-red-300' onClick={handleReset}>Reset</button>
    <button className='text-blue-300' onClick={handleDecrement}>Decrement</button>
   </div>
    
    
  </div>
    </div>
  )
}
