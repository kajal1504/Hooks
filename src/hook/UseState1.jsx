import React from 'react'

function UseState1({inputValue,setInputValue}) { 
    // const [inputValue, setInputValue] = useState("");
    
  return (
     <div>
        <input type="text" 
        placeholder='enter any message'
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}/> 
        <h1>The current input value is:{inputValue}</h1>
     </div>
  )
}

export default UseState1