import React, { useState } from 'react'

function UseState2() {
    const [on, setOn] = useState(false);

    const switchHandle=()=>{
        setOn(!on);
     //       style={`switch ${checkOn}`}
   
    };
    const checkOn = on ? 'ON' : 'OFF'
    const bgColor = on ? 'bg-green-400' : 'bg-slate-400';
    const switchColor=on ? 'bg-green-700' : 'bg-white'
  return (
     <>
     <div className='h-[30%] w-[90%] rounded-xl bg-slate-600  p-5 m-5 '>
        <div 
        className={`${bgColor} bg-black h-20  rounded-2xl flex  items-center`}>
             <div 
             onClick={switchHandle}
      
             className= {`rounded-full h-10 w-14 flex justify-center items-center
            
                 ${ switchColor} `}>
                 
                
              
                  <span>{checkOn}</span>
             </div>

        </div>
       
     </div>
     </>
  )
}

export default UseState2