import React from "react"
import "./header.css"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>UniFlow</h1>
          </div>

          <div className='social flexSB'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head