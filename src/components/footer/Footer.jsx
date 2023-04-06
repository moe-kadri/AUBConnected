import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>UNIFLOW</h1>
            <span>ONLINE UNIVERSITY SERVICES</span>
            <p>All your AUB matters in one place, faster and easier!</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
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
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>Privacy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                American University of Beirut, Bliss Street, Beirut, Lebanon
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +961 3 123 456
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                uniflow@mail.aub.edu
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All Rights Reserved | Made With <i className='fa fa-heart'></i> By Team UniFlow
        </p>
      </div>
    </>
  )
}

export default Footer
