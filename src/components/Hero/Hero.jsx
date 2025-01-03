import React from 'react'
import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'


function Hero({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) {
    return (
        <div className="hero">
          {!playStatus ? (
        <>
            <div className="hero-text text-white">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-dot-play">
                <ul className="d-flex align-items-center gap-3" style={{ listStyle: "none" }}>
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
            </div>
        </>
      ) : null}

            <div
                className="hero-play d-flex align-items-center gap-3"
                style={{ position:'absolute',bottom:'20px', right:'30px',display:'flex', alignItems:'center',gap:'10px' }}
            >
                <img
                    onClick={() => setPlayStatus(!playStatus)}
                    src={playStatus ? pause_icon : play_icon}
                    height={40}
                    alt=""
                />
                <p className="pt-3 text-white">See the video</p>
            </div>
        </div>
    );
}

export default Hero;
