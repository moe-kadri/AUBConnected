import React from "react"
import Heading from "../../heading/Heading"
import "./careerhead.css"

const CareerHead = () => {
  return (
    <>
      <section className='careerhead'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='UniFlow Career Guidance' title='Confused about your future career?' />
            <p>Connect and interact with alumni to better know where to head.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default CareerHead
