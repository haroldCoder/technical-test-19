import React from 'react'

export default function Squres({color}) {
    console.log(color);
  return (
    <div className={`w-[50px] h-[50px] m-0 p-0 border-[1px] border-gray-800 ${color == "black" ? "bg-black" : "bg-white"}`}>
        
    </div>
  )
}
