import React from "react"
import Heading from "../../heading/Heading"
import "./abouthead.css"

const AboutHead = () => {
  return (
    <>
      <section className='abouthead'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='About UniFlow' title='Wonna know more about us?' />
            <p>Check the below information to better know UniFlow.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default AboutHead;
