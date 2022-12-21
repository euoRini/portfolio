import React from 'react'
import HeaderNav from '../../components/headernav'
import Portfolio from '../portfolio'
import Profile from '../profile'
import Contact from '../contact'

const MainPage = () => {
  return (
    <>
      <HeaderNav/>
      <main className='container-fluid text-bg-light'>
        <div className="row">
          <div className="col-4 d-flex align-items-center justify-content-end">
            <div className='position-relative' style={{"left":"115px"}}>
              <p className='fs-6 fw-light text-uppercase pe-none'>
                <span className='text-decoration-line-through'>⠀⠀⠀⠀⠀</span>
                ⠀erick porto / 2022
              </p>
              <p className='text-bg-dark text-light fs-1 text-uppercase font-monospace pe-none'>
                front-end junior
              </p>
            </div>
          </div>
          <div className="col-8">
            <img src="https://wallpaperaccess.com/full/1121977.jpg" class="img-fluid" alt="..."/>
          </div>
        </div>
        <Portfolio/>
        <Profile/>
        <Contact/>
      </main>
    </>
  )
}

export default MainPage