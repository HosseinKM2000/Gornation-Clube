import React from 'react';
import './Footer.css';
import Github from '../../assets/media/github.png';
import Instagram from '../../assets/media/instagram.png';
import Linkedin from '../../assets/media/linkedin.png'; 
import gornationlOGO from '../../assets/LOGO.png';


export const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div>
            <img src={Github} alt="Github" />
            <img src={Instagram} alt="Instagram" />
            <img src={Linkedin} alt="linkedin" />
        </div>
        <img src={gornationlOGO} alt="gornationLOGO" />
        <div className="blur Footer-blur-1"></div>
        <div className="blur Footer-blur-2"></div>
    </div>
  )
}
