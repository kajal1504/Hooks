import React, { useState } from 'react'

function UseState3() {
    const[value,setValue]=useState("hello kajal");

    const changeHandler=()=>{
        // setValue("welcome to jharkhand")
        let val=value;
        (val === 'welcome to jharkhand' ?setValue ('hello kajal') :setValue('welcome to jharkhand') );
  };
  return (
    <>
    <div className='h-[50%] w-[90%] bg-slate-600 rounded-xl p-5 m-5 flex justify-center items-center text-white'>
         <div>
            <h1>{value}</h1>
            <button onClick={changeHandler}
            className='h-6 w-20 bg-blue-800 rounded-lg'>click me</button>
         </div>
        
        
    </div>
    </>
  )
}

export default UseState3