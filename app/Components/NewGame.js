import React from 'react'
import styles from '@/app/styles/responsive.module.css';

export default function NewGame({handleNewGame}) {
  return ( 
    <div className={`cursor-pointer w-[390px] h-[40px] bg-gray-600 rounded flex justify-center items-center text-2xl font-black font-mono ${styles.newGame}`}
         onClick={handleNewGame}>
        NEWGAME
    </div>
  )
}
