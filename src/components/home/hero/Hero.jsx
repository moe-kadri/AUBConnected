import React from "react"
import Heading from "../../heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO UniFlow' title='An All-In-One Platform for AUBites' />
            <p>You can plan your schedules, trade courses, get customized feedback about courses and professors, and even chat and connect with alumni.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
