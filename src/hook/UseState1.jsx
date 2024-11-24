import React,{ useState } from 'react'

function UseState1() {  //{inputValue,setInputValue}
    const [inputValue, setInputValue] = useState("");
    
  return (
     <div className='h-[30%] w-[90%] rounded-xl bg-slate-600  p-5 m-5   '>
        <div className=''>
        <input type="text"className='rounded-lg w-full p-2' 
        placeholder='enter any message'
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}/> 
        <h1 className='text-white'>The current input value is:{inputValue}</h1>
        </div>
       
     </div>
  )
}

export default UseState1