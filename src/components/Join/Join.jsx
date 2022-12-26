import React from 'react';
import './Join.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const Join = () => {

const form = useRef()
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zmn4fho', 'template_4ay0wgw', form.current, 'AZ6Gat0J5nDGDo9IK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='Join'id='join-us'>
        <div className='left-j'>
            <div>
                <span className='stroke-text'>
                    <hr />
                    ready to
                </span>
                <span>level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user-email' placeholder='Enter Your Email address' />
                <button type='submit'>Join Now</button>
            </form>
        </div>
    </div>
  )
}
