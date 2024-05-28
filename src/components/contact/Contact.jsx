import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vubw5kj', 'template_usl73ek', form.current, {publicKey: 'YurzvQVCQnlofZ5Fo',})
      .then(() => {
          console.log('SUCCESS!');
        },(error) => {
          console.log('FAILED...', error.text);
        });
  };

  return (

    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sriram23803@gmail.com</h5>
            <a href="mailto:sriram23803@gmail.com" target='_blank'>send a mail</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>9342038749</h5>
            <a href="https://web.whatsapp.com/send?phone=+919342038749" target='_blank'>send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text"  name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' cols="7" rows="10" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

      
    </section>
  )
}

export default Contact