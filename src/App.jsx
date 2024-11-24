// import React  from 'react'

import UseState1 from './hook/UseState1'
import UseState2 from './hook/UseState2'

function App() {
  // const [inputValue, setInputValue] = useState("");
   

  return (
    <>
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 w-[100wh] h-[100vh] grid grid-cols-3 gap-2 p-10 cursor-pointer'>
    <UseState1  /> 
      {/* //inputValue={inputValue} setInputValue={setInputValue} */}

      <UseState2/>
    </div>
      
    </>
  )
}

export default App
