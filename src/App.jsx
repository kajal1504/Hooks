import React, { useState } from 'react'
import './App.css'
import UseState1 from './hook/UseState1'

function App() {
  const [inputValue, setInputValue] = useState("");
   

  return (
    <>
      <UseState1 inputValue={inputValue} setInputValue={setInputValue} /> 
    </>
  )
}

export default App
