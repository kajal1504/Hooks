import React, { useState } from 'react'

function UseState5() {
    const[color,setColor] =useState("white")
  return (
    <>
    <div className='bg-slate-600 rounded-xl h-[50%] w-[90%] p-5 m-5 flex justify-center items-center'>
        <div style={{backgroundColor:color}}
        className='bg-white rounded-md h-[100%] w-[250%] flex items-center'>Backgound color change</div>

        
        <div className=' text-sm'>
            <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}
            className='bg-red-700 h-6 w-11  rounded-full'>Red</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}
            className='bg-blue-700 h-6 w-11  rounded-full'>blue</button>
            <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}
            className='bg-green-700 h-6 w-11  rounded-full'>green</button>
        </div>
    
    </div>
    </>
  )
}

export default UseState5