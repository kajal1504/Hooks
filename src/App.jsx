// import React  from 'react'

import UseState1 from './hook/UseState1'
import UseState2 from './hook/UseState2'
import UseState3 from './hook/UseState3'
import UseState4 from './hook/UseState4'
import UseState5 from './hook/UseState5'
import UseState6 from './hook/UseState6'
 

function App() {
  // const [inputValue, setInputValue] = useState("");
   

  return (
    <>
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 w-[100wh] h-[100vh] grid grid-cols-3 gap-2 p-5 cursor-pointer'>
    <UseState1  /> 
      {/* //inputValue={inputValue} setInputValue={setInputValue} */}

      <UseState2/>
      <UseState3/>
      <UseState4/>
      <UseState5/>
      <UseState6/>
       
    </div>
      
    </>
  )
}

export default App
