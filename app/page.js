/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from 'react'
import Board from './Components/Board';
import NewGame from './Components/NewGame';
import styles from '@/app/styles/responsive.module.css'

export default function page() {

  let defultArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  const [mainArray, setMainArray] = useState([]);
  const [index, setIndex] = useState(null);
  const [secondIndex, setSecondIndex] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [secondClicked, setSecondClicked] = useState(false);
  const [solvedArrayIndex, setSolvedArrayIndex] = useState([]);
  const [isNewGame, setIsNewGame] = useState(false);

  
  useEffect(() => {
    // Function to shuffle an array using the sort method
    const shuffleArray = (array) => {
      const newArray = [...array];
      newArray.sort(() => Math.random() - 0.5);
      return newArray;
    };

    // Shuffle the array when the component mounts
    setMainArray(shuffleArray(defultArray));
  }, [isNewGame]);

  const handleClick = (i) => {
    if(!clicked){
      setIndex(i);
      setClicked(true);
      setSecondClicked(false);
    }
    else{
      setSecondIndex(i);
      setClicked(false);
      setSecondClicked(true);
    }
  }
  
  const handleNewGame = () => {
    setMainArray([]);
    setIsNewGame((prev) => !prev);
    setSolvedArrayIndex([]);
    setClicked(false);
    setIndex(null);
    setSecondIndex(null);
    setSecondClicked(false);
    setIsMatched(false);
  }

  useEffect(() => {
    // if(!clicked) return;
    if(!secondClicked) return;
    if(secondIndex === null) return;
    if(mainArray[index] === mainArray[secondIndex]){
      setIsMatched(true);
      let CopySolvedArrIndex = [...solvedArrayIndex];
      CopySolvedArrIndex.push(index);
      CopySolvedArrIndex.push(secondIndex);
      setSolvedArrayIndex(CopySolvedArrIndex);
    }
    else{
      setIsMatched(false);
      setTimeout(() => {
        setIndex(null);
        setSecondIndex(null);
      }, 500);
    }
  }, [secondIndex])
  
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col'>
      <h1 className={`font-black text-4xl font-mono text-gray-600 my-4 ${styles.title}`}>Brilliants Memory</h1>
      <NewGame handleNewGame={handleNewGame}/>
      <Board mainArray={mainArray} handleClick={handleClick} index={index} secondIndex={secondIndex} isMatched={isMatched} solvedArrayIndex={solvedArrayIndex}/>
    </div>
  )
}
