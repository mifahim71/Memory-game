import React from 'react'
import styles from '@/app/styles/responsive.module.css'

export default function Board({mainArray, handleClick, index, secondIndex, isMatched, solvedArrayIndex}) {
  return (
    <div className={`w-[400px] h-[400px] grid grid-cols-4 my-6 ${styles.mainBoard}`}>
      {mainArray.map((value, i) => <div className="justify-self-center w-[90%] h-[90%] rounded flex select-none justify-center items-center text-4xl font-mono p-1 bg-gray-600 font-black cursor-pointer"
                                        style={{color: index === i || secondIndex === i || (index === i && isMatched || secondIndex === i && isMatched || solvedArrayIndex[0] === i || solvedArrayIndex[1] === i || solvedArrayIndex[2] === i || solvedArrayIndex[3] === i || solvedArrayIndex[4] === i || solvedArrayIndex[5] === i || solvedArrayIndex[6] === i || solvedArrayIndex[7] === i || solvedArrayIndex[8] === i || solvedArrayIndex[9] === i || solvedArrayIndex[10] === i || solvedArrayIndex[11] === i || solvedArrayIndex[12] === i || solvedArrayIndex[13] === i || solvedArrayIndex[14] === i || solvedArrayIndex[15] === i)? 'black':'rgb(75 85 99)'}}
                                        onClick={()=>handleClick(i)} key={i} value={value}>{value}</div>)}
    </div>
  )
}
