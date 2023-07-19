import React, { useEffect, useState } from 'react'
import Squres from './Squres'

export default function ChessBoard() {
    function getSquareColor(index) {
        const row = Math.floor(index / 8);
        const col = index % 8;
      
        if (row % 2 === 0) {
          // Filas pares
          return col % 2 === 0 ? "black" : "white";
        } else {
          // Filas impares
          return col % 2 === 0 ? "white" : "black";
        }
      }

  return (
    <div className='grid grid-cols-8 w-[25%] border-2 border-[#222]'>
        {
            Array.from({length: 64}, (_, index)=>(
                <Squres color={getSquareColor(index)} />
            ))
        }
    </div>
  )
}
