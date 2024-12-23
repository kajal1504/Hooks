import React, { useState } from 'react'

function UseState4() {
    
        const[count, setCount]= useState(0);
    
        const decrementHandler = () => {
            setCount(count - 1);
        };
    
        const incrementHandler = () => {
            setCount(count + 1);
        };
    
        const resetHandler = () => {
            setCount(0);
        };
  return (
     <>
     <div className="h-[50%] w-[90%] rounded-xl bg-slate-600 p-5 m-5  flex items-center justify-center">
        <div>
        
        <div className='text-blue-400 font-medium text-sm ml-8'>Increment & Decrement</div>
        <div className='bg-slate-50 flex justify-center gap-5 py-1 px-2 rounded-2xl text-[2px] text-slate-400'>
            <div onClick={decrementHandler}  className='border-r-2 text-center w-20 border-neutral-300 text-5xl'>-</div>
            <div className='font-bold gap-12  text-5xl'>{count}</div>
            <div onClick={incrementHandler} className='border-r-2 text-center w-20 border-neutral-300 text-5xl'>+</div>
        </div>
        <div onClick={resetHandler} className='bg-blue-500 text-white py-1 px-5 h-8 w-20 ml-16 mt-1 rounded-full text-lg'>Reset</div>
        
     </div>
        </div>

      
     </>
  )
}

export default UseState4