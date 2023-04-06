import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/trading'>Trade Courses</Link>
            </li>
            <li>
              <Link to='/feedback'>Feedback</Link>
            </li>
            <li>
              <Link to='/careerguidance'>Career Guidance</Link>
            </li>
            <li>
              <Link to='/schedule'>Academic Schedule</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/about'>About</Link> {/*team here*/}
            </li>
          </ul>

          {/* <div className='start'>
            <div className='button'>Sign In</div>
            <div className='button'>Sign Up</div>
          </div> */}
          <ul className="start">
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header