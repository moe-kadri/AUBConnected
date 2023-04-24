import React from "react"
import Heading from "../../heading/Heading"
import "./academichead.css"

const AcademicHead = () => {
  return (
    <>
      <section className='academichead'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='UniFlow Academic Schedule' title='Not knowing how to plan your schedule?' />
            <p>Plan and organize your schedule, simply and easily.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default AcademicHead
