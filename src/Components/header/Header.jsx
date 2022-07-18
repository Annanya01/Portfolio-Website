import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.jpg'
import HeaderSocial from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I''m</h5>
        <h1>Annanya Vijay</h1>
        <h5 className="text-light">Software Engineer
        </h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
         
      </div>
    </header>
  )
}
