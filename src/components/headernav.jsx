import React from 'react'
import {Link} from 'react-scroll'

export default function HeaderNav(){
  return (
  <header className='sticky-top'>
    <div className="px-3 py-2 text-bg-light">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a target={'_blank'} href="https://www.linkedin.com/in/erick-porto/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-dark text-decoration-none">
            Erick Porto
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li role='button'>
              <Link className='nav-link link-dark' activeClass="border-bottom border-warning border-3" smooth spy to="portfolio">
                portfolio
              </Link>
            </li>
            <li role='button'>
              <Link className='nav-link link-dark' activeClass="border-bottom border-warning border-3" smooth spy to="profile">
                profile
              </Link>
            </li>
            <li role='button'>
              <Link className='nav-link link-dark' activeClass="border-bottom border-warning border-3" smooth spy to="contact">
                contact
              </Link> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}
