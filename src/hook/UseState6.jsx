import React, { useState } from 'react'

function UseState6() {
  const[color,setColor]=useState(" ")
  const changeBgColor =()=>{
     const randomColors='#'+Math.random().toString(16).slice(2,8)
     setColor(randomColors)


  }
  return (
    <>
     <div className='bg-slate-600 rounded-xl h-[50%] w-[90%] m-5 p-5'>
      <div style={{backgroundColor:color}}
      className=' body bg-white rounded-md h-[80%] w[120%]'>
      </div>
      <div className='flex justify-center mt-1'>
          <button onClick={changeBgColor}  style={{backgroundColor:color}}
          className='bg-blue-500  h-6 w-16  rounded-full text-white'> Click

          </button>
        </div>
     </div>
    </>
  )
}

export default UseState6