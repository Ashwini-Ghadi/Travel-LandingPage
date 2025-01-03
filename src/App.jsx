import React, { useEffect, useState } from 'react'
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  let heroData = [
    {text1: "Collect moments,", text2:"not things"},
    {text1: "Advanture", text2:"is calling"},
    {text1: "The world is yours", text2:"to explore"},
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

useEffect(()=>{
  setInterval(()=>{
    setHeroCount((count)=>{return count === 2 ? 0: count+1})
  },3000)
},[])

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
       />
    </>
  )
}

export default App
