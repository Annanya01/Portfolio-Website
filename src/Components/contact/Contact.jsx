import React from 'react'
import './contact.css';
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v199mjy', 'template_t23we2b', form.current, 'DNTezW_YoASviFKIz')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
    <div className="conatact__options">
    <article className='contact__option'>
      <MdOutlineMail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>annanyavijay@gmail.com</h5>
      <a href="mailto:annanyavijay@gmail.com" target='_blank'>Send a Message</a>
    </article>
    <article className='contact__option'>
      <RiMessengerLine className='contact__option-icon'/>
      <h4>Messenger</h4>
      <h5>annanyavijay@gmail.com</h5>
      <a href="https://m.me/annanya.vijay.3/" target='_blank'>Send a Message</a>
    </article>
    <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>919630277174</h5>
      <a href="https://api.whatsapp.com/send?phone=919630277174">Send a Message</a>
    </article>
    </div>
    {/* END OF CONTACT OPTIONS*/}
    <form ref={form} onSubmit={sendEmail }>
    <input type="text" name='name' placeholder='Your full name' required />
    <input type="email" name='email' placeholder='Your email' required />
    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
   </section>
  ) 
}
