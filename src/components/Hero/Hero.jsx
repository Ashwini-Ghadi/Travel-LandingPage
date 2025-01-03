import React from 'react'
import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'


function Hero({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) {
    return (
        <>
        <div className="hero">
            <div className="hero-text text-white">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore bg-white d-flex align-items-center gap-4 rounded-5">
                <p className='pt-2 fs-6' style={{color:"#292929"}}>Explore the features</p>
                <img src={arrow_btn} alt="" height={45}/>
            </div>
            <div className="hero-dot-play">
                <ul className="d-flex align-items-center gap-3" style={{listStyle:'none'}} >
                    <li onClick={()=> setHeroCount(0)} className={heroCount=== 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li  onClick={()=> setHeroCount(1)} className={heroCount=== 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li  onClick={()=> setHeroCount(2)} className={heroCount=== 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
            
            <div className="hero-play d-flex align-items-center gap-4" style={{flexDirection:'row-reverse', paddingRight:'90px'}}>
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ?pause_icon : play_icon} height={40} alt="" />
                <p className='pt-3 text-white'>See the video</p>
            </div></div>
        </div>
        </>
    )
}

export default Hero
