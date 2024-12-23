import React, { useState } from 'react'

 



function UseState2() {
   const [on, setOn] = useState(false);
 
   const switchHandle = () => {
     setOn(!on);
   };
 
   const checkOn = on ? 'ON' : 'OFF';
   const bgColor = on ? 'bg-green-400' : 'bg-white';
   const switchPosition = on ? 'left-5 bg-green-700' : 'left-40 bg-slate-300';
 
   return (
     <>
       <div className="h-[50%] w-[90%] rounded-xl bg-slate-600 p-5 m-5 flex items-center justify-center">
         <div
           className={`${bgColor} h-14 w-full rounded-2xl flex items-center relative`}
         >
           <div
             onClick={switchHandle}
             className={`${switchPosition} absolute rounded-full h-12 w-12 flex justify-center items-center cursor-pointer transition-all duration-300`}
           >
             <span className="text-white font-bold text-sm">{checkOn}</span>
           </div>
         </div>
       </div>
     </>
   );
 }
 
 export default UseState2;