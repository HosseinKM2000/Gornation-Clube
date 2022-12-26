import React from 'react';
import './Programs.css';
import {programsData} from '../../data/categories';
import arrow from '../../assets/right-arrow.png';

export const Programs = () => {
  return (
    <div className="Programs" id="Programs">
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text-2'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text-2'>To Shape you</span>
        </div>
        <div className="programs-categories">
           {
            programsData.map((program=>(
            <div className="categorie">
              <img src={program.img} alt="" />
              <span>{program.head}</span>
              <span>{program.details}</span>
              <div>
                <span>Join now</span>
                <img src={arrow} alt="" />
              </div>
              </div>
            )))
           }
           </div> 
    </div>
  )
}
