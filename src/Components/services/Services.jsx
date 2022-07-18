import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className='services'>
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX*/}
        <article className='services'>
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/*End of Web Development*/}
        <article className='services'>
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*End of Content Creation */}
      </div>
    </section>
  )
}
