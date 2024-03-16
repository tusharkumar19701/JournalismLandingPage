import React from 'react';
import Button2 from './Button2';

const Contact = () => {
  return (
    <div className="contactus-form-container contact-main-container" id="contact">
        <div className="container">
            <h1 className='contactus-heading'>Contact Me</h1>
            <h3 className='contactus-subheading'>Questions, thoughts, or anything else</h3>
            <div>
                <form action="" className='form'>
                    <div className='contactus-form-container'>
                        <input type="text" className='formfield' placeholder='Enter your name' />
                        <input type="email" className='formfield' placeholder='Enter your email address' />
                        <input type="text" className='formfield' placeholder='Enter your subject'/>

                        <textarea name="message" className='formfield formfield-textarea' cols="30" rows="10" placeholder='Enter Your message'></textarea>
                    </div>
                    <Button2 />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;