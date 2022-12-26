import React from 'react';
import './Reasons.css';
import tickIMg from '../../assets/checked.png';
import adidasImg from '../../assets/adidas.png';
import nikeImg from '../../assets/nike.png';
import nbIMG from '../../assets/pngwing.com (1).png';


export const Reasons = () => {
  return (
    <div className='reasons' id='Reasons'>
        <div className="left-r">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
        <div className="right-r">
            <span>some Reasons</span>
            <span><span className='stroke-text'>why</span> choose us?</span>
            <div alt='1'>
                <div>
                    <img src={tickIMg} alt="tick" />
                    <span>over 140+ expert coachs</span>
                </div>
                <div>
                    <img src={tickIMg} alt="tick" />
                    <span>train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tickIMg} alt="tick" />
                    <span>1 new program for new member</span>
                </div>
                <div>
                    <img src={tickIMg} alt="tick" />
                    <span>reliable partners</span>
                </div>
            </div>
            <span>our partners</span>
            <div alt='img'>
                <img src={adidasImg} alt="adidas" />
                <img src={nikeImg} alt="nike" />
                <img src={nbIMG} alt="NB" />
            </div>
        </div>
    </div>
  )
}
