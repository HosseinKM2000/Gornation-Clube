import React from 'react';
import './Plans.css';
import { plansData } from '../../data/cardsData';

export const Plans = () => {
  return (
    <>
    <div className="blur Plan-blur-1"></div>
    <div className="blur Plan-blur-2"></div>
    <div className='Plans-container'>
        <div className="Plans-header" id='Plans'>
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now whith us</span>
        </div>
        {/* Plans card */}
        <div className="Plans">
          {
            plansData.map((data)=>(
                <div className="Plan">
                    <img src={data.mark} alt="plan-img" />
                    <span alt='plan-head'>{data.head}</span>
                    <div>
                        <img src={data.Dollar} alt="dollar" />
                        <span>{data.cost}</span>
                    </div>
                    <div>
                    {
                        data.benifit.map((item)=>(
                        <div>
                            <img src={data.tick}/>
                            <span>{item}</span>
                        </div>
                        ))
                    }
                    </div>
                    <div>
                        <span>See more benifits</span>
                        <img src={data.Arrow} alt="img" />
                    </div>
                    <button>Join now</button>
                </div>
            ))
          }
        </div>
    </div>
    </>
  )
}
