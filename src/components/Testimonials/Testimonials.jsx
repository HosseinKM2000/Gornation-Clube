import React , {useState} from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonials';
import arrow_L from "../../assets/left-arrow (1).png";
import arrow_R from "../../assets/right-arrow1.png";
import { motion } from 'framer-motion';


export const Testimonials = () => {

const [selected,setSelected] = useState(0);
const tLength = testimonialsData.length;




  return (
    <div className='Testimonials' id='Testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
              <motion.p key={selected} initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-100}} transition={{type:'spring',duration:2}}>{testimonialsData[selected].text}</motion.p> 
              <div>
                <span>Coach : </span>
                <span><span>{testimonialsData[selected].Name}</span></span>
              </div> 
        </div>
        <div className="right-t">
            <div>
                <motion.div className='borderIMG' initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:'spring',duration:2}}></motion.div>
                <motion.div className='backIMG' initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{type:'spring',duration:1}}></motion.div>
                <motion.img src={testimonialsData[selected].img} alt="imgSlide" key={selected} initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-100}} transition={{type:'spring',duration:2}} />
            </div>
            <div>
             <img onClick={()=>{selected===0 ? setSelected(tLength-1) :setSelected((prev) => prev -1)}} src={arrow_L} alt="arrow" />
             <img src={arrow_R} alt="arrow" onClick={()=> {selected===tLength-1 ? setSelected(0) :setSelected((prev) => prev+1)}} />
            </div>
        </div>
    </div>
  )
}
