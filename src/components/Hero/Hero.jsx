import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import HeartLogo from '../../assets/heart.png';
import HeroImage from '../../assets/HeroPNG.png';
import HeroBack from '../../assets/background-lines.png'
import CaloriImage from '../../assets/bar-graph.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

export const Hero = () => {

const mobile = window.innerWidth <=768 ? true : false;

  return (
    <div className='Hero' id='Home'>
       <div className='blur Hero-blur'></div>
        <div className="left-h">
          <Header/>
          {/* the best ad */}
          <div className="best-workout-ad">
            <motion.div
            initial={{left: mobile ?'238px' :'250px'}}
            whileInView={{left:'8px'}}
            transition={{type:'tween',duration:3}}
            ></motion.div>
            <span>best workout clube in the world</span>
          </div>
          {/* Hero heading */}
          <div className="Hero-text">
            <div>
              <span className='stroke-text'>Hard</span>
              <span>Work</span>
            </div>
            <div>
              <span>Pays Off</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </div>
          {/* figures */}
          <div className="figures">
           <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix='+'></NumberCounter></span>
            <span>expret coachs</span>
           </div>
           <div>
            <span><NumberCounter end={990} start={700} delay='4' preFix='+'></NumberCounter></span>
            <span>members joined</span>
           </div>
           <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix='+'></NumberCounter></span>
            <span>fitness programs</span>
           </div>
          </div>
          {/* Hero buttons */}
          <div className='Hero-buttons'>
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>

          <motion.div className="heart-rate"
          initial={{right:'-1rem'}}
          whileInView={{right:'1.5rem'}}
          transition={{type:'tween',duration:3}}
          >
            <img src={HeartLogo} alt="heart" />
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>
          {/* Hero images */}
          <img src={HeroImage} className='Hero-image' alt="Hero-image" />
          <motion.img src={HeroBack} alt="Hero-image-back" initial={{right:'3rem'}} whileInView={{right:'10rem'}} transition={{type:'tween',duration:1}} />
          {/* calories */}
          <motion.div className='calories'
          initial={{right:'37rem'}}
          whileInView={{right:'28rem'}}
          transition={{type:'spring',duration:3}}
          >
            <img src={CaloriImage} alt="calories" />
            <div>
              <span>Calories Burned</span>
              <span>225 kcl</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}
